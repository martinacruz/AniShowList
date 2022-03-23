import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../styles/Details.css";

function Details() {
  const { showId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [showDetails, setShowDetails] = useState();

  useEffect(() => {
    const show = async () => {
      const result = await axios(`https://api.jikan.moe/v3/anime/${showId}`);
      setShowDetails(result.data);
      setIsLoading(false);
    };

    show();
  }, [showId]);

  const displayhow = (show) => {
    return (
      <div className="show-details">
        <h1>
          {show.title} <span className="show-type">{show.type}</span>
        </h1>
        <div className="show-detail-content">
          <img src={show.image_url} alt={show.title} />
          <div className="show-detail-text">
            <h3>Synopsis:</h3>
            <p className="show-info">{show.synopsis}</p>
            <p className="show-info">
              <span>Genres:</span>{" "}
              {show.genres.map((genre) => {
                return genre.name + ", ";
              })}{" "}
            </p>
          </div>
        </div>
        <h2>TRAILER:</h2>
        <iframe
          src={show.trailer_url}
          title={show.title}
          className="show-info"
          height="443"
          width="800"
          marginHeight="0"
          frameBorder="0"
        ></iframe>
      </div>
    );
  };

  return (
    <>
      {isLoading
        ? "Please wait, loading show details."
        : displayhow(showDetails)}
    </>
  );
}

export default Details;
