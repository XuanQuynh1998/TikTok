import React, { useState, useRef } from "react";
import {
  MusicNote,
  Favorite,
  FavoriteBorderOutlined,
  EmojiEmotionsOutlined,
  AlternateEmailOutlined,
} from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faExternalLinkAlt, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import clsx from "clsx";

import styles from "./CommentContent.module.scss";

export default function CommentContent({ setShowCopyToast }) {
  const shareLinkRef = useRef();

  const [showProfile, setShowProfile] = useState(false);

  const handleMouseProfile = (type) => {
    setTimeout(() => {
      setShowProfile(type === "ENTER" ? true : false);
    }, 500);
  };

  const handleCopyLink = () => {
    const shareLink = shareLinkRef.current.textContent;
    navigator.clipboard.writeText(shareLink);
    setShowCopyToast(true);
  };

  return (
    <div className={styles.contentContainer}>
      <div className={styles.userInfoContainer}>
        <div className={styles.userInfo}>
          <a
            href="/#"
            className={styles.avatarLink}
            onMouseEnter={() => handleMouseProfile("ENTER")}
            onMouseLeave={() => handleMouseProfile()}
          >
            <img
              className={clsx(styles.avatar, "avatar")}
              src="https://yt3.ggpht.com/yti/APfAmoHMiv7JmbrqW5c_Wu7NKtgTfGbFvy2V_OVTh5Eb=s88-c-k-c0x00ffffff-no-rj-mo"
              alt=""
            />
          </a>
          <div className={styles.userInfoLink}>
            <a
              href="/#"
              onMouseEnter={() => handleMouseProfile("ENTER")}
              onMouseLeave={() => handleMouseProfile()}
            >
              paimon6666
            </a>
            <h2 className={styles.userInfoNickname}>Paimon · 11-13</h2>
          </div>
          {showProfile && (
            <div
              className={styles.profileCardContainer}
              onMouseEnter={() => handleMouseProfile("ENTER")}
              onMouseLeave={() => handleMouseProfile()}
            >
              <div className={styles.profileCard}>
                <div className={styles.cardTop}>
                  <img
                    className={clsx(styles.profileAvatar, "avatar")}
                    src="https://yt3.ggpht.com/yti/APfAmoHMiv7JmbrqW5c_Wu7NKtgTfGbFvy2V_OVTh5Eb=s88-c-k-c0x00ffffff-no-rj-mo"
                    alt=""
                  />
                  <button className={clsx(styles.profileFollowBtn, "buttonPC")}>Follow</button>
                </div>
                <div className={styles.authorInfo}>
                  <h1>paimon6666</h1>
                  <span>Paimon</span>
                </div>
                <div className={styles.cardLikeFollow}>
                  <div className={styles.cardLikeFollowItem}>
                    882.6K
                    <span>Follower</span>
                  </div>
                  <div className={styles.cardLikeFollowItem}>
                    24.7M
                    <span>Thích</span>
                  </div>
                </div>
                <div className={styles.cardSignature}>
                  Follow me for more funny animal stories😍 523364928@qq.com
                </div>
              </div>
            </div>
          )}
        </div>
        <button className={clsx(styles.followBtn, "buttonPC")}>Follow</button>
      </div>
      <div className={styles.videoInfoContainer}>
        <div className={styles.videoTitle}>
          <a className="hashtag" href="/#">
            #anime
          </a>
          <a className="hashtag" href="/#">
            #fyp
          </a>
        </div>
        <a href="/#" className={styles.music}>
          <MusicNote />
          April (No Vocals) - The Young Ebenezers
        </a>
        <div className={styles.actionContainer}>
          <div className={styles.actionLeft}>
            <div className={styles.action}>
              <div className={clsx(styles.actionIcon, styles.actionLike)}>
                <Favorite className={styles.iconLike} />
              </div>
              <strong> 1.1M</strong>
            </div>
            <div className={styles.action}>
              <div className={styles.actionIcon}>
                <FontAwesomeIcon icon={faCommentDots} />
              </div>
              <strong> 10.8K</strong>
            </div>
          </div>
          <div className={styles.actionRight}>
            <p>Chia sẻ với</p>
            <div className={styles.shareGroup}>
              <a href="/#" className={styles.shareLink}>
                <div className={styles.shareItem}>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
              </a>
              <a href="/#" className={styles.shareLink}>
                <div className={styles.shareItem}>
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              </a>
              <a href="/#" className={styles.shareLink}>
                <div className={styles.shareItem}>
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </a>
              <a href="/#" className={styles.shareLink}>
                <div className={styles.shareItem}>
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copyLinkContainer}>
          <div className={styles.linkContainer} ref={shareLinkRef}>
            https://www.tiktok.com/@tk_thisissocute/video/7036474880300240134?is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=7017459946041542146
          </div>
          <div className={styles.copyLink} onClick={handleCopyLink}>
            <p>Sao chép liên kết</p>
          </div>
        </div>
      </div>
      <div className={styles.commentContainer}>
        <div className={styles.commentItem}>
          <div className={styles.commentContent}>
            <a className={styles.userAvatar} href="/#">
              <img
                className={clsx(styles.avatar, "avatar")}
                src="https://yt3.ggpht.com/yti/APfAmoHMiv7JmbrqW5c_Wu7NKtgTfGbFvy2V_OVTh5Eb=s88-c-k-c0x00ffffff-no-rj-mo"
                alt=""
              />
            </a>
            <div className={styles.commentContentContainer}>
              <a className={styles.username} href="/#">
                Candy
              </a>
              <div className={styles.commentText}>
                <p>Người thành công luôn có lối đi riêng</p>
                <div className={styles.bottomContainer}>
                  <span className={styles.commentTime}>14 giờ trước</span>
                  <span className={styles.reply}>Trả lời</span>
                </div>
              </div>
            </div>
            <div className={styles.like}>
              <i>
                <FavoriteBorderOutlined />
              </i>
              <span>1000</span>
            </div>
          </div>
          <div className={styles.moreContents}>
            <p> Xem thêm câu trả lời khác (4)</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>

        <div className={styles.commentItem}>
          <div className={styles.commentContent}>
            <a className={styles.userAvatar} href="/#">
              <img
                className={clsx(styles.avatar, "avatar")}
                src="https://yt3.ggpht.com/yti/APfAmoHMiv7JmbrqW5c_Wu7NKtgTfGbFvy2V_OVTh5Eb=s88-c-k-c0x00ffffff-no-rj-mo"
                alt=""
              />
            </a>
            <div className={styles.commentContentContainer}>
              <a className={styles.username} href="/#">
                Candy
              </a>
              <div className={styles.commentText}>
                <p>Người thành công luôn có lối đi riêng</p>
                <div className={styles.bottomContainer}>
                  <span className={styles.commentTime}>14 giờ trước</span>
                  <span className={styles.reply}>Trả lời</span>
                </div>
              </div>
            </div>
            <div className={styles.like}>
              <i>
                <FavoriteBorderOutlined />
              </i>
              <span>1000</span>
            </div>
          </div>
          <div className={styles.moreContents}>
            <p> Xem thêm câu trả lời khác (4)</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>

        <div className={styles.commentItem}>
          <div className={styles.commentContent}>
            <a className={styles.userAvatar} href="/#">
              <img
                className={clsx(styles.avatar, "avatar")}
                src="https://yt3.ggpht.com/yti/APfAmoHMiv7JmbrqW5c_Wu7NKtgTfGbFvy2V_OVTh5Eb=s88-c-k-c0x00ffffff-no-rj-mo"
                alt=""
              />
            </a>
            <div className={styles.commentContentContainer}>
              <a className={styles.username} href="/#">
                Candy
              </a>
              <div className={styles.commentText}>
                <p>Người thành công luôn có lối đi riêng</p>
                <div className={styles.bottomContainer}>
                  <span className={styles.commentTime}>14 giờ trước</span>
                  <span className={styles.reply}>Trả lời</span>
                </div>
              </div>
            </div>
            <div className={styles.like}>
              <i>
                <FavoriteBorderOutlined />
              </i>
              <span>1000</span>
            </div>
          </div>
          <div className={styles.moreContents}>
            <p> Xem thêm câu trả lời khác (4)</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>
      <div className={styles.commentPostContainer}>
        <div className={styles.commentInputContainer}>
          <div className={styles.commentInput}>
            <div className={styles.input} contentEditable />
            <p className={styles.placeholder}>Thêm bình luận...</p>
          </div>
          <div className={styles.postCommentAction}>
            <div className={clsx(styles.icon, styles.email)}>
              <AlternateEmailOutlined />
            </div>
            <div className={clsx(styles.icon, styles.emoji)}>
              <EmojiEmotionsOutlined />
            </div>
          </div>
        </div>
        <div className={styles.postComment}>Đăng</div>
      </div>
    </div>
  );
}
