import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";

function App() {
  //state
  const [movie, setMovie] = useState("spider man");
  const [movieList, setMovieList] = useState("");

  // move this to env file
  const API_KEY = ``;

  //functions
  const handleSearch = (e) => {
    setMovie(movie);
    fetchData();

    e.preventDefault();
  };
  // fetch data
  const fetchData = async () => {
    await axios
      .get(`http://www.omdbapi.com/?s=${movie}&apikey=${API_KEY}`)
      .then((resp) => {
        const response = resp.data.Search;
        setMovieList(response);
      });
  };

  // useEffect Hook
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <SearchForm handleSearch={handleSearch} setMovie={setMovie} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6 lg:px-10 bg-gray-700">
          {movieList?.length > 0 ? (
            movieList.map((movie) => <MovieCard movie={movie} />)
          ) : (
            <p>No movies found!</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
