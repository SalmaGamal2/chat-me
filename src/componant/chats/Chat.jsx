import { useEffect, useState } from "react";
import "./Chats.css";
import Message from "./Message";
import { usersRepo } from "../../repos/usersRepo";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Adduser from "./adduser/Adduser";
import { auth, db } from "../../firebase";
import { useTranslation } from "react-i18next";
import ChatWindow from "./ChatWindow";

import searchIcon from "../../assets/search.png";
import plusIcon from "../../assets/plus.png";
import minusIcon from "../../assets/minus.png";
import defaultAvatar from "../../assets/avatar.png";

export default function Chat() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [add, setAdd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredChats, setFilteredChats] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const currentUserId = auth.currentUser?.uid || "";
  const { t } = useTranslation();

  useEffect(() => {
    const q = query(
      collection(db, "chats"),
      where("users", "array-contains", currentUserId)
    );

    const unsubscribe = onSnapshot(q, async (chatsSnapshot) => {
      let promises = [];
      let finalChats = [];

      chatsSnapshot.forEach((chat) => {
        let obj = { ...chat.data(), documentId: chat.id };
        const receiverId = obj.users.find((el) => el !== currentUserId);

        if (!receiverId) return;

        const promise = usersRepo.get_user_by_id(receiverId).then((res) => {
          obj.name = res?.name || "Unknown User";
          obj.photoURL = res?.photo || defaultAvatar;
          finalChats.push(obj);
        });

        promises.push(promise);
      });

      await Promise.all(promises);
      setChats(finalChats);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [currentUserId]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredChats([]);
    } else {
      const filtered = chats.filter((chat) =>
        chat.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredChats(filtered);
    }
  }, [searchTerm, chats]);

  const handleSelect = (chatId, index) => {
    setActiveIndex(index);
    setSelectedChatId(chatId);
  };

  return (
    <div
      className="chat-wrapper d-flex flex-column"
      style={{ height: "100%", minHeight: 0 }}
    >
      <div className="chatlist col-12 h-100 p-3 d-flex flex-column ">
        <div className="search">
          <div className="searchbar d-flex align-items-center mb-3">
            <img
              src={searchIcon}
              alt="search"
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
            <input
              className="w-100"
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: "5px" }}
            />
          </div>
          <img
            src={add ? minusIcon : plusIcon}
            className="addation"
            alt="toggle"
            onClick={() => setAdd((prev) => !prev)}
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
          />
        </div>

        <div className="chat-header mb-3">
          <h3>
            {t("yourChats")} (
            {filteredChats.length > 0 ? filteredChats.length : chats.length})
          </h3>
        </div>

        {loading ? (
          <div className="text-center mt-5">
            <div className="spinner"></div>
            <p className="text-muted">{t("loading")}</p>
          </div>
        ) : (filteredChats.length > 0 ? filteredChats : chats).length === 0 ? (
          <p className="text-center text-muted mt-3">{t("noMatches")}</p>
        ) : (
          (filteredChats.length > 0 ? filteredChats : chats).map(
            (el, index) => (
              <Message
                key={el.documentId}
                chat_id={el.documentId}
                username={el.name}
                data={el}
                isActive={index === activeIndex}
                onClick={() => handleSelect(el.documentId, index)}
              />
            )
          )
        )}

        {add && <Adduser onClose={() => setAdd(false)} setChats={setChats} />}
      </div>

      {selectedChatId && (
        <div className="chat-window-container mt-3">
          <ChatWindow chatId={selectedChatId} />
        </div>
      )}
    </div>
  );
}
