import { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'swiper/scss';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Main from './components/layout/Main';

const Homepage = lazy(() => import('./pages/HomePage'));
const MoviedetailsPage = lazy(() => import('./pages/MoviedetailsPage'));
const MoviePage = lazy(() => import('./pages/MoviePage'));

function App() {
    return (
        <Fragment>
            <Suspense fallback={<></>}>
                <Routes>
                    <Route element={<Main></Main>}>
                        <Route
                            path="/"
                            element={
                                <Fragment>
                                    <Banner></Banner>
                                    <Homepage></Homepage>
                                    <Footer></Footer>
                                </Fragment>
                            }
                        ></Route>
                        <Route
                            path="/movies"
                            element={<MoviePage></MoviePage>}
                        ></Route>
                        <Route
                            path="/movie/:movieId"
                            element={<MoviedetailsPage></MoviedetailsPage>}
                        ></Route>
                    </Route>
                </Routes>
            </Suspense>
        </Fragment>
    );
}

export default App;
