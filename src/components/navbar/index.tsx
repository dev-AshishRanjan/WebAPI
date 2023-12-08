import { useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { VscGithub,VscHome  } from "react-icons/vsc";
import { FaHome } from "react-icons/fa";

const Navbar = () => {

  return (
    <div className={styles.navWrapper}>
        <div className={styles.nav_links}>
          <Link
            href="/"
            className={``}
          ><FaHome />
            OME
          </Link>
          <Link
            href="/github"
            className={``}
          ><VscGithub />
            ITHUB
          </Link>
        </div>
      </div>
  );
};

export default Navbar;
