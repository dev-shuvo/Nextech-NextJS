"use client";
import React from "react";
import { useFormState } from "react-dom";
import styles from "./adminPostForm.module.css";
import { addPost } from "@/lib/actions";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form className={styles.form} action={formAction}>
      <h3>Add post</h3>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="Slug" />
      <input type="text" name="img" placeholder="Image (Link)" />
      <textarea name="desc" placeholder="Description" rows={10}></textarea>
      <button>Post</button>
    </form>
  );
};

export default AdminPostForm;
