import React from "react";
import styles from "./adminUsers.module.css";
import { getUsers } from "@/lib/data";
import { deleteUser } from "@/lib/actions";
import Image from "next/image";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h3>All Users</h3>
      {users.map((user) => {
        return (
          <>
            <div className={styles.users} key={user.id}>
              <div>
                <span>Name: </span>
                {user.username}
              </div>
              <div>
                <span>Email Address: </span>
                {user.email}
              </div>
              <form action={deleteUser}>
                <input type="hidden" name="id" value={user.id} />
                <button className={styles.delete_btn}>Delete</button>
              </form>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AdminUsers;
