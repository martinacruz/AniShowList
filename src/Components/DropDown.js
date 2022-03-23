import React from "react";
import { Link } from "react-router-dom";
import "../styles/DropDown.css";

const DropDown = ({ emptySearch, searchResults }) => {
  return emptySearch ? null : (
    <div className="results-container">
      {searchResults.slice(0, 5).map((show) => (
        <Link
          className="showLink"
          to={`/details/${show.mal_id}`}
          key={show.mal_id}
        >
          <div className="show-container">
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
        </Link>
      ))}
    </div>
  );
};

export default DropDown;
