import useSWR from 'swr';
import { SwiperSlide, Swiper } from 'swiper/react';
import { fetcher } from '../../config';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useNavigate } from 'react-router-dom';

function Banner() {
    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=97032f7b09230d85d03f31bd8b6cb201`,
        fetcher,
    );
    const movies = data?.results || [];

    return (
        <section className="banner h-[400px] page-container mb-8 overflow-hidden object-cover">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {movies.length > 0 &&
                    movies.map((item, i) => (
                        <SwiperSlide key={item.id}>
                            <BannerItem item={item}></BannerItem>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
}

function BannerItem({ item }) {
    const { title, poster_path, id } = item;
    const navigate = useNavigate();
    return (
        <div className="w-full h-full rounded-lg relative">
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.1)] rounded-lg"></div>
            <img
                className="w-full h-full object-cover rounded-lg "
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt=""
            />
            <div className="absolute left-5 bottom-5 w-full text-white">
                <h2 className="font-bold text-4xl mb-6">{title}</h2>
                <div className="flex items-center gap-x-3 text-gray-300 text-xs mb-8">
                    <span className=" py-1 px-2 border border-gray-300 rounded-sm">
                        Action
                    </span>
                    <span className=" py-1 px-2 border border-gray-300 rounded-sm">
                        Advanture
                    </span>
                    <span className=" py-1 px-2 border border-gray-300 rounded-sm">
                        Drama
                    </span>
                </div>

                <button
                    onClick={() => navigate(`/movie/${id}`)}
                    className="flex justify-center items-center px-5 py-[6px] bg-primary rounded-md hover:bg-pink-600 text-sm"
                >
                    {'Watch'}{' '}
                    <span className="pl-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </span>{' '}
                </button>
            </div>
        </div>
    );
}

export default Banner;
