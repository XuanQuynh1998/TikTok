import React, { useRef, useEffect } from "react";
import styles from "./MobileTabletVideo.module.scss";
import useOnScreen from "../../../tools/useOnScreen";

export default function MobileTabletVideo({ videoSrc }) {
  const videoRef = useRef();
  const feedRef = useRef();

  const isVisible = useOnScreen(videoRef, "mobileTablet");

  useEffect(() => {
    if (isVisible) {
      feedRef.current.scrollIntoView({ block: "start", smooth: true });
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isVisible]);

  return (
    <div className={styles.mobileTabletLazyload} ref={feedRef}>
      <div className={styles.videoContent}>
        <video muted ref={videoRef} preload="metadata" loop src={videoSrc} />
      </div>
    </div>
  );
}
