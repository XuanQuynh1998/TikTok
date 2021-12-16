import React from "react";
import MediaQuery from "react-responsive";

import styles from "./Home.module.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";

export default function Home() {
  return (
    <>
      <MediaQuery minWidth={1224}>
        <div className={styles.homeContainer}>
          <div className={styles.home}>
            <Sidebar />
            <Feed />
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
        <div className={styles.mobileTabletHome}>
          <Feed />
        </div>
      </MediaQuery>
    </>
  );
}
