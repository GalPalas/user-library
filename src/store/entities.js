import { combineReducers } from "redux";
import userListReducer from "store/users";

export default combineReducers({
  userList: userListReducer,
});
