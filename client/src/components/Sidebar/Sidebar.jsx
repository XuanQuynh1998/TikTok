import React from "react";
import { Home, PeopleOutline, VideocamOutlined, Search, MusicNote } from "@material-ui/icons";
import TagIcon from "@mui/icons-material/Tag";
import clsx from "clsx";

import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={clsx(styles.sidebarContainer, "navbarScrollBar")}>
        <div className={styles.navWrapper}>
          <div className={clsx(styles.item, styles.active)}>
            <Home />
            <span>Dành cho bạn</span>
          </div>
          <div className={styles.item}>
            <PeopleOutline />
            <span>Đang Follow</span>
          </div>
          <div className={styles.item}>
            <VideocamOutlined />
            <span>LIVE</span>
          </div>
        </div>
        <div className={styles.listItem}>
          <span>Tài khoản được đề xuất</span>
          <a href="/#">
            <div className={styles.user}>
              <div className={styles.userAvatar}>
                <img
                  className={clsx(styles.avatar, "avatar")}
                  src="https://yt3.ggpht.com/yti/APfAmoHMiv7JmbrqW5c_Wu7NKtgTfGbFvy2V_OVTh5Eb=s88-c-k-c0x00ffffff-no-rj-mo"
                  alt=""
                />
              </div>
              <div className={styles.userInfo}>
                <h4>tiin.vn</h4>
                <p>Tiin.vn</p>
              </div>
            </div>
          </a>
          <div className={clsx(styles.viewAll, "cursor")}>Xem tất cả</div>
        </div>
        <div className={styles.listItem}>
          <span>Các tài khoản đang follow</span>
          <a href="/#">
            <div className={styles.user}>
              <div className={styles.userAvatar}>
                <img
                  className={clsx(styles.avatar, "avatar")}
                  src="https://yt3.ggpht.com/yti/APfAmoHMiv7JmbrqW5c_Wu7NKtgTfGbFvy2V_OVTh5Eb=s88-c-k-c0x00ffffff-no-rj-mo"
                  alt=""
                />
              </div>
              <div className={styles.userInfo}>
                <h4>tiin.vn</h4>
                <p>Tiin.vn</p>
              </div>
            </div>
          </a>
          <div className={clsx(styles.viewAll, "cursor")}>Xem thêm</div>
        </div>
        <div className={styles.listItem}>
          <span>Khám phá</span>
          <div className={styles.discover}>
            <a href="/#">
              <div className={styles.discoverItem}>
                <MusicNote />
                <p>Laxed (Siren Beat)</p>
              </div>
            </a>
            <a href="/#">
              <div className={styles.discoverItem}>
                <Search />
                <p>Laxed (Siren Beat)</p>
              </div>
            </a>
            <a href="/#">
              <div className={styles.discoverItem}>
                <TagIcon />
                <p>xuaycobienhinsssssssssssssssssssssssssssssssssssssssssssssssssssssssssh</p>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.copyright}>© 2021 TikTok</div>

        <div className={styles.navWrapper}>
          <div className={clsx(styles.item, styles.active)}>
            <Home />
            <span>Dành cho bạn</span>
          </div>
          <div className={styles.item}>
            <PeopleOutline />
            <span>Đang Follow</span>
          </div>
          <div className={styles.item}>
            <VideocamOutlined />
            <span>LIVE</span>
          </div>
        </div>
        <div className={styles.listItem}>
          <span>Tài khoản được đề xuất</span>
          <a href="/#">
            <div className={styles.user}>
              <div className={styles.userAvatar}>
                <img
                  className={clsx(styles.avatar, "avatar")}
                  src="https://yt3.ggpht.com/yti/APfAmoHMiv7JmbrqW5c_Wu7NKtgTfGbFvy2V_OVTh5Eb=s88-c-k-c0x00ffffff-no-rj-mo"
                  alt=""
                />
              </div>
              <div className={styles.userInfo}>
                <h4>tiin.vn</h4>
                <p>Tiin.vn</p>
              </div>
            </div>
          </a>
          <div className={clsx(styles.viewAll, "cursor")}>Xem tất cả</div>
        </div>
        <div className={styles.listItem}>
          <span>Các tài khoản đang follow</span>
          <a href="/#">
            <div className={styles.user}>
              <div className={styles.userAvatar}>
                <img
                  className={clsx(styles.avatar, "avatar")}
                  src="https://yt3.ggpht.com/yti/APfAmoHMiv7JmbrqW5c_Wu7NKtgTfGbFvy2V_OVTh5Eb=s88-c-k-c0x00ffffff-no-rj-mo"
                  alt=""
                />
              </div>
              <div className={styles.userInfo}>
                <h4>tiin.vn</h4>
                <p>Tiin.vn</p>
              </div>
            </div>
          </a>
          <div className={clsx(styles.viewAll, "cursor")}>Xem thêm</div>
        </div>
        <div className={styles.listItem}>
          <span>Khám phá</span>
          <div className={styles.discover}>
            <a href="/#">
              <div className={styles.discoverItem}>
                <MusicNote />
                <p>Laxed (Siren Beat)</p>
              </div>
            </a>
            <a href="/#">
              <div className={styles.discoverItem}>
                <Search />
                <p>Laxed (Siren Beat)</p>
              </div>
            </a>
            <a href="/#">
              <div className={styles.discoverItem}>
                <TagIcon />
                <p>xuaycobienhinsssssssssssssssssssssssssssssssssssssssssssssssssssssssssh</p>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.copyright}>© 2021 TikTok</div>
      </div>
    </div>
  );
}
