import React, { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";
import styles from "./style.module.scss";
import Navbar from "../navbar";
import Firefly from "../Firefly";
import Provider from "@/utils/provider";
// import {Elina} from "../3D";

const Layout = ({ children }: any) => {
  const [theme, setTheme] = useState("auto");
  const [actualTheme, setactualTheme] = useState("");
  useEffect(() => {
    if (theme === "auto") {
      const time = new Date().getHours();
      // console.log({ time });
      if (time >= 6 && time <= 10) {
        setactualTheme("morning");
      } else if (time > 10 && time <= 16) {
        setactualTheme("day");
      } else if (time > 16 && time <= 20) {
        setactualTheme("evening");
      } else {
        setactualTheme("night");
      }
    }
  });
  return (
    <>
      <div
        className={`${
          theme !== "auto" && theme !== undefined && theme !== null
            ? theme
            : actualTheme
        } ${styles.background}`}
      >
        <div className={styles.backgroundOverlay}>
          <img src="/images/hero_pic3.png" alt="" />
          <Firefly />
          <div className={styles.body}>
            <Navbar theme={theme} setTheme={setTheme} />
            <Provider>{children}</Provider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
