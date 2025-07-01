import { useEffect } from "react";
import { users } from "./datas";

export const checkUsername = (username: string) => {
  useEffect(() => {
    fetch("api/foods")
      .then((data) => data.json())
      .then((json) => console.log(json));
  }, []);

  // const foundUser = users.find((user) => {
  //   if (user.username === username) return user;
  // });
  // console.log(foundUser);
  // if (foundUser) {
  //   return true;
  // } else return false;
};
