import { React, useState, useEffect } from "react";
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
    const fetchTopAnime = async () => {
      const response = await axios(`${PUBLIC_API_KEY}/top/anime`);
      setTopAnime(response.data.top);
    };
    const fetchTopAiring = async () => {
      const response = await axios(`${PUBLIC_API_KEY}/top/anime/1/airing`);
      setTopAiring(response.data.top);
    };
    const fetchTopManga = async () => {
      const response = await axios(`${PUBLIC_API_KEY}/top/manga`);
      setTopManga(response.data.top);
    };
    const fetchUpcomingShows = async () => {
      const response = await axios(`${PUBLIC_API_KEY}/top/anime/1/upcoming`);
      setUpcomingShows(response.data.top);
      setIsLoading(false);
    };
    fetchTopAnime();
    fetchTopAiring();
    fetchTopManga();
    fetchUpcomingShows();
  }, []);

  function displayShows(list) {
    return list.slice(0, 20).map((show, idx) => (
      <div key={idx}>
        <a className="show" href={`/details/${show.mal_id}`}>
          <img className="show-img" src={show.image_url} alt="" />
          <div className="card-info">
            <h3>{show.title}</h3>
            <button>DETAILS</button>
            <div>
              <h3>{show.type}</h3>
              <h3>Score: {show.score === 0 ? "TBD" : show.score}</h3>
            </div>
          </div>
        </a>
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
