import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Card = ({ item: { id, title, image } }) => {
  return (
    <div className="card">
      <div className="content">
        <img src={`./images/${image}`} alt="loading..." />
        <h3 className="text">{title}</h3>
      </div>
      <Link to={`/page/${id}`} className="link">
        <ArrowForwardIosIcon className="arrow" />
      </Link>
    </div>
  );
};

export default Card;
