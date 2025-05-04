import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Mainlayout from "./Layout/Mainlayout";

import LoginPage from "./componant/loginPage/LoginPage";
import Regester from "./componant/regester/Regester";
import Chat from "./componant/chats/Chat";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import useUserStore from "./repos/useUserStore.JSX";
import HomePage from "./componant/home page/main home/HomePage";
import Settings from "./componant/settings/Settings";
import { doc, getDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import Block from "./Block/Block";
import StoryApp from "./componant/StoryApp/StoryApp";

export default function App() {
  const [activeTab, setActiveTab] = useState("chats");
  const setCurrentUser = useUserStore((state) => state.setCurrentUser);
  const { t } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("en-US");
  }, [i18n]);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = { uid: user.uid, ...userDoc.data() };
          setCurrentUser(userData);
        }
      } else {
        setCurrentUser(null);
      }
    });

    return () => unSub();
  }, [setCurrentUser]);

  return (
    <div className="App h-100 ">
      <Routes>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HomePage />
            </motion.div>
          }
        />
        <Route path="/" element={<Mainlayout />}>
          <Route
            path="chats"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Chat />
              </motion.div>
            }
          />
          <Route
            path="Settings"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Settings />
              </motion.div>
            }
          />
          <Route
            path="Block"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Block />
              </motion.div>
            }
          />

          <Route
            path="story"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <StoryApp />
              </motion.div>
            }
          />
          <Route
            path="profile"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>profile</h2>
              </motion.div>
            }
          />
        </Route>

        <Route>
          <Route
            path="/login"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <LoginPage />
              </motion.div>
            }
          />

          <Route
            path="/register"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Regester />
              </motion.div>
            }
          />
          {/* <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <HomePage />
              </motion.div>
            }
          /> */}
          <Route path="*" element={<h2>NOT FOUND</h2>} />
        </Route>
      </Routes>
    </div>
  );
}
