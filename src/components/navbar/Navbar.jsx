import Link from "next/link";
import styles from "./navbar.module.css";
import Links from "./links/Links";
import { auth } from "@/lib/auth";
import { handleLogout } from "@/lib/actions";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Nextech.</Link>
      </div>
      <Links session={session} handleLogout={handleLogout} />
    </div>
  );
};

export default Navbar;
