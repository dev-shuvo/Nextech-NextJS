import React from "react";
import styles from "./blogUser.module.css";
import { getUser } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async (userId) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );

//   if (!response.ok) {
//     throw new error("Something went wrong!");
//   } else {
//     return response.json();
//   }
// };

const BlogUser = async ({ userId }) => {
  // const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId);
  return <span className={styles.author}>{user.username}</span>;
};

export default BlogUser;
