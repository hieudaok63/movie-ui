import { useEffect, useState } from 'react';
import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import { fetcher } from '../config';
import usedebounce from '../hooks/useDebounce';

const pageCount = 5;
function MoviePage() {
    const [nextPage, setNextPage] = useState(1);
    const [filter, setFilter] = useState('');
    const [url, setUrl] = useState(
        `https://api.themoviedb.org/3/movie/popular?api_key=97032f7b09230d85d03f31bd8b6cb201&page=${nextPage}`,
    );
    const filterDebounce = usedebounce(filter, 700);
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const { data, error } = useSWR(url, fetcher);
    const loading = !data && !error;

    useEffect(() => {
        if (filterDebounce) {
            setUrl(
                `https://api.themoviedb.org/3/search/movie?api_key=97032f7b09230d85d03f31bd8b6cb201&query=${filterDebounce}&page=${nextPage}`,
            );
        } else {
            setUrl(
                `https://api.themoviedb.org/3/movie/popular?api_key=97032f7b09230d85d03f31bd8b6cb201&page=${nextPage}`,
            );
        }
    }, [filterDebounce, nextPage]);

    if (!data) return null;
    const movies = data?.results || [];

    return (
        <div className="py-10 page-container">
            <div className="flex mb-10">
                <div className="flex-1">
                    <input
                        type="text"
                        className="w-full p-4 bg-slate-800 text-white outline-none"
                        placeholder="Enter your movie..."
                        onChange={handleFilterChange}
                    />
                </div>
                <button className="p-4 bg-primary text-white">
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
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
            {loading && (
                <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent mx-auto animate-spin"></div>
            )}
            <div className="grid grid-cols-4 gap-10">
                {!loading &&
                    movies.length > 0 &&
                    movies.map((item) => (
                        <MovieCard key={item.id} item={item}></MovieCard>
                    ))}
            </div>
            <div className="flex item-center justify-center mt-5 gap-x-5">
                <span
                    onClick={() => setNextPage(nextPage - 1)}
                    className="cursor-pointer  flex items-center"
                >
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
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </span>
                {new Array(pageCount).fill(0).map((item, i) => (
                    <span
                        key={i}
                        onClick={() => setNextPage(i + 1)}
                        className="cursor-pointer flex items-center py-2 px-3 leading-none bg-white text-slate-900 rounded-[4px]"
                    >
                        {i + 1}
                    </span>
                ))}

                <span
                    onClick={() => setNextPage(nextPage + 1)}
                    className="cursor-pointer flex items-center"
                >
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
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </span>
            </div>
        </div>
    );
}

export default MoviePage;
