"use client";
import React from "react";
import { useFormState } from "react-dom";
import styles from "./adminUserForm.module.css";
import { addUser } from "@/lib/actions";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form className={styles.form} action={formAction}>
      <h3>Add user</h3>
      <input type="text" name="username" placeholder="Name" />
      <input type="text" name="email" placeholder="Email Address" />
      <input type="password" name="password" placeholder="Password" />
      <select name="isAdmin">
        <option value="true">User</option>
        <option value="false">Admin</option>
      </select>
      <button>Add</button>
    </form>
  );
};

export default AdminUserForm;
