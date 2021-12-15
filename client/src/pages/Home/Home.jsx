import React from "react";
import styles from "./Home.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.home}>
        <Sidebar />
        <Feed />
      </div>
      {/* <div className="modal" /> */}
    </div>
  );
}
