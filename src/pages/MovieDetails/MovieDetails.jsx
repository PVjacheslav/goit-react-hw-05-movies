import { fetchMovieDetails } from "helpers/TmdbApi";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Button, Container, LinkInfo, List, ListInfo } from "./MovieDetails.styled";
import Loader from "components/Loader/Loader";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const fetchMovieDetailsFilms = () => {
            setLoading(true);

            fetchMovieDetails(movieId)
                .then(detailMovie => {
                    setMovieInfo(detailMovie);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        fetchMovieDetailsFilms();
    }, [movieId]);

    if (!movieInfo) {
        return;
    }

    const {
        title,
        release_date,
        popularity,
        overview,
        genres,
        poster_path,
        original_title,
    } = movieInfo || {};

    return (
        <>
            <Link to={location.state?.from ?? '/'}>
                <Button type="button">Back</Button>  
            </Link>
            {loading && <Loader />}
            
            {movieInfo && (
                <Container>
                    <img width="320px"
                        src={
                            poster_path
                                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                        }
                        alt={original_title}
                    />
                    <div>
                        <h1>
                            {title} ({release_date.slice(0, 4)})
                        </h1>
                        <p>User scoore: {popularity}</p>
                        <h2>Overview</h2>
                        <p>{overview}</p>
                        <h2>Category</h2>
                        <List>
                            {genres.map(genre => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </List>
                    </div>
                </Container>
            )}
            <hr />
            <div>
                <h3>Additional information</h3>
                <ListInfo>
                    <li>
                        <LinkInfo to="cast">Cast</LinkInfo>
                    </li>
                    <li>
                        <LinkInfo to="reviews">Reviews</LinkInfo>
                    </li>
                </ListInfo>
                <hr />
                <Outlet />
            </div>
        </>
    )
}

export default MovieDetails;