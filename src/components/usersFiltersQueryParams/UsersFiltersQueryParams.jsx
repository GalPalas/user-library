import React from "react";
import { useSearchParams } from "react-router-dom";

const UsersFiltersQueryParams = () => {
  const [filterState, setFiltersState] = useSearchParams();

  const name = filterState.get("name") || "";
  const email = filterState.get("email") || "";
  const country = filterState.get("country") || "";

  const handleInputChange = (e) => {
    const params = {};

    if (name) {
      params["name"] = name;
    }

    if (email) {
      params["email"] = email;
    }

    if (country) {
      params["country"] = country;
    }

    setFiltersState(
      { ...params, [e.target.name]: e.target.value },
      { replace: true }
    );
  };

  return (
    <div className="container">
      <div className="row text-center mb-3">
        <div className="col">
          <label htmlFor="email" className="lead">
            Filter by email
          </label>
          <input
            type="text"
            name="email"
            className="form-control shadow-none"
            placeholder="Enter email"
            onChange={handleInputChange}
            value={email}
          ></input>
        </div>
        <div className="col">
          <label htmlFor="country" className="lead">
            Filter by country
          </label>
          <input
            type="text"
            name="country"
            className="form-control shadow-none"
            placeholder="Enter country"
            onChange={handleInputChange}
            value={country}
          ></input>
        </div>
        <div className="col">
          <label htmlFor="name" className="lead">
            Filter by name
          </label>
          <input
            type="text"
            name="name"
            className="form-control shadow-none"
            placeholder="Enter name"
            onChange={handleInputChange}
            value={name}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default UsersFiltersQueryParams;
