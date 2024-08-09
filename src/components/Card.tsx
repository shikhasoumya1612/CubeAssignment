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
      <h2>{user.name}</h2>
      <div className="card-body">
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Address:</strong>
        </p>
        <p>
          {user.address.street}, {user.address.suite}
        </p>
        <p>
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default Card;
