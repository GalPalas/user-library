import React from "react";

const UserCard = () => {
  return (
    <div className="card shadow p-2">
      <div className="card-body d-flex flex-column align-items-center">
        <p className="card-text mb-0">Gender: Male</p>
        <p className="card-text mb-0">Species: Alian</p>
        <p className="card-text">Status: Live</p>
      </div>
    </div>
  );
};

export default UserCard;
