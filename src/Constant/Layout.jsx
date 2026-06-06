import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import "../index.css";

export default function Layout() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const hideFooter = location.pathname === "/msent";

  return (
    <div className="siteWrapper">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="contentArea">
        <Outlet />
      </div>

      {!hideFooter && <Footer />}
    </div>
  );
}