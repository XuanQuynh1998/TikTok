import React, { useState, useEffect } from "react";
import VideoContent from "./VideoContent/VideoContent";
import CommentContent from "./CommentContent/CommentContent";

import styles from "./DetailVideo.module.scss";
import useToast from "../../../tools/useToast";

export default function DetailVideo() {
  const [showCopyToast, setShowCopyToast] = useState(false);
  const toast = useToast({ toast: "Đã sao chép", showCopyToast, setShowCopyToast, timeout: 1500 });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className={styles.detailVideo}>
      {showCopyToast && toast}
      <VideoContent />
      <CommentContent setShowCopyToast={setShowCopyToast} />
    </div>
  );
}
