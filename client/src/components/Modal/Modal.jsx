import { useEffect } from "react";

import styles from "./Modal.module.scss";

export default function Modal({ children }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "auto");
  }, []);

  return <div className={styles.modal}>{children}</div>;
}
