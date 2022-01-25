// import axios from "axios";
import UserCard from "components/userCard/UserCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getUserInfo } from "store/users";

const Users = () => {
  const dispatch = useDispatch();
  const { loading, users } = useSelector(getUserInfo());
  console.log(loading, users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <UserCard />
    </div>
  );
};

export default Users;
