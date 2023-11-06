import Form from "components/Form/Form";
import Loader from "components/Loader/Loader";
import { fetchSearchKeyword } from "helpers/TmdbApi";
import MoviesList from "pages/MoviesList/MoviesList";
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchFilms, setSearchFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noMoviesText, setNoMoviesText] = useState(false);

    const getQueryUrl = searchParams.get('query') ?? '';

    const handleSubmit = value => {
        const nextParams = value !== '' ? { query: value } : {};
        setSearchParams(nextParams);
     };

    useEffect(() => {
        if (getQueryUrl === '') {
            return;
        }
    })   
    
    const searchMovies = queryMovie => {
        setLoading(true);

        fetchSearchKeyword(queryMovie)
            .then(searchResults => {
                setSearchFilms(searchResults);
                setNoMoviesText(searchResults.length === 0);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            });
    };

    return (
        <main>
            <Form searchMovies={searchMovies} />
            {loading && <Loader />}
            {noMoviesText && (
                <p>No movie was found for your request. Please try again.</p>
            )}
            {searchFilms && <MoviesList films={searchFilms} />}
        </main>
    );
};

export default Movies;