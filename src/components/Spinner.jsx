import React from "react";

const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "calc(100vh - 300px)" }}
    >
      <div
        className="spinner-border text-info"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
