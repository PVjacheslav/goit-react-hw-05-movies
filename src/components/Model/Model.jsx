import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Header, Link } from "./Model.styled";
import Loader from "components/Loader/Loader";

const Model = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <Link to="/" end>
                        Home
                    </Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </Header>

            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </Container>
    );
};

export default Model;