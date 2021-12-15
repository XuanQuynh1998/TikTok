import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import styles from "./Login.module.scss";
import { google } from "../../assets";
import { useStore } from "../../context/store";
import { actions } from "../../context/state";
import { authUrl } from "../../auth";

export default function Login() {
  const [, dispatch] = useStore();

  const handleLoginGoogle = () => {
    window.open(authUrl.GOOGLE_AUTH_URL, "_self");
  };

  const handleCloseLoginModal = () => {
    dispatch(actions.setOpenLoginModal(false));
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <div className={styles.closeButton} onClick={handleCloseLoginModal}>
          <div className={styles.close}>
            <CloseOutlinedIcon />
          </div>
        </div>
        <div className={styles.loginTitle}>Đăng nhập vào TikTok</div>
        <div className={styles.loginMethod}>
          <div className={styles.buttonContainer} onClick={handleLoginGoogle}>
            <div className={styles.iconContainer}>
              <img className={styles.icon} src={google} alt="" />
            </div>
            <span className={styles.methodName}>Tiếp tục với Google</span>
          </div>
        </div>
      </div>
    </div>
  );
}
