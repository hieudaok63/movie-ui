import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useSWR from 'swr';
import { fetcher, tmdbAPI } from '../../config';
import MovieCard from './MovieCard';
import { Navigation, Pagination } from 'swiper';

function MovieList({ type = 'now_playing' }) {
    const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);
    const movies = data?.results || [];

    return (
        <div className="movie-list">
            <Swiper
                slidesPerView={4}
                grabCursor="true"
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {movies.length > 0 &&
                    movies.map((item, i) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item}></MovieCard>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

export default MovieList;
