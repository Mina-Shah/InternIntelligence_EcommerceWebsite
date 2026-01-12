import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // We use a tiny delay (0ms) to push the scroll to the end of the execution queue.
    // This ensures the new page has loaded before we scroll.
    const scrollTimer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // Use instant to avoid conflict with CSS smooth scroll
      });
      
      // Secondary fallback for stubborn browsers/layouts
      document.documentElement.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(scrollTimer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;