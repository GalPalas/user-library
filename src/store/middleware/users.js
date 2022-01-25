import axios from "axios";
import { usersListCallBegan } from "store/actions";

const users =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== usersListCallBegan.type) return next(action);

    const { onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const { data } = await axios.get("https://randomuser.me/api/?results=10");

      if (onSuccess) {
        dispatch({ type: onSuccess, payload: data.results });
      }
    } catch (error) {
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default users;
