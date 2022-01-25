import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById, getUserInfoById } from "store/user";
import { useParams } from "react-router-dom";
import "./User.css";

const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { status, user } = useSelector(getUserInfoById());

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  return (
    <div>
      {status === "success" && user ? (
        <div className="container p-2">
          <div className="row justify-content-center align-items-center text-center">
            <img src={"https://picsum.photos/900/400"} alt="" />
            <img
              className="rounded-circle p-0 profile"
              src={user.picture.large}
              alt=""
            />
            <h2 className="text-info">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
            <p className="lead">{user.email}</p>
          </div>
          <div className="row">
            <div className="col">
              <h3>General info</h3>
              <p className="mb-0">
                <strong>Id - </strong>
                {id}
              </p>
              <p>
                <strong>Location - </strong>
                <div>
                  <p className="mb-0">
                    <span className="text-decoration-underline">Country:</span>{" "}
                    {user.location.country}
                  </p>
                  <p className="mb-0">
                    <span className="text-decoration-underline">City:</span>{" "}
                    {user.location.city}
                  </p>
                  <p className="mb-0">
                    <span className="text-decoration-underline">Street:</span>{" "}
                    {`${user.location.street.name} ${user.location.street.number}`}
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default User;
