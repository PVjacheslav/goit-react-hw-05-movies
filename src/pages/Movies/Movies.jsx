import Forma from "components/Forma/Forma";
import Loader from "components/Loader/Loader";
import { fetchSearchKeyword } from "helpers/TmdbApi";
import ChangeList from "pages/ChangeList/ChangeList";
import { useState } from "react"

const Movies = () => {
    const [searchFilms, setSearchFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noMoviesText, setNoMoviesText] = useState(false);

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
            <Forma searchMovies={searchMovies} />
            {loading && <Loader />}
            {noMoviesText && (
                <p>No movie was found for your request. Please try again.</p>
            )}
            {searchFilms && <ChangeList films={searchFilms} />}
        </main>
    );
};

export default Movies;