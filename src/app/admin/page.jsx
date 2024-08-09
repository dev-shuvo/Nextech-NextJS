import React from "react";
import styles from "./page.module.css";
import AdminPosts from "@/components/admin/adminPosts/AdminPosts";
import AdminPostForm from "@/components/admin/adminPostForm/AdminPostForm";
import AdminUsers from "@/components/admin/adminUsers/AdminUsers";
import AdminUserForm from "@/components/admin/adminUserForm/AdminUserForm";
import { auth } from "@/lib/auth";

export const metadata = {
  title: "Admin",
};

const Admin = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <AdminPosts />
        </div>
        <div className={styles.col}>
          <AdminPostForm userId={session?.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <AdminUsers />
        </div>
        <div className={styles.col}>
          <AdminUserForm userId={session?.user.id} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
