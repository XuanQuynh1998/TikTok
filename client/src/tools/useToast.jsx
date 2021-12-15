import React, { useEffect } from "react";

export default function useToast({ toast, showCopyToast, setShowCopyToast, timeout }) {
  useEffect(() => {
    if (showCopyToast) {
      setTimeout(() => {
        setShowCopyToast(false);
      }, timeout);
    }
  }, [showCopyToast, setShowCopyToast, timeout]);

  return (
    <div className="toast">
      <span>{toast}</span>
    </div>
  );
}
