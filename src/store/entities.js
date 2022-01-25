import { combineReducers } from "redux";
import userListReducer from "store/users";
import userReducer from "store/user";

export default combineReducers({
  userList: userListReducer,
  userSlice: userReducer,
});
