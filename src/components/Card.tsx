import React from "react";
import "../styles/Card.css";
import { User } from "../types/types";

interface CardProps {
  user: User;
  onClick: (user: User) => void;
  selected: Boolean;
}

const Card: React.FC<CardProps> = ({ user, onClick, selected }) => {
  return (
    <div
      className={`card ${selected ? "selected" : ""}`}
      onClick={() => onClick(user)}
    >
      <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
      <div className="card-body">
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Address:</strong>
        </p>
        <p>{`${user.location.street.number}, ${user.location.street.name}`} </p>
        <p>
          {user.location.city}, {user.location.state}, {user.location.country},
          {" " + user.location.postcode}
        </p>
      </div>
    </div>
  );
};

export default Card;
