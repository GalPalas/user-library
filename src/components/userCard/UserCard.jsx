import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ id, name, email, picture, location, gender }) => {
  return (
    <div className="card p-2 mx-2 my-2" style={{ width: "15rem" }}>
      <img
        src={picture.large}
        className="card-img-top rounded-circle"
        alt="..."
      ></img>
      <div className="card-body d-flex flex-column align-items-center">
        <Link to={`/user/${id.value}`}>
          <h5 className="card-title">{`${name.first} ${name.last}`}</h5>
        </Link>

        <p className="card-text mb-0">Gender: {gender}</p>
      </div>
    </div>
  );
};

export default UserCard;
