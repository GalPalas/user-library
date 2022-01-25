import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import users from "store/middleware/users";
import reducer from "store/reducer";

export default function configureAppStore() {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), users],
  });
}
