import React from "react";
import { SearchOutlined, MoreVert } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faBell } from "@fortawesome/free-regular-svg-icons";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import MediaQuery from "react-responsive";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useStore } from "../../context/store";
import { actions } from "../../context/state";
import { authUrl } from "../../auth";

export default function Header() {
  const [state, dispatch] = useStore();
  const { user } = state;

  const checkHasUser = (user) => {
    return Object.keys(user).length !== 0;
  };

  const handleClickLogin = () => {
    dispatch(actions.setOpenLoginModal(true));
  };

  const handleLogout = () => {
    window.open(authUrl.GOOGLE_LOGOUT_URL, "_self");
  };

  return (
    <header>
      <MediaQuery minWidth={1224}>
        <div className={styles.headerContainer}>
          <div className={styles.header}>
            <Link className={styles.logo} to="/">
              <img
                src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg"
                alt="TikTok"
              />
            </Link>
            <div className={styles.search}>
              <label>
                <input type="text" placeholder="Tìm kiếm tài khoản và video" />
              </label>
              <span></span>
              <div className={styles.searchBtn}>
                <button className="cursor" title="Tìm kiếm">
                  <SearchOutlined />
                </button>
              </div>
            </div>
            <div className={styles.menuContainer}>
              {checkHasUser(user.user) ? (
                <div className={styles.menu}>
                  <div className={clsx(styles.item, "cursor")}>
                    <CloudUploadOutlinedIcon className={styles.uploadIcon} />
                  </div>
                  <div className={clsx(styles.item, "cursor")}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </div>
                  <div className={clsx(styles.item, "cursor")}>
                    <FontAwesomeIcon icon={faBell} />
                  </div>
                  <div className={clsx(styles.more, "cursor")}>
                    <div className={styles.userAvatar}>
                      <img
                        className={clsx(styles.avatar, "avatar")}
                        src={user.user.photos[0].value}
                        alt="Avatar"
                      />
                    </div>
                    <ul className={clsx(styles.morePopup, styles.userMorePopup, "popup")}>
                      <li>Xem hồ sơ</li>
                      <li>Nhận xu</li>
                      <li>Cài đặt</li>
                      <li>Tiếng Việt</li>
                      <li>Phản hồi và trợ giúp</li>
                      <li>Phím tắt trên bàn phím</li>
                      <li className={styles.logoutLine}></li>
                      <li onClick={handleLogout}>Đăng xuất</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className={styles.menu}>
                  <div className={clsx(styles.upload, "cursor")}>
                    <span>Tải lên</span>
                  </div>
                  <div className={clsx(styles.login, "cursor")} onClick={handleClickLogin}>
                    Đăng nhập
                  </div>
                  <div className={clsx(styles.more, "cursor")}>
                    <MoreVert />
                    <ul className={clsx(styles.morePopup, "popup")}>
                      <li>Tiếng Việt</li>
                      <li>Phản hồi và trợ giúp</li>
                      <li>Phím tắt trên bàn phím</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
        <div className={styles.mobileTabletHeader}>
          <div className={styles.mtMoreIcon}>
            <MenuIcon />
          </div>
          <div className={styles.mtHeaderItem}>Đang Follow</div>
          <div className={styles.mtHeaderItem}>Dành cho bạn</div>
        </div>
      </MediaQuery>
    </header>
  );
}
