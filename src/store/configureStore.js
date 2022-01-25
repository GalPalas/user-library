import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import users from "store/middleware/users";
import user from "store/middleware/user";
import reducer from "store/reducer";

export default function configureAppStore() {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), user, users],
  });
}
