import { useEffect, useState } from "react";

export default function useOnScreen(videoRef) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-60px 0px 0px 0px",
      threshold: 0.5,
    };

    const callbackFunc = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(callbackFunc, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [videoRef, isVisible]);

  return isVisible;
}
