import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import { fetcher, tmdbAPI } from '../config';

function MoviedetailsPage() {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
    if (!data) return null;
    const { backdrop_path, poster_path, title, genres, overview } = data;
    return (
        <div className="page-container pb-10">
            <div className="w-full h-[600px] relative">
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div
                    className="w-full h-full bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${tmdbAPI.imageOriginal(
                            backdrop_path,
                        )})`,
                    }}
                ></div>
            </div>
            <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[180px] relative z-10 pb-10">
                <img
                    src={tmdbAPI.imageOriginal(poster_path)}
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>
            <h1 className="text-center text-4xl font-bold text-white mb-10">
                {title}
            </h1>
            {genres.length > 0 && (
                <div className="flex items-center justify-center gap-x-5 mb-10">
                    {genres.map((item) => (
                        <span
                            key={item.id}
                            className="py-1 px-5 border border-primary text-primary rounded-full"
                        >
                            {item.name}
                        </span>
                    ))}
                </div>
            )}
            <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
                {overview}
            </p>
            <MovieCredits></MovieCredits>
            <MovieVideos></MovieVideos>
            <MovieSimilar></MovieSimilar>
        </div>
    );
}

function MovieCredits() {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, 'credits'), fetcher);
    if (!data) return null;
    const { cast } = data;
    if (!cast || cast.length <= 0) return null;

    return (
        <div className="py-10">
            <h2 className="text-center text-3xl mb-10">Casta</h2>
            <div className="grid grid-cols-4 gap-5">
                {cast.slice(0, 4).map((item) => (
                    <div className="cast-item" key={item.id}>
                        <img
                            src={tmdbAPI.imageOriginal(item.profile_path)}
                            alt=""
                            className="w-full h-[300px] object-cover rounded-lg mb-3"
                        />
                        <h3 className="text-xl ">{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

function MovieVideos() {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, 'videos'), fetcher);
    if (!data) return null;
    const { results } = data;
    if (!results || results.length <= 0) return null;

    return (
        <div className="py-10">
            <div className="flex flex-col gap-10">
                {results.slice(0, 2).map((item) => (
                    <div key={item.id} className="">
                        <h3 className="mb-5 text-xl font-medium p-3 bg-slate-800 inline-block">
                            {item.name}
                        </h3>
                        <div className="w-full aspect-video">
                            <iframe
                                width="699"
                                height="393"
                                src={`https://www.youtube.com/embed/${item.key}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; 
                        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full object-fill"
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function MovieSimilar() {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, 'similar'), fetcher);
    if (!data) return null;
    const { results } = data;
    if (!results || results.length <= 0) return null;

    return (
        <div className="py-10">
            <h2 className="text-3xl font-medium mb-10">Similar Movies</h2>
            <div className="movie-list">
                <Swiper
                    grabCursor={true}
                    spaceBetween={40}
                    slidesPerView={'auto'}
                >
                    {results.length > 0 &&
                        results.map((item, i) => (
                            <SwiperSlide key={item.id}>
                                <MovieCard item={item}></MovieCard>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
}

export default MoviedetailsPage;
