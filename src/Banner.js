
import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from './requests';
function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        //if [],run once when the row loads, and dont run again
        async function fetchData() {
            //send an async request (live) to axios which make a call for the api and wait for it to grap all data
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(request.data.results[Math.floor(Math.random() * (request.data.results.length - 0) + 0)]);
            return request;
        }
        fetchData();
    }, []);
    console.log("Banner movie >>>", movie);

    function truncateString(str, num) {
        if (str?.length > num) {
            let subStr = str.substring(0, num);
            return subStr + "...";
        } else {
            return str;
        }
    }

    return (
        <header className="banner" style={{ backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundPosition: "center center" }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button><button className="banner__button">My List</button>
                </div>
                <h1 className="bannner__description">
                    {truncateString(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner__fadeBottom" />
        </header>
    )
}

export default Banner
