import Loader from "components/Loader/Loader";
import { fetchActors } from "helpers/TmdbApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List, Text } from "./Cast.styled";

const Cast = () => {
    const { movieId } = useParams();
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const onActorsMovie = () => {
            setLoading(true);

            fetchActors(movieId)
                .then(actors => {
                    setActors(actors);
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false)
                });
        };
        onActorsMovie();
    }, [movieId]);

    return (
        <div>
            {loading && <Loader />}
            
            <List>
                {actors.map(({ id, profile_path, original_name, name, character }) => (
                    <li key={id}>
                        <img width="240px"
                            src={
                                profile_path
                                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                                    : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                            }
                            alt={original_name}
                        />
                        <Text>{name}</Text>
                        <Text>Character: {character}</Text>
                    </li>
                ))}
            </List>
        </div>
    )
}

export default Cast;