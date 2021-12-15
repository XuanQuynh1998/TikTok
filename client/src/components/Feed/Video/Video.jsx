import React, { useRef, useState, useEffect } from "react";
import { MusicNote, Favorite, VolumeUp, VolumeDown, VolumeOff } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faLink,
  faExternalLinkAlt,
  faShare,
  faPlay,
  faPause,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

import styles from "./Video.module.scss";
import useOnScreen from "../../../tools/useOnScreen";
import { useStore } from "../../../context/store";
import { actions } from "../../../context/state";

function Video({ videoSrc }) {
  const videoRef = useRef();
  const feedRef = useRef();

  const [play, setPlay] = useState(false);
  const [like, setLike] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [animation, setAnimation] = useState(false);

  const isVisible = useOnScreen(videoRef);

  const [state, dispatch] = useStore();
  const { visibleVideo, videoVolume, videoClicked, scrollIntoView } = state;

  useEffect(() => {
    if (play) {
      videoRef.current
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (!play && playing) {
      videoRef.current.pause();
    }
  }, [play, playing, videoRef]);

  const handlePlayVideo = () => {
    setPlay(!play);
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

  const handleLike = () => {
    setAnimation(!like);
    setLike(!like);
  };

  const handleClickedVideo = (e) => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;

    dispatch(
      actions.setVideoClicked({
        isClicked: true,
        videoSrc,
        duration,
        currentTime,
      })
    );
  };

  useEffect(() => {
    if (like) {
      setTimeout(() => {
        setAnimation(false);
      }, 550);
    }
  }, [like]);

  useEffect(() => {
    dispatch(actions.setVideo({ videoSrc, isVisible })); // Set array of all videos
  }, [dispatch, isVisible, videoSrc]);

  useEffect(() => {
    const handleFocus = () => {
      setPlay(!videoClicked.isClicked);
    };

    const handleBlur = () => {
      setPlay(false);
    };

    if (visibleVideo === videoSrc) {
      setPlay(!videoClicked.isClicked);

      if (scrollIntoView) {
        feedRef.current.scrollIntoView({ block: "start" });
        dispatch(actions.setScrollIntoView(false));
        videoRef.current.currentTime = videoClicked.currentTime;
      }

      window.addEventListener("focus", handleFocus);
      window.addEventListener("blur", handleBlur);
      videoRef.current.volume = videoVolume / 100;
    } else {
      setPlay(false);
      videoRef.current.currentTime = 0;
    }

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, [dispatch, scrollIntoView, videoClicked, videoSrc, videoVolume, visibleVideo]);

  return (
    <div className={styles.lazyload} ref={feedRef}>
      <div className={styles.lazyloadWrapper}>
        <a href="/#" className={styles.avatarWrapper}>
          <div className={styles.userAvatar}>
            <img
              className={clsx(styles.avatar, "avatar")}
              src="https://yt3.ggpht.com/yti/APfAmoHMiv7JmbrqW5c_Wu7NKtgTfGbFvy2V_OVTh5Eb=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="Avatar"
            />
          </div>
        </a>
        <button className={clsx(styles.follow, "buttonPC")}>Follow</button>
        <div className={styles.contain}>
          <a href="/#" className={styles.userInfo}>
            <h4>senkichi.anime</h4>
            <span>Senkichi</span>
          </a>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <p> Quá chậm 😳🤫 | </p>
              <a href="/#" className="hashtag">
                #anime
              </a>
              <a className="hashtag" href="/#">
                #viral
              </a>
              <a className="hashtag" href="/#">
                #fypシ
              </a>
            </div>
            <a href="/#" className={styles.backgroundMusic}>
              <MusicNote />
              <span>Nhạc nền - Hahaha</span>
            </a>
          </div>
          <div className={styles.videoContent}>
            <video
              ref={videoRef}
              muted={videoVolume === 0}
              preload="metadata"
              loop
              src={videoSrc}
              onClick={handleClickedVideo}
            />
            <div className={styles.play} onClick={handlePlayVideo}>
              <FontAwesomeIcon icon={play ? faPause : faPlay} />
            </div>
            <div className={styles.volume} style={videoVolume === 0 ? { opacity: 1 } : {}}>
              <div className={styles.volumeBtn} onClick={handleOnOffVolume}>
                {videoVolume === 0 ? (
                  <VolumeOff />
                ) : videoVolume <= 50 ? (
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

            <div className={styles.actionBar}>
              <div className={clsx(styles.like, styles.actionItem)}>
                <div
                  className={clsx(styles.icon, {
                    [styles.active]: like,
                  })}
                  onClick={handleLike}
                >
                  <div className={styles.likeBtn}>
                    <Favorite />
                  </div>
                  {animation && (
                    <div className={styles.isAnimating}>
                      <div className={styles.likeAnimationLargePoint}>
                        <div style={{ "--i": 1 }}></div>
                        <div style={{ "--i": 2 }}></div>
                        <div style={{ "--i": 3 }}></div>
                        <div style={{ "--i": 4 }}></div>
                        <div style={{ "--i": 5 }}></div>
                        <div style={{ "--i": 6 }}></div>
                        <div style={{ "--i": 7 }}></div>
                        <div style={{ "--i": 8 }}></div>
                        <div style={{ "--i": 9 }}></div>
                      </div>
                      <div className={styles.likeAnimationSmallPoint}>
                        <div style={{ "--i": 1 }}></div>
                        <div style={{ "--i": 2 }}></div>
                        <div style={{ "--i": 3 }}></div>
                        <div style={{ "--i": 4 }}></div>
                        <div style={{ "--i": 5 }}></div>
                        <div style={{ "--i": 6 }}></div>
                        <div style={{ "--i": 7 }}></div>
                        <div style={{ "--i": 8 }}></div>
                        <div style={{ "--i": 9 }}></div>
                      </div>
                    </div>
                  )}
                </div>
                <span>1200</span>
              </div>
              <div className={clsx(styles.comment, styles.actionItem)}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faCommentDots} />
                </div>
                <span>555</span>
              </div>
              <div className={clsx(styles.share, styles.actionItem)}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faShare} />
                </div>
                <span>88</span>
                <ul className={clsx(styles.sharePopup, "popup")}>
                  <li className={styles.shareWith}>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </div>
                    <span>Nhúng</span>
                  </li>
                  <li className={styles.shareWith}>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <span>Chia sẻ với Twitter</span>
                  </li>
                  <li className={styles.shareWith}>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <span>Chia sẻ với Facebook</span>
                  </li>
                  <li className={styles.shareWith}>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                    <span>Chia sẻ với WhatsApp</span>
                  </li>
                  <li className={styles.shareWith}>
                    <div className={styles.icon}>
                      <FontAwesomeIcon icon={faLink} />
                    </div>
                    <span>Sao chép liên kết</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
