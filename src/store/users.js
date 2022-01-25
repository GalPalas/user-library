import { createSlice } from "@reduxjs/toolkit";
import { usersListCallBegan } from "store/actions";
import { createSelector } from "reselect";

const userList = createSlice({
  name: "userList",
  initialState: {
    users: [],
    loading: false,
  },
  reducers: {
    userRequest: (userList, action) => {
      userList.loading = true;
    },
    userSuccess: (userList, action) => {
      userList.users = action.payload;
      userList.loading = false;
    },
    userFail: (userList, action) => {
      userList.error = action.payload;
      userList.loading = false;
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
