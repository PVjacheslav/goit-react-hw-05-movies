import Loader from 'components/Loader/Loader';
import { fetchTrending } from 'helpers/TmdbApi';
import { useState, useEffect } from 'react';

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
            <div films={films} />

            {loading && <Loader />}
        </main>
    )
}