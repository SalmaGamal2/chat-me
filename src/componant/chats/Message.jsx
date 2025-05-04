import { useEffect, useState } from "react";
import { useChat } from "../..";
import {
  doc,
  getDoc,
  onSnapshot,
  query,
  orderBy,
  collection,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useTranslation } from "react-i18next";
import "./Chats.css";

export default function Message(props) {
  const [lastMessage, setLastMessage] = useState("");
  const [lastTime, setLastTime] = useState("");
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOnline, setIsOnline] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const { setOpendChat } = useChat();
  const { t } = useTranslation();

  useEffect(() => {
    if (!props.chat_id) return;

    const chatRef = doc(db, "chats", props.chat_id);
    const msgsRef = collection(db, `chats/${props.chat_id}/message`);
    const q = query(msgsRef, orderBy("datetime"));

    let otherUserId = null;

    const unsubscribeChat = onSnapshot(chatRef, async (chatSnap) => {
      if (chatSnap.exists()) {
        const chatData = chatSnap.data();
        otherUserId = chatData.users.find(
          (uid) => uid !== auth.currentUser?.uid
        );

        if (otherUserId) {
          const userRef = doc(db, "users", otherUserId);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            setIsOnline(userSnap.data().isOnline);
          }
        }
      }
    });

    const unsubscribeMsgs = onSnapshot(q, (snapshot) => {
      if (blocked) {
        setLastMessage(t("blocked"));
        setLastTime("");
        setUnreadCount(0);
        return;
      }

      const allMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (allMessages.length > 0) {
        const last = allMessages[allMessages.length - 1];
        setLastMessage(last.text || t("noMessage"));
        setLastTime(
          last.datetime?.toDate
            ? new Date(last.datetime.toDate()).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : ""
        );

        const unread = allMessages.filter(
          (msg) => msg.sender !== auth.currentUser?.uid
        ).length;
        setUnreadCount(unread);
      } else {
        setLastMessage(t("noMessages"));
        setLastTime("");
        setUnreadCount(0);
      }
    });

    // 🔥 Listen live to block status
    let unsubscribeBlock1, unsubscribeBlock2;

    const listenToBlockStatus = () => {
      const blockRef1 = doc(
        db,
        "blocks",
        `${auth.currentUser.uid}_${otherUserId}`
      );
      const blockRef2 = doc(
        db,
        "blocks",
        `${otherUserId}_${auth.currentUser.uid}`
      );

      unsubscribeBlock1 = onSnapshot(blockRef1, (docSnap) => {
        if (docSnap.exists()) setBlocked(true);
      });

      unsubscribeBlock2 = onSnapshot(blockRef2, (docSnap) => {
        if (docSnap.exists()) setBlocked(true);
      });
    };

    setTimeout(() => {
      if (otherUserId) {
        listenToBlockStatus();
      }
    }, 500);

    return () => {
      unsubscribeChat();
      unsubscribeMsgs();
      unsubscribeBlock1 && unsubscribeBlock1();
      unsubscribeBlock2 && unsubscribeBlock2();
    };
  }, [props.chat_id]);

  const handleClick = () => {
    if (blocked) return;

    props.onClick && props.onClick();
    setOpendChat(props.chat_id);

    const chatSection = document.getElementById("chatmessage");
    if (chatSection) chatSection.scrollIntoView({ behavior: "smooth" });

    setUnreadCount(0);
  };

  if (blocked) {
    return (
      <div className="people">
        <div className="text">
          <h5>{props.username}</h5>
          <p>{t("blocked")}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`people ${props.isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="position-relative d-flex">
        <img
          src="/src/assets/avatar.png"
          alt="avatar"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <small
          style={{
            background: isOnline ? "green" : "gray",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            position: "absolute",
            bottom: "5px",
            right: "5px",
          }}
        ></small>
      </div>
      <div className="text flex-grow-1">
        <h5 className="m-0 username">{props.username}</h5>
        <p className="m-0">{lastMessage}</p>
      </div>
      <div className="d-flex flex-column align-items-center gap-2 time">
        <h6 className="m-0">{lastTime}</h6>
        {unreadCount > 0 && (
          <span
            style={{
              backgroundColor: "#0d6efd",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
            }}
          >
            {unreadCount}
          </span>
        )}
      </div>
    </div>
  );
}
