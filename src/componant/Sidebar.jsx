import React, { useState, useContext, useEffect } from "react";
import {
  FaCommentDots,
  FaUserFriends,
  FaUser,
  FaCog,
  FaMoon,
  FaSun,
  FaUserTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./Sidebar.css";
import { ThemeContext } from "../ThemeContext.js/ThemeProvider";
import useUserStore from "../repos/useUserStore.JSX";
import { FaGlobe } from "react-icons/fa";
import i18n from "i18next";

export default function Sidebar() {
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);

    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const currentUser = useUserStore((state) => state.currentUser);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const menuItems = [
    { icon: <FaCommentDots />, key: "chats", path: "/chats" },
    { icon: <FaUserFriends />, key: "story", path: "/story" },
    { icon: <FaUser />, key: "profile", path: "/profile" },
    { icon: <FaCog />, key: "settings", path: "/settings" },
    { icon: <FaUserTimes />, key: "Block", path: "/Block" },
  ];

  return (
    <div
      className={`sidebar ${isSidebarOpen ? "open" : "closed"} ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <button
        className={`burger-menu ${darkMode ? "dark" : "light"}`}
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {isSidebarOpen && (
        <div className="sidebar-icons">
          <img
            src="/src/assets/Purple_and_Pink_Gradient_Illustrative_Chat_Website_Logo-removebg-preview.png"
            className="logo-large"
            alt="logo"
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
          />

          {menuItems.map((item, idx) => {
            const isActive = currentPath.includes(item.path);
            return (
              <Link to={item.path} key={idx}>
                <div className={`sidebar-icon ${isActive ? "active" : ""}`}>
                  {item.icon}
                </div>
              </Link>
            );
          })}

          <div
            className="sidebar-icon"
            onClick={() => setDarkMode((prev) => !prev)}
            style={{ cursor: "pointer" }}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </div>
          <div
            className="sidebar-icon"
            onClick={toggleLanguage}
            style={{ cursor: "pointer" }}
          >
            <FaGlobe />
          </div>
        </div>
      )}

      {isSidebarOpen && (
        <div className="sidebar-avatar">
          <Image
            src={currentUser?.photoURL || "https://i.pravatar.cc/100"}
            roundedCircle
            width={40}
            height={40}
          />
        </div>
      )}
    </div>
  );
}
