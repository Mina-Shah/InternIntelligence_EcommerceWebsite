import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // This moves the screen to the top
  }, [pathname]); // This runs every time the URL changes

  return null;
};

export default ScrollToTop;
