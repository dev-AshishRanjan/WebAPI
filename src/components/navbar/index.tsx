import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
// import { VscGithub } from "react-icons/vsc";
// import { FaHome } from "react-icons/fa";
// import { FiSun, FiSunrise, FiSunset, FiMoon } from "react-icons/fi";
// import { TbBrandTypescript } from "react-icons/tb";

const Navbar = ({theme ,setTheme}:any) => {
  // const [theme, setTheme] = useState("auto");
  useEffect(()=>{
    const savedTheme:any=localStorage.getItem("WebApiTheme"); 
    setTheme(savedTheme);
  })
  return (
    <div className={styles.navWrapper}>
      <div className={styles.nav_links}>
        <Link
          href="/"
          className={``}
        >
          HOME
        </Link>
        <Link
          href="https://github.com/dev-AshishRanjan/WebAPI"
          className={``}
          target="_blank"
        >
          GITHUB
        </Link>
        <select name="theme" id="theme" className="btn" value={theme} onChange={(e) => {
          setTheme(e.target.value);
          localStorage.setItem("WebApiTheme", e.target.value);
        }}>
          <option value="auto" defaultChecked >Auto</option>
          <option value="morning">Morning</option>
          <option value="day">Day</option>
          <option value="evening">Evening</option>
          <option value="night">Night</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
