import React, { useEffect } from "react";

import styles from "./Feed.module.scss";
import Video from "./Video/Video";
import DetailVideo from "./DetailVideo/DetailVideo";
import { video1, video2, video3, video4, video5 } from "../../assets";
import { useStore } from "../../context/store";
import { actions } from "../../context/state";

export default function Feed() {
  const listVideoSrc = [video1, video2, video3, video4, video5];
  const [state, dispatch] = useStore();
  const { videos, videoClicked } = state;

  useEffect(() => {
    if (videos[videos.length - 1].isVisible) {
      dispatch(actions.setVisibleVideo(videos[videos.length - 1].videoSrc)); // Play last video
      return;
    }

    for (let i = 0; i < videos.length; ++i) {
      if (videos[i].isVisible) {
        dispatch(actions.setVisibleVideo(videos[i].videoSrc));
        break;
      }
    }
  }, [dispatch, videos]);

  return (
    <div className={styles.feed}>
      <div className={styles.feedVideos}>
        {listVideoSrc.map((src, index) => (
          <Video videoSrc={src} key={index} />
        ))}
      </div>
      {videoClicked.isClicked && <DetailVideo />}
    </div>
  );
}
