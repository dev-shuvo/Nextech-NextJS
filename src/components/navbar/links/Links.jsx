"use client";
import React, { useState } from "react";
import styles from "./links.module.css";
import Image from "next/image";
import NavLink from "./navLink/NavLink";

const Links = ({ session, handleLogout }) => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About",
      path: "/about",
    },
    {
      id: 3,
      title: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <>
      <div className={styles.links}>
        {links.map((link) => {
          return <NavLink link={link} key={link.id} />;
        })}
        {session?.user ? (
          <>
            {session?.user?.isAdmin && (
              <NavLink link={{ title: "Admin", path: "/admin" }} key={5} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout_btn}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink link={{ title: "Login", path: "/login" }} key={6} />
        )}
      </div>
      <button
        className={styles.menu_btn}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Image src="/menu.png" width={36} height={36} />
      </button>
      {open && (
        <div className={styles.mobile_links}>
          {links.map((link) => {
            return <NavLink link={link} key={link.id} />;
          })}
          {session?.user ? (
            <>
              {session?.user?.isAdmin && (
                <NavLink link={{ title: "Admin", path: "/admin" }} key={5} />
              )}
              <form action={handleLogout}>
                <button className={styles.logout_btn}>Logout</button>
              </form>
            </>
          ) : (
            <NavLink link={{ title: "Login", path: "/login" }} key={6} />
          )}
        </div>
      )}
    </>
  );
};

export default Links;
