import { useState, useEffect } from 'react';
import MoviesList from 'pages/MoviesList/MoviesList';
import { fetchTrending } from 'helpers/TmdbApi';
import Loader from 'components/Loader/Loader';

const Home = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTrendingFilms = () => {
            setLoading(true);

            fetchTrending()
                .then(trendingFilms => {
                    setFilms(trendingFilms)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false)
                });
        };
        fetchTrendingFilms()
    }, [])

    return (
        <main>
            <h1>Tranding today</h1>
            <MoviesList films={films} />

            {loading && <Loader />}
        </main>
    );
};

export default Home;