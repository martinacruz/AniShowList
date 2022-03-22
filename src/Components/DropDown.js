import React from "react";
import "../styles/DropDown.css";

const DropDown = ({ emptySearch, searchResults }) => {
  return emptySearch ? null : (
    <div className="results-container">
      {searchResults.slice(0, 5).map((show) => (
        <div className="show-container" key={show.mal_id}>
          <img
            src={show.image_url}
            alt={show.title}
            className="results-show-img"
          />
          <div className="restuls-show-text">
            <p className="results-show-title">{show.title}</p>
            <p className="results-show-data">{`${show.episodes}epi | ${
              new Date(show.start_date).toISOString().split("T")[0]
            } | ${show.score} | ${
              show.airing === true ? "Ongoing" : "Completed"
            }`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
