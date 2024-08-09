"use client";
import React from "react";
import styles from "./loginForm.module.css";
import { handleGithubLogin, login } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();
  return (
    <>
      <form className={styles.login_form} action={formAction}>
        <h4>Login to your account</h4>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button>Login</button>
      </form>
      {state?.error}
      <form action={handleGithubLogin}>
        <button className={styles.github_btn}>Login with Github</button>
      </form>
    </>
  );
};

export default LoginForm;
