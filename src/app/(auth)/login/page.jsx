import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import LoginForm from "@/components/loginForm/LoginForm";

export const metadata = {
  title: "Login",
};

const Login = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
      <div>Or</div>
      <Link href="/register">Signup</Link>
    </div>
  );
};

export default Login;
