import Form from "components/Form/Form";
import Loader from "components/Loader/Loader";
import { fetchSearchKeyword } from "helpers/TmdbApi";
import MoviesList from "pages/MoviesList/MoviesList";
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchFilms, setSearchFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getQueryUrl = searchParams.get('query') ?? '';

    const handleSubmit = value => {
        const nextParams = value !== '' ? { query: value } : {};
        setSearchParams(nextParams);
     };

    useEffect(() => {
        if (getQueryUrl === '') {
            return;
        }

        async function searchMovie() {
            setSearchFilms([]);
            setLoading(true);
            try {
                const response = await fetchSearchKeyword(getQueryUrl);
                if (response.results.length === 0) {
                    return toast.error('Sorry, there are no movies. Try again');
                }
                setSearchFilms(response.results);
            } catch {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        searchMovie()
    }, [getQueryUrl])   
    
    // const searchMovies = queryMovie => {
    //     setLoading(true);

    //     fetchSearchKeyword(queryMovie)
    //         .then(searchResults => {
    //             setSearchFilms(searchResults);
    //             setNoMoviesText(searchResults.length === 0);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //         .finally(() => {
    //             setLoading(false)
    //         });
    // };

    return (
        <main>
            <Form searchMovies={handleSubmit} />
            {loading && <Loader />}
            {error && (
                <p>No movie was found for your request. Please try again.</p>
            )}
            {searchFilms.length !==0 && <MoviesList films={searchFilms} />}
        </main>
    );
};

export default Movies;