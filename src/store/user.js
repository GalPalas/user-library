import { createSlice } from "@reduxjs/toolkit";
import { userCallBegan } from "store/actions";
import { createSelector } from "reselect";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: {},
    status: "idle",
  },
  reducers: {
    userCallRequest: (userSlice, action) => {
      userSlice.status = "loading";
    },
    userCallSuccess: (userSlice, action) => {
      userSlice.user = action.payload;
      userSlice.status = "success";
    },
    userCallFail: (userSlice, action) => {
      userSlice.error = action.payload;
      userSlice.status = "error";
    },
  },
});

const { userCallRequest, userCallSuccess, userCallFail } = userSlice.actions;

export default userSlice.reducer;

export const fetchUserById = (id) => async (dispatch) => {
  console.log(id);
  return dispatch(
    userCallBegan({
      id: id,
      onStart: userCallRequest.type,
      onSuccess: userCallSuccess.type,
      onError: userCallFail.type,
    })
  );
};

export const getUserInfoById = () =>
  createSelector(
    (state) => state.entities.userSlice,
    (userSlice) => userSlice
  );
