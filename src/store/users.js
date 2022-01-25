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
  },
});

const { userRequest, userSuccess, userFail } = userList.actions;

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

export const getUserInfo = () =>
  createSelector(
    (state) => state.entities.userList,
    (userList) => userList
  );
