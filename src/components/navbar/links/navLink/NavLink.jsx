"use client";
import React from "react";
import styles from "./navLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  return (
    <Link
      href={link.path}
      key={link.id}
      className={`${styles.link} ${pathName === link.path && styles.active}`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
