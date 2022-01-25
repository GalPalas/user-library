import { createSlice } from "@reduxjs/toolkit";
import { usersListCallBegan } from "store/actions";
import { createSelector } from "reselect";

const userList = createSlice({
  name: "userList",
  initialState: {
    users: [],
    status: "idle",
  },
  reducers: {
    userRequest: (userList, action) => {
      userList.status = "loading";
    },
    userSuccess: (userList, action) => {
      userList.users = action.payload;
      userList.status = "success";
    },
    userFail: (userList, action) => {
      userList.error = action.payload;
      userList.status = "error";
    },
    userRemoved: (userList, action) => {
      userList.users = userList.users.filter(
        (user) => user.id.value !== action.payload
      );
    },

    useradded: (userList, action) => {
      userList.users.push(action.payload);
    },
    userEdit: (userList, action) => {},
  },
});

const { userRequest, userSuccess, userFail, userRemoved, useradded, userEdit } =
  userList.actions;

export default userList.reducer;

export const fetchUsers = () => async (dispatch) => {
  return dispatch(
    usersListCallBegan({
      onStart: userRequest.type,
      onSuccess: userSuccess.type,
      onError: userFail.type,
    })
  );
};

export const removeUser = (id) => async (dispatch) => {
  dispatch(userRemoved(id.value));
};

export const addUser = (user) => async (dispatch) => {
  dispatch(useradded(user));
};

export const editUser = (id) => async (dispatch) => {
  dispatch(userEdit(id.value));
};

export const getUserInfo = () =>
  createSelector(
    (state) => state.entities.userList,
    (userList) => userList
  );
