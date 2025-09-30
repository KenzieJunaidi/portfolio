import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const ScrollToHash = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }, [location]);

    return null;
};