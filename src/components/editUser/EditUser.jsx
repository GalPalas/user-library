import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string(),
    firstName: yup.string().min(3, "must be at least 3 characters long"),
    lastName: yup.string(),
    email: yup.string().email(),
    country: yup.string(),
    city: yup.string(),
    street: yup.string(),
  })
  .required();

const EditUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div
      className="modal fade"
      id="editModal"
      tabIndex="-1"
      aria-labelledby="editModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editModalLabel">
              Edit User
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="title"
                    className="form-control shadow-none"
                    placeholder="Enter Titel"
                    {...register("title")}
                  />
                </div>

                {errors.title && (
                  <div className="alert alert-danger p-1" role="alert">
                    {errors.titel?.message}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="firstname"
                    className="form-control shadow-none"
                    placeholder="Enter first name"
                    {...register("firstname")}
                  />
                </div>

                {errors.firstname && (
                  <div className="alert alert-danger p-1" role="alert">
                    {errors.firstname?.message}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    id="lastname"
                    className="form-control shadow-none"
                    placeholder="Enter last name"
                    {...register("lastname")}
                  />
                </div>

                {errors.lastname && (
                  <div className="alert alert-danger p-1" role="alert">
                    {errors.lastname?.message}
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
                    placeholder="Enter email"
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
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
