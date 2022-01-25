// import axios from "axios";
import UserCard from "components/userCard/UserCard";
import UsersFiltersQueryParams from "components/usersFiltersQueryParams/UsersFiltersQueryParams";
import { useFiltersByParams } from "components/hooks/useFiltersByParams";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getUserInfo } from "store/users";
import Spinner from "components/Spinner";

const Users = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector(getUserInfo());

  const { filteredUsers } = useFiltersByParams(users);
  console.log("Users", filteredUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {status === "success" && users.length ? (
        <div className="container p-5">
          <UsersFiltersQueryParams />
          <div className="row">
            {filteredUsers.map((user) => (
              <UserCard key={user.id.value} {...user} />
            ))}
          </div>
          <div className="row justify-content-end">
            <div className="col-2">
              <button
                className="btn btn-secondary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#addUserModal"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Users;
