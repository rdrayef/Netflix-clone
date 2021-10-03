import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const posterbaseUrl = 'https://image.tmdb.org/t/p/w500/';
    const [trailerUrl, setTrailerUrl] = useState('');
    //A snippet of code which runs based on a specific condition or variable

    useEffect(() => {
        //if [],run once when the row loads, and dont run again
        async function fetchData() {
            //send an async request (live) to axios which make a call for the api and wait for it to grap all data
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "").then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((error) => console.log("here is the error >>>", error));
        }
    };

    return (
        <div className="row">
            {/* Title */}
            <h2>{title}</h2>
            {/*container --> posters */}
            <div className="row__posters">
                {/*row poster */}
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${posterbaseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
