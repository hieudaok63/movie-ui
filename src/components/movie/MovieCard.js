import { useNavigate } from 'react-router-dom';
import { tmdbAPI } from '../../config';

function MovieCard({ item }) {
    const { title, poster_path, release_date, vote_average, id } = item;
    const navigate = useNavigate();
    return (
        <div className="movies-card rounded-lg p-3 bg-slate-800 mb-8 select-none">
            <img
                src={tmdbAPI.image500(poster_path)}
                alt=""
                className="w-full h-[220px] object-cover rounded-lg mb-2"
            />
            <h3 className="text-white text-base font-semibold mb-3 h-[24px] overflow-hidden title-movies">
                {title}
            </h3>
            <div className="flex items-center justify-between text-gray-400 text-xs mb-10">
                <span>{new Date(release_date).getFullYear()}</span>
                <span className="flex items-center">
                    {vote_average}{' '}
                    <span className="text-yellow-400 ml-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </span>
                </span>
            </div>
            <button
                onClick={() => navigate(`/movie/${id}`)}
                className="flex justify-center text-white items-center w-full px-5 py-[6px] bg-primary rounded-md hover:bg-pink-600 text-sm"
            >
                Watch Now{' '}
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
    );
}

export default MovieCard;
