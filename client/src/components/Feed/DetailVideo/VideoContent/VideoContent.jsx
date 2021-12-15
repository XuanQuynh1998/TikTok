import React, { useState, useEffect, useRef, useCallback } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import {
  VolumeUp,
  VolumeDown,
  VolumeOff,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from "@material-ui/icons";
import clsx from "clsx";

import { useStore } from "../../../../context/store";
import { actions } from "../../../../context/state";
import { theme } from "../../../../assets/";
import styles from "./VideoContent.module.scss";

export default function VideoContent() {
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressCircleRef = useRef(null);

  const [state, dispatch] = useStore();
  const { videos, videoVolume, videoClicked } = state;

  const [isPlay, setIsPlay] = useState(true);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentDuration, setCurrentDuration] = useState(videoClicked.currentTime);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hideNavigator, setHideNavigator] = useState(null);

  const convertTime = useCallback((duration) => {
    let minutes = Math.floor(duration / 60);
    let second = Math.floor(duration - minutes * 60);

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (second < 10) {
      second = `0${second}`;
    }

    return `${minutes}:${second}`;
  }, []);

  const handleClose = () => {
    const currentTime = videoRef.current.currentTime;
    dispatch(actions.setVideoClicked({ ...videoClicked, isClicked: false, currentTime }));
    dispatch(actions.setVisibleVideo(videoClicked.videoSrc));
    dispatch(actions.setScrollIntoView(true));
  };

  const handlePlayVideo = () => {
    setIsPlay(!isPlay);
  };

  const translateProgressBar = (barRatio) => {
    const progressCircleWidth = progressCircleRef.current.clientWidth;
    progressBarRef.current.style.transform = `scaleX(${barRatio})`;
    progressCircleRef.current.style.left = `calc(${barRatio * 100}% - ${
      progressCircleWidth / 2
    }px)`;
  };

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    setCurrentDuration(currentTime);

    const barRatio = currentTime / videoClicked.duration;
    translateProgressBar(barRatio);
  };

  const handleChangeCurrentTime = (e) => {
    const progressBarWidth = progressBarRef.current.clientWidth;
    const rect = e.currentTarget.getBoundingClientRect();
    const newPosition = e.clientX - rect.left;

    const barRatio = Math.abs(newPosition / progressBarWidth);
    videoRef.current.currentTime = videoClicked.duration * barRatio;
    translateProgressBar(barRatio);
  };

  const handleOnOffVolume = () => {
    if (videoVolume === 0) {
      videoRef.current.volume = 0.5;
      dispatch(actions.setVolume(0.5 * 100));
    } else {
      dispatch(actions.setVolume(0));
    }
  };

  const adjustVolume = (e) => {
    const currentVolume = e.target.value;
    videoRef.current.volume = currentVolume / 100;
    dispatch(actions.setVolume(+currentVolume));
  };

  const handlePause = () => {
    const currentTime = videoRef.current.currentTime;
    dispatch(actions.setVideoClicked({ ...videoClicked, currentTime }));
  };

  const handleNavigatorFeed = (action) => {
    const currentIndex = videos.findIndex((video) => video.videoSrc === videoClicked.videoSrc);
    setHideNavigator(null);
    setCurrentDuration(0);

    if (action === "DOWN" && currentIndex < videos.length - 1) {
      dispatch(
        actions.setVideoClicked({
          ...videoClicked,
          videoSrc: videos[currentIndex + 1].videoSrc,
        })
      );
      dispatch(actions.setVisibleVideo(videos[currentIndex + 1].videoSrc));
      return;
    }
    if (action === "UP" && currentIndex > 0) {
      dispatch(
        actions.setVideoClicked({
          ...videoClicked,
          videoSrc: videos[currentIndex - 1].videoSrc,
        })
      );
      dispatch(actions.setVisibleVideo(videos[currentIndex - 1].videoSrc));
    }
  };

  useEffect(() => {
    const currentIndex = videos.findIndex((video) => video.videoSrc === videoClicked.videoSrc);

    if (currentIndex >= videos.length - 1) {
      setHideNavigator("DOWN");
      return;
    }

    if (currentIndex <= 0) {
      setHideNavigator("UP");
    }
  }, [videoClicked.videoSrc, videos]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = videoVolume / 100;
      setVideoDuration(videoClicked.duration);
    }
  }, [videoClicked.duration, videoClicked.videoSrc, videoVolume]);

  useEffect(() => {
    if (isPlay) {
      videoRef.current.currentTime = videoClicked.currentTime;
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (!isPlay && isPlaying) {
      videoRef.current.pause();
    }
  }, [isPlay, isPlaying, videoClicked.currentTime, videoClicked.videoSrc]);

  return (
    <div className={styles.videoContainer}>
      <div className={styles.videoHeader}>
        <div className={clsx(styles.close, styles.iconRound)} onClick={handleClose}>
          <CloseIcon />
        </div>
        <img
          className={styles.iconRound}
          src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-441371124b15403175a080da9df31116.png"
          alt="TikTok"
        />
        <div className={styles.report}>
          <FlagOutlinedIcon />
          Báo cáo
        </div>
      </div>
      <div className={styles.control}>
        {hideNavigator !== "UP" && (
          <div
            className={clsx(styles.controlIcon, styles.upIcon)}
            onClick={() => handleNavigatorFeed("UP")}
          >
            <KeyboardArrowUp />
          </div>
        )}
        {hideNavigator !== "DOWN" && (
          <div
            className={clsx(styles.controlIcon, styles.downIcon)}
            onClick={() => handleNavigatorFeed("DOWN")}
          >
            <KeyboardArrowDown />
          </div>
        )}
      </div>
      <div className={styles.videoContent}>
        <div className={styles.background}>
          <img className={styles.backgroundImage} src={theme} alt="Theme" />
        </div>
        <div className={styles.video}>
          <video
            playsInline
            loop
            ref={videoRef}
            className={styles.videoPlayer}
            src={videoClicked.videoSrc}
            onClick={handlePlayVideo}
            onTimeUpdate={handleTimeUpdate}
            onPause={handlePause}
          />
          <div className={styles.durationBarContainer}>
            <div className={styles.durationBar} onClick={handleChangeCurrentTime}>
              <div className={styles.duration} />
              <div className={clsx(styles.duration, styles.progress)} ref={progressBarRef} />
              <div className={styles.durationCircle} ref={progressCircleRef}></div>
            </div>
            <div className={styles.durationTime}>
              {convertTime(currentDuration)}/{convertTime(videoDuration)}
            </div>
          </div>
        </div>
        <div className={styles.volume}>
          <div className={styles.volumeBtn} onClick={handleOnOffVolume}>
            {videoVolume === 0 ? (
              <VolumeOff />
            ) : videoVolume.volume <= 50 ? (
              <VolumeDown />
            ) : (
              <VolumeUp />
            )}
          </div>
          <input
            className={styles.volumeMeter}
            type="range"
            value={videoVolume}
            onChange={adjustVolume}
          />
        </div>
      </div>
    </div>
  );
}
