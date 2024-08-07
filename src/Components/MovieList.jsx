import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);
  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
      console.log(movieList);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };
  return (
    <div className="relative">
      <IoChevronBackOutline
        className={`hidden md:block text-white text-[50px]  mx-8 absolute mt-[150px] cursor-pointer  p-2 z-10  ${
          index_ % 3 == 0 ? `mt-[80px]` : `mt-[150px]`
        }`}
        onClick={() => slideLeft(elementRef.current)}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-3 pb-5 scroll-smooth"
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        className={`hidden md:block  text-white text-[50px] absolute  mt-[150px] cursor-pointer right-0 p-2 z-10 top-0
        ${index_ % 3 == 0 ? `mt-[80px]` : `mt-[150px]`}`}
        onClick={() => slideRight(elementRef.current)}
      />
    </div>
  );
}

export default MovieList;
