import { Fragment } from 'react';
import MovieList from '../components/movie/MovieList';

function HomePage() {
    return (
        <Fragment>
            <section className="movies-layout page-container pb-5">
                <h2 className="text-white mb-5 text-2xl font-bold">
                    Now Playing
                </h2>
                <MovieList></MovieList>
            </section>

            <section className="movies-layout page-container pb-5">
                <h2 className="text-white mb-5 text-2xl font-bold">
                    Top Rated
                </h2>
                <MovieList type="top_rated"></MovieList>
            </section>

            <section className="movies-layout page-container pb-5">
                <h2 className="text-white mb-5 text-2xl font-bold">Trending</h2>
                <MovieList type="popular"></MovieList>
            </section>
        </Fragment>
    );
}

export default HomePage;
