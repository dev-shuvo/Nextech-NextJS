"use client";
import React, { useEffect } from "react";
import styles from "./registerForm.module.css";
import { register } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction} method="POST">
      <h4>Register your account</h4>
      <input type="text" placeholder="Username" name="username" required />
      <input type="email" placeholder="Email" name="email" required />
      <input type="password" placeholder="Password" name="password" required />
      <input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        required
      />
      <button type="submit">Register</button>
      {state?.error}
    </form>
  );
};

export default RegisterForm;
