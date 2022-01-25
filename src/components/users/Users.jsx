// import axios from "axios";
import UserCard from "components/userCard/UserCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getUserInfo } from "store/users";

const Users = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector(getUserInfo());
  console.log(status, users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {status === "success" && users.length ? (
        <div className="container p-5">
          <div className="row">
            {users.map((user) => (
              <UserCard key={user.id.value} {...user} />
            ))}
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Users;
