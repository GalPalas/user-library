import axios from "axios";
import { userCallBegan } from "store/actions";

const user =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== userCallBegan.type) return next(action);

    const { id, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const { data } = await axios.get(
        `https://randomuser.me/api/?results=10/${id}`
      );

      if (onSuccess) {
        dispatch({ type: onSuccess, payload: data.results[0] });
      }
    } catch (error) {
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default user;
