import React from "react";
import styles from "./page.module.css";
import RegisterForm from "@/components/registerForm/RegisterForm";
import Link from "next/link";

export const metadata = {
  title: "Register",
};

const Register = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
      <div>Or</div>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default Register;
