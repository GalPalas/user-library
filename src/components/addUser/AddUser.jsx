import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addUser } from "store/users";

const schema = yup.object({
  id: yup.string().required(),
  title: yup.string().required(),
  firstName: yup.string().min(3, "must be at least 3 characters long"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  country: yup.string().required(),
  city: yup.string().required(),
  street: yup.string().required(),
});

const AddUser = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <div
      className="modal fade"
      id="addUserModal"
      tabIndex="-1"
      aria-labelledby="addUserModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addUserModalLabel">
              Adding a user
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              onSubmit={handleSubmit((data) => {
                const newUser = {
                  id: {
                    value: data.id,
                  },
                  name: {
                    title: data.title,
                    first: data.firstName,
                    last: data.lastName,
                  },
                  email: data.email,
                  location: {
                    country: data.country,
                    city: data.city,
                    street: data.street,
                  },
                  picture: {
                    large: "https://randomuser.me/api/portraits/women/62.jpg",
                  },
                  gender: "female",
                };
                dispatch(addUser(newUser));
              })}
            >
              <div>
                <label htmlFor="id" className="form-label">
                  Id
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="id"
                    className="form-control shadow-none"
                    {...register("id")}
                    value={nanoid()}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="title"
                    className="form-control shadow-none"
                    placeholder="Enter Title"
                    {...register("title")}
                  />
                </div>

                {errors.title && (
                  <div className="alert alert-danger p-1" role="alert">
                    {errors.title?.message}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="firstName"
                    className="form-control shadow-none"
                    placeholder="Enter first name"
                    {...register("firstName")}
                  />
                </div>

                {errors.firstName && (
                  <div className="alert alert-danger p-1" role="alert">
                    {errors.firstName?.message}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="lastName"
                    className="form-control shadow-none"
                    placeholder="Enter last name"
                    {...register("lastName")}
                  />
                </div>

                {errors.lastName && (
                  <div className="alert alert-danger p-1" role="alert">
                    {errors.lastName?.message}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="email"
                    className="form-control shadow-none"
                    placeholder="example@gmail.com"
                    {...register("email")}
                  />
                </div>

                {errors.email && (
                  <div className="alert alert-danger p-1" role="alert">
                    {errors.email?.message}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="country"
                    className="form-control shadow-none"
                    placeholder="Enter country"
                    {...register("country")}
                  />
                </div>

                {errors.country && (
                  <div className="alert alert-danger p-1" role="alert">
                    {errors.country?.message}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="city"
                    className="form-control shadow-none"
                    placeholder="Enter city"
                    {...register("city")}
                  />
                </div>

                {errors.city && (
                  <div className="alert alert-danger p-1" role="alert">
                    {errors.city?.message}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="street" className="form-label">
                  Street
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="street"
                    className="form-control shadow-none"
                    placeholder="Enter street"
                    {...register("street")}
                  />
                </div>

                {errors.street && (
                  <div className="alert alert-danger p-1" role="alert">
                    {errors.street?.message}
                  </div>
                )}
              </div>

              <input className="btn-primary" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
