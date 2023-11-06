import Model from "components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

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
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        
        <Route path="*" element={<Home/>} />
      </Route>
    </Routes>
  );
};

export default App;