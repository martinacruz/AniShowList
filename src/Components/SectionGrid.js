import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../styles/SectionGrid.css";

const SectionGrid = () => {
  const PUBLIC_API_KEY = "https://api.jikan.moe/v3";
  const [topAnime, setTopAnime] = useState();
  const [topAiring, setTopAiring] = useState();
  const [topManga, setTopManga] = useState();
  const [upcomingShows, setUpcomingShows] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchTopAnime = async () => {
      try {
        const response = await axios(`${PUBLIC_API_KEY}/top/anime`, {
          signal: controller.signal,
        });
        setTopAnime(response.data.top);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          throw error;
        }
      }
    };
    const fetchTopAiring = async () => {
      try {
        const response = await axios(`${PUBLIC_API_KEY}/top/anime/1/airing`, {
          signal: controller.signal,
        });
        setTopAiring(response.data.top);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          throw error;
        }
      }
    };
    const fetchTopManga = async () => {
      try {
        const response = await axios(`${PUBLIC_API_KEY}/top/manga`, {
          signal: controller.signal,
        });
        setTopManga(response.data.top);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          throw error;
        }
      }
    };
    const fetchUpcomingShows = async () => {
      try {
        const response = await axios(`${PUBLIC_API_KEY}/top/anime/1/upcoming`, {
          signal: controller.signal,
        });
        setUpcomingShows(response.data.top);
        setIsLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          throw error;
        }
      }
    };
    fetchTopAnime();
    fetchTopAiring();
    fetchTopManga();
    fetchUpcomingShows();

    return () => controller.abort();
  }, []);

  function displayShows(list) {
    return list.slice(0, 20).map((show, idx) => (
      <div key={idx}>
        <Link className="show" to={`/details/${show.mal_id}`} showinfo={show}>
          <img className="show-img" src={show.image_url} alt="" />
          <div className="card-info">
            <h3>{show.title}</h3>
            <button>DETAILS</button>
            <div>
              <h3>{show.type}</h3>
              <h3>Score: {show.score === 0 ? "TBD" : show.score}</h3>
            </div>
          </div>
        </Link>
      </div>
    ));
  }

  return (
    <div className="grid-container">
      <div className="grid-header">
        <h2>Airing Shows</h2>
        <div className="line"></div>
      </div>
      <div className="show-list">
        {isLoading ? "Loading..." : displayShows(topAiring)}
      </div>
      <div className="grid-header">
        <h2>Upcoming</h2>
        <div className="line"></div>
      </div>
      <div className="show-list">
        {isLoading ? "Loading..." : displayShows(upcomingShows)}
      </div>
      <div className="grid-header">
        <h2>Top Anime</h2>
        <div className="line"></div>
      </div>
      <div className="show-list">
        {isLoading ? "Loading..." : displayShows(topAnime)}
      </div>
      <div className="grid-header">
        <h2>Top Manga</h2>
        <div className="line"></div>
      </div>
      <div className="show-list">
        {isLoading ? "Loading..." : displayShows(topManga)}
      </div>
    </div>
  );
};

export default SectionGrid;
