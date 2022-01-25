import React from "react";
// import { Link } from "react-router-dom";

const UserCard = () => {
  return (
    <div className="card shadow p-2">
      {/* <img src={image} className="card-img-top rounded-circle" alt="..."></img> */}
      <div className="card-body d-flex flex-column align-items-center">
        {/* <Link to={`/character/1`}>
          <h5 className="card-title">Gal</h5>
        </Link> */}

        <p className="card-text mb-0">Gender: Male</p>
        <p className="card-text mb-0">Species: Alian</p>
        <p className="card-text">Status: Live</p>
      </div>
    </div>
  );
};

export default UserCard;
