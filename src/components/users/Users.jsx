import axios from "axios";
import UserCard from "components/userCard/UserCard";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      setUsers(data.results);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <UserCard />
    </div>
  );
};

export default Users;
