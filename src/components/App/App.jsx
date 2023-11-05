import Model from "components/Model/Model";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

// import Home from "pages/Home/Home";
// import Cast from "components/Cast/Cast";
// import Reviews from "components/Reviewes/Reviews";
// import Movies from "pages/Movies/Movies";
// import MovieDetails from "pages/MovieDetails/MovieDetails";

const Home = lazy(() => import("pages/Home/Home"))
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviewes/Reviews"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"))

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Model/>}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies/>}/>

        <Route path="/movies/:movieId" element={<MovieDetails />}>  
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        
        <Route path="*" element={<Home/>} />
      </Route>
    </Routes>
  );
};

export default App;