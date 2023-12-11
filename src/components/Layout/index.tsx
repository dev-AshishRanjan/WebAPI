import React, { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";
import styles from "./style.module.scss";
import Navbar from "../navbar";
import Firefly from "../Firefly";
import Provider from "@/utils/provider";
// import {Elina} from "../3D";

const Layout = ({ children }:any) => {
  return (
    <>
    <div className={styles.background}>
      <div className={styles.backgroundOverlay}>
        <img src="/images/hero_pic3.png" alt="" />
        <Firefly/>
        <div className={styles.body}>
          <Navbar/>
          <Provider>
            {children}
          </Provider>
        </div>
      </div>
    </div>
    </>
  );
};

export default Layout;
