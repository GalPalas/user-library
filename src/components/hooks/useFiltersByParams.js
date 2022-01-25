import { useSearchParams } from "react-router-dom";

export const useFiltersByParams = (users) => {
  const [filtersState] = useSearchParams();
  console.log("useFiltersByParams", users);

  const name = filtersState.get("name");
  const email = filtersState.get("email");
  const country = filtersState.get("country");

  let filteredUsers = users;
  if ((name || email || country) && users.length) {
    filteredUsers = users.filter((user) => {
      console.log(user);
      if (name && !user.name.first.toLowerCase().includes(name.toLowerCase())) {
        return false;
      }
      if (email && !user.email.toLowerCase().includes(email.toLowerCase())) {
        return false;
      }

      if (
        country &&
        !user.location.country.toLowerCase().includes(country.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  }

  return { filteredUsers };
};
