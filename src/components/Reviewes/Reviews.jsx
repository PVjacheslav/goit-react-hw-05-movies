import Loader from "components/Loader/Loader";
import { fetchReviews } from "helpers/TmdbApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { List } from "./Reviews.styled";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchReviewsFilms = () => {
            setLoading(true);

            fetchReviews(movieId)
                .then(reviews => {
                    setReviews(reviews)
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        };
        fetchReviewsFilms()
    }, [movieId]);

    return (
        <>
            {loading && <Loader />}
            {reviews.length !== 0 && (
                <div>
                    <List>
                        {reviews.map(review => (
                            <li key={review.id}>
                                <h3>Author: {review.author}</h3>
                                <p>{review.content}</p>
                            </li>
                        ))}
                    </List>
                </div>
            )}
            {reviews.length === 0 && (
                <div>We currently have no reviews for this movie</div>
            )}
        </>
    );
};

export default Reviews;