import React, { useEffect, useRef, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useChat } from "../..";
import EmojiPicker from "emoji-picker-react";
import Swal from "sweetalert2";
import style from "./Chatmessage.module.css";
import "../details/Details";
import { FaCamera, FaSmile } from "react-icons/fa";
import Details from "../details/Details";
import { useTranslation } from "react-i18next";
import TicTacToeModal from "../../game/TicTacToeModal";

export default function ChatMessage() {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const audioChunksRef = useRef([]);

  const [showGame, setShowGame] = useState(false);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [msgs, setmsg] = useState([]);
  const [sharedPhotos, setSharedPhotos] = useState([]);
  const [chatUser, setChatUser] = useState(null);
  const fileInputRef = useRef(null);
  const [userStatus, setUserStatus] = useState({
    isOnline: false,
    lastSeen: null,
  });
  const [uploading, setUploading] = useState(false);
  const endRef = useRef(null);
  const { chat_id } = useChat();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();
  const direction = document.documentElement.dir;

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      audioChunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const audioFile = new File([audioBlob], "voiceMessage.webm", {
          type: "audio/webm",
        });

        const formData = new FormData();
        formData.append("file", audioFile);
        formData.append("upload_preset", "chatApp");

        try {
          const res = await fetch(
            "https://api.cloudinary.com/v1_1/dec3jkvqs/video/upload",
            {
              method: "POST",
              body: formData,
            }
          );

          const data = await res.json();

          await addDoc(collection(db, `chats/${chat_id}/message`), {
            audio: data.secure_url,
            sender: auth.currentUser?.uid,
            datetime: serverTimestamp(),
          });
        } catch (err) {
          console.error("Error uploading audio:", err);
        }
      };

      recorder.start();
      setMediaRecorder(recorder);
      setRecording(true);
    } catch (err) {
      console.error("Mic access error:", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const handleEmoji = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
  };

  const checkBlocked = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser || !chatUser?.uid) return false;

    const blockRef = doc(db, "blocks", `${currentUser.uid}_${chatUser.uid}`);
    const blockSnap = await getDoc(blockRef);

    return blockSnap.exists();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  useEffect(() => {
    if (!auth.currentUser) return;
    const userRef = doc(db, "users", auth.currentUser.uid);
    updateDoc(userRef, { isOnline: true, lastSeen: null });

    return () => {
      updateDoc(userRef, { isOnline: false, lastSeen: serverTimestamp() });
    };
  }, []);

  useEffect(() => {
    const fetchChatUser = async () => {
      if (!chat_id) return;
      const chatDoc = await getDoc(doc(db, "chats", chat_id));
      const chatData = chatDoc.data();
      if (!chatData?.users) return;

      const otherUserUid = chatData.users.find(
        (uid) => uid !== auth.currentUser?.uid
      );

      if (otherUserUid) {
        const userDoc = await getDoc(doc(db, "users", otherUserUid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setChatUser(userData);
          setUserStatus({
            isOnline: userData.isOnline,
            lastSeen: userData.lastSeen?.toDate(),
          });
        }
      }
    };

    fetchChatUser();
  }, [chat_id]);

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
      (snapshot) => {
        const final = snapshot.docs.map((doc) => ({
          ...doc.data(),
          documentId: doc.id,
        }));
        setmsg(final);
        const photos = final.filter((msg) => msg.img);
        setSharedPhotos(photos);
      }
    );

    return () => unsub();
  }, [chat_id]);

  const handleSend = async () => {
    if (text.trim() === "") return;
    try {
      const isUserBlocked = await checkBlocked();
      if (isUserBlocked) {
        Swal.fire({
          icon: "error",
          title: t("blocked"),
          text: t("blockedMessage"),
        });
        return;
      }

      await addDoc(collection(db, `chats/${chat_id}/message`), {
        text,
        sender: auth.currentUser?.uid,
        datetime: serverTimestamp(),
      });
      setText("");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: t("error"),
        text: t("messageSendError"),
      });
    }
  };

  const handleDeleteMessage = async (messageId) => {
    if (!auth.currentUser) return;

    const result = await Swal.fire({
      title: t("areYouSure"),
      text: t("messageDeleteWarning"),
      icon: t("warning"),
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: t("yesDelete"),
      cancelButtonText: t("cancel"),
    });

    if (result.isConfirmed) {
      try {
        await deleteDoc(doc(db, `chats/${chat_id}/message/${messageId}`));
        Swal.fire(t("deleted"), t("messageDeleted"), "success");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: t("error"),
          text: t("messageDeleteError"),
        });
      }
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "chatApp");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dec3jkvqs/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      const imageUrl = data.secure_url;

      await addDoc(collection(db, `chats/${chat_id}/message`), {
        text: text.trim(),
        img: imageUrl,
        sender: auth.currentUser?.uid,
        datetime: serverTimestamp(),
      });

      setText("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: t("error"),
        text: t("imageUploadError"),
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <div className="d-flex flex-column" id={style.chat}>
        {/* Header */}
        <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
          <div
            className="user d-flex align-items-center gap-2"
            style={{ cursor: "pointer" }}
            data-bs-toggle="offcanvas"
            data-bs-target="#userDetailsCanvas"
          >
            <img
              src={chatUser?.photoURL || "/src/assets/avatar.png"}
              id={style.avatar}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              alt="avatar"
            />
            <p className="m-0" id={style.info}>
              {chatUser?.displayName || t("user")}
            </p>
            <div className="status">
              {userStatus.isOnline ? (
                <span className="text-success">{t("online")}</span>
              ) : (
                <span className="text-muted">
                  {t("lastSeen")}{" "}
                  {userStatus.lastSeen &&
                    new Date(userStatus.lastSeen).toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="d-flex flex-column gap-2" id={style.center}>
          {msgs.map((msg) => (
            <div
              key={msg.documentId}
              className={`massge ${
                msg.sender === auth.currentUser?.uid ? "own" : ""
              }`}
              id={
                msg.sender === auth.currentUser?.uid
                  ? style.massgeOwn
                  : style.massge
              }
            >
              {msg.sender !== auth.currentUser?.uid && (
                <img
                  src={chatUser?.photoURL || "/src/assets/avatar.png"}
                  alt="avatar"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              )}
              <div
                className="texts flex-grow-1 d-flex flex-column gap-2 position-relative"
                id={
                  msg.sender === auth.currentUser?.uid
                    ? style.texts
                    : style.recev
                }
              >
                {msg.img && (
                  <img
                    src={msg.img}
                    alt="message"
                    className={style.chatImage}
                    onClick={() => setSelectedImage(msg.img)}
                    style={{ cursor: "pointer" }}
                  />
                )}
                <p>{msg.text}</p>
                {msg.audio && (
                  <audio
                    controls
                    src={msg.audio}
                    style={{ maxWidth: "250px" }}
                  />
                )}
                <h6>
                  {msg.datetime?.toDate
                    ? new Date(msg.datetime.toDate()).toLocaleTimeString()
                    : ""}
                </h6>
                {msg.sender === auth.currentUser?.uid && (
                  <button
                    onClick={() => handleDeleteMessage(msg.documentId)}
                    className="btn btn-sm btn-danger position-absolute"
                    style={{
                      top: "0",
                      right: "0",
                      borderRadius: "50%",
                      fontSize: "7px",
                    }}
                  >
                    ✖
                  </button>
                )}
              </div>
            </div>
          ))}
          {uploading && (
            <div className="d-flex justify-content-center align-items-center p-2">
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">{t("loading")}</span>
              </div>
            </div>
          )}
          <div ref={endRef}></div>
        </div>

        {/* Input */}
        <div
          className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
          id={style.bottom}
        >
          <div className="icons d-flex gap-2 align-items-center">
            <FaCamera
              size={24}
              style={{ cursor: "pointer", color: "#0dcaf0" }}
              title={t("uploadImage")}
              onClick={() => fileInputRef.current.click()}
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
            <button
              className={`btn btn-sm ${
                recording ? "btn-danger" : "btn-secondary"
              }`}
              onClick={recording ? stopRecording : startRecording}
              title={recording ? t("stopRecording") : t("startRecording")}
            >
              🎤
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder={t("typeMessage")}
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ flexGrow: 1 }}
          />
          <div className="emoji position-relative">
            <FaSmile
              size={24}
              onClick={() => setOpen((prev) => !prev)}
              style={{ cursor: "pointer", color: "#ffc107" }}
              title={t("emojiPicker")}
            />
            {open && (
              <>
                {isMobile ? (
                  <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.6)",
                      zIndex: 1050,
                    }}
                    onClick={() => setOpen(false)}
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="modal-content p-3">
                        <EmojiPicker
                          onEmojiClick={handleEmoji}
                          width="100%"
                          height="400px"
                        />
                        <button
                          type="button"
                          className="btn btn-danger mt-3"
                          onClick={() => setOpen(false)}
                        >
                          {t("close")}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="picker position-absolute bg-white p-2 rounded shadow"
                    style={{
                      bottom: "60px",
                      [direction === "rtl" ? "left" : "right"]: "10px",
                      width: "300px",
                      height: "350px",
                      overflowY: "auto",
                      zIndex: 1000,
                    }}
                  >
                    <EmojiPicker
                      onEmojiClick={handleEmoji}
                      width="100%"
                      height="100%"
                    />
                  </div>
                )}
              </>
            )}
          </div>

          <button
            type="button"
            className="btn btn-outline-info"
            style={{ marginLeft: "1rem" }}
            onClick={handleSend}
          >
            {t("send")}
          </button>
        </div>
      </div>

      {selectedImage && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-transparent border-0 position-relative">
              <button
                type="button"
                className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                aria-label="Close"
                onClick={() => setSelectedImage(null)}
              ></button>
              <img
                src={selectedImage}
                alt="Full size"
                className="img-fluid rounded"
                style={{ maxWidth: "90%", maxHeight: "80vh" }}
              />
            </div>
          </div>
        </div>
      )}

      <Details user={chatUser} sharedPhotos={sharedPhotos} />
    </>
  );
}
