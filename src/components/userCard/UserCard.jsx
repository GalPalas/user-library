import AddUser from "components/addUser/AddUser";
import EditUser from "components/editUser/EditUser";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "store/users";
import "./UserCard.css";

const UserCard = ({ id, name, email, picture, location, gender }) => {
  const dispatch = useDispatch();

  const removeUserHandler = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div className="card p-2 mx-2 my-2" style={{ width: "15rem" }}>
      <div className="d-flex justify-content-end">
        <i
          className="bi bi-pencil-fill mx-1"
          data-bs-toggle="modal"
          data-bs-target="#editModal"
          // onClick={() => editUserHandler(id)}
        ></i>
        <i
          className="bi bi-trash-fill"
          onClick={() => removeUserHandler(id)}
        ></i>
      </div>

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

      <EditUser />
      <AddUser />
    </div>
  );
};

export default UserCard;
