// تعدييييييييييييل

// import React, { useEffect, useRef, useState } from "react";
// import { useChat } from "../..";
// import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
// import style from "./Chatmessage.module.css";
// // import db from "../../firebase";
// import EmojiPicker from "emoji-picker-react";
// import { DiJava } from "react-icons/di";
// import { db } from "../../firebase";

// export default function ChatMessage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const { chat_id } = useChat();
//   const [msgs, setmsg] = useState([]);
//   const endRef = useRef(null);
//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, []);

//   const handleEmoji = (e) => {
//     setText((prev) => prev + e.emoji);
//     setOpen(false);
//   };

//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (msgs) => {
//         let final = msgs.docs.map((msg) => ({
//           ...msg.data(),
//           documentId: msg.id,
//         }));
//         setmsg(final);
//       }
//     );
//     return () => unsub();
//   }, [chat_id]);

//   return (
//     <div className=" d-flex flex-column" id={style.chat}>
//       {/* Top */}
//       <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//         <div
//           className="user d-flex align-items-center gap-2"
//           style={{ cursor: "pointer" }}
//         >
//           <img src="/src/assets/avatar.png" id={style.avatar} alt="avatar" />
//           <p className="m-0" id={style.info}>
//             sara gamal
//           </p>
//         </div>
//       </div>
//       {/* Center */}
//       <div className="d-flex flex-column gap-2" id={style.center}>
//         {" "}
//         <div className="massge" id={style.massge}>
//           <img src="/src/assets/avatar.png"></img>
//           <div
//             className="texts flex-grow-1 d-flex flex-column gap-2  "
//             id={style.recev}
//           >
//             <p>Lorem ipsum dolor sit amet.</p>
//             <h6>i min ago</h6>
//           </div>
//         </div>
//         <div className="massge own" id={style.massgeOwn}>
//           {/* <img src="/src/assets/avatar.png"></img> */}
//           <div
//             className="texts flex-grow-1 d-flex flex-column gap-2 "
//             id={style.texts}
//           >
//             <img
//               src="/src/assets/bg.jpg"
//               style={{
//                 width: "100%",
//                 height: "300px",
//                 borderRadius: "10px",
//                 objectFit: "cover",
//               }}
//             ></img>
//             <p>Lorem ipsum dolor sit amet.</p>
//             <h6>i min ago</h6>
//           </div>
//         </div>
//         <div className="massge " id={style.massge}>
//           <img src="/src/assets/avatar.png"></img>
//           <div
//             className="texts flex-grow-1 d-flex flex-column gap-2"
//             id={style.recev}
//           >
//             <p>Lorem ipsum dolor sit amet.</p>
//             <h6>i min ago</h6>
//           </div>
//         </div>
//         <div className="massge own" id={style.massgeOwn}>
//           {/* <img src="/src/assets/avatar.png"></img> */}
//           <div
//             className="texts flex-grow-1 d-flex flex-column gap-2"
//             id={style.texts}
//           >
//             <img
//               src="/src/assets/avatar.png"
//               // style={{ width: "30px", height: "30px" }}
//             ></img>
//             <p>Lorem ipsum dolor sit amet.</p>
//             <h6>i min ago</h6>
//           </div>
//         </div>
//         <div className="massge " id={style.massge}>
//           <img src="/src/assets/avatar.png"></img>
//           <div
//             className="texts flex-grow-1 d-flex flex-column g-2"
//             id={style.recev}
//           >
//             <p>Lorem ipsum dolor sit amet.</p>
//             <h6>i min ago</h6>
//           </div>
//         </div>
//         <div className="massge own " id={style.massgeOwn}>
//           {/* <img src="/src/assets/avatar.png"></img> */}
//           <div
//             className="texts flex-grow-1 d-flex flex-column gap-2"
//             id={style.texts}
//           >
//             <img
//               src="/src/assets/avatar.png"
//               // style={{ width: "30px", height: "30px" }}
//             ></img>
//             <p>Lorem ipsum dolor sit amet.</p>
//             <h6>i min ago</h6>
//           </div>
//         </div>
//         <div ref={endRef}></div>
//       </div>

//       {/* //       <div */}

//       <div
//         className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//         id={style.bottom}
//       >
//         <div className="icons d-flex gap-2">
//           <img src="/src/assets/camera.png" id={style.camera} alt="camera" />
//         </div>
//         <input
//           id={style.input}
//           className="form-control"
//           type="text"
//           placeholder="Type a message..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <div className="emoji position-relative">
//           <img
//             src="/src/assets/emoji.png"
//             alt="emoji"
//             id={style.emojiIcon}
//             onClick={() => setOpen((prev) => !prev)}
//           />
//           <div className="picker position-absolute" id={style.picker}>
//             <EmojiPicker open={open} onEmojiClick={handleEmoji} />
//           </div>
//         </div>
//         <button type="button" className="btn btn-outline-info">
//           send
//         </button>
//       </div>
//     </div>
//   );
// }
// اي

//  </div>
//  </div>
//  hello
//  <ul>
//   {msgs && msgs.map((msg) => <li key={msg.documentId}>{msg.content}</li>)}
//  </ul>
//  </div>
// );
// }
// import React, { useEffect, useRef, useState } from "react";
// import { useChat } from "../..";
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   addDoc,
//   serverTimestamp,
// } from "firebase/firestore";
// import { auth, db } from "../../firebase";
// import EmojiPicker from "emoji-picker-react";
// import style from "./Chatmessage.module.css";

// export default function ChatMessage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [msgs, setmsg] = useState([]);
//   const endRef = useRef(null);
//   const { chat_id } = useChat();

//   // Scroll to latest message
//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [msgs]);

//   // Handle emoji select
//   const handleEmoji = (e) => {
//     setText((prev) => prev + e.emoji);
//     setOpen(false);
//   };

//   // Fetch messages from Firebase
//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (snapshot) => {
//         const final = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//           documentId: doc.id,
//         }));
//         setmsg(final);
//       }
//     );
//     return () => unsub();
//   }, [chat_id]);

//   // Send message to Firebase
//   const handleSend = async () => {
//     if (text.trim() === "") return;

//     try {
//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text,
//         sender: auth.currentUser.uid,
//         datetime: serverTimestamp(),
//       });
//       setText("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   return (
//     <div className="d-flex flex-column" id={style.chat}>
//       {/* Header */}
//       <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//         <div
//           className="user d-flex align-items-center gap-2"
//           style={{ cursor: "pointer" }}
//         >
//           <img src="/src/assets/avatar.png" id={style.avatar} alt="avatar" />
//           <p className="m-0" id={style.info}>
//             User
//           </p>
//         </div>
//       </div>

//       {/* Messages */}
//       <div className="d-flex flex-column gap-2" id={style.center}>
//         {msgs.map((msg) => (
//           <div
//             key={msg.documentId}
//             className={`massge ${
//               msg.sender === auth.currentUser.uid ? "own" : ""
//             }`}
//             id={
//               msg.sender === auth.currentUser.uid
//                 ? style.massgeOwn
//                 : style.massge
//             }
//           >
//             {msg.sender !== auth.currentUser.uid && (
//               <img src="/src/assets/avatar.png" alt="avatar" />
//             )}
//             <div
//               className="texts flex-grow-1 d-flex flex-column gap-2"
//               id={
//                 msg.sender === auth.currentUser.uid ? style.texts : style.recev
//               }
//             >
//               {msg.img && (
//                 <img
//                   src={msg.img}
//                   alt="message"
//                   style={{
//                     width: "100%",
//                     height: "300px",
//                     borderRadius: "10px",
//                     objectFit: "cover",
//                   }}
//                 />
//               )}
//               <p>{msg.text}</p>
//               <h6>
//                 {msg.datetime?.toDate
//                   ? new Date(msg.datetime.toDate()).toLocaleTimeString()
//                   : ""}
//               </h6>
//             </div>
//           </div>
//         ))}
//         <div ref={endRef}></div>
//       </div>

//       {/* Input Area */}
//       <div
//         className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//         id={style.bottom}
//       >
//         <div className="icons d-flex gap-2">
//           <img src="/src/assets/camera.png" id={style.camera} alt="camera" />
//         </div>
//         <input
//           id={style.input}
//           className="form-control"
//           type="text"
//           placeholder="Type a message..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <div className="emoji position-relative">
//           <img
//             src="/src/assets/emoji.png"
//             alt="emoji"
//             id={style.emojiIcon}
//             onClick={() => setOpen((prev) => !prev)}
//           />
//           {open && (
//             <div className="picker position-absolute" id={style.picker}>
//               <EmojiPicker onEmojiClick={handleEmoji} />
//             </div>
//           )}
//         </div>
//         <button
//           type="button"
//           className="btn btn-outline-info"
//           onClick={handleSend}
//         >
//           send
//         </button>
//       </div>
//     </div>
//   );
// }
// import React, { useEffect, useRef, useState } from "react";
// import { useChat } from "../..";
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   addDoc,
//   serverTimestamp,
//   doc,
//   deleteDoc,
// } from "firebase/firestore";
// import { auth, db } from "../../firebase";
// import EmojiPicker from "emoji-picker-react";
// import Swal from "sweetalert2"; // ✅ استدعاء SweetAlert
// import style from "./Chatmessage.module.css";

// export default function ChatMessage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [msgs, setmsg] = useState([]);
//   const endRef = useRef(null);
//   const { chat_id } = useChat();

//   // Scroll to latest message
//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [msgs]);

//   // Handle emoji select
//   const handleEmoji = (e) => {
//     setText((prev) => prev + e.emoji);
//     setOpen(false);
//   };

//   // Fetch messages from Firebase
//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (snapshot) => {
//         const final = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//           documentId: doc.id,
//         }));
//         setmsg(final);
//       }
//     );
//     return () => unsub();
//   }, [chat_id]);

//   // Send message to Firebase
//   const handleSend = async () => {
//     if (text.trim() === "") return;

//     try {
//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text,
//         sender: auth.currentUser.uid,
//         datetime: serverTimestamp(),
//       });
//       setText("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   // Delete a message with confirmation
//   const handleDeleteMessage = async (messageId) => {
//     const result = await Swal.fire({
//       title: "are you sure?",
//       text: "You will not be able to retrieve this message!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "cancel",
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, `chats/${chat_id}/message/${messageId}`));
//         Swal.fire(
//           " Deleted",
//           "The message was deleted successfully",
//           "success"
//         );
//       } catch (err) {
//         console.error("Error deleting message:", err);
//         Swal.fire("خطأ!", "حدث خطأ أثناء حذف الرسالة.", "error");
//       }
//     }
//   };

//   return (
//     <div className="d-flex flex-column" id={style.chat}>
//       {/* Header */}
//       <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//         <div
//           className="user d-flex align-items-center gap-2"
//           style={{ cursor: "pointer" }}
//         >
//           <img src="/src/assets/avatar.png" id={style.avatar} alt="avatar" />
//           <p className="m-0" id={style.info}>
//             User
//           </p>
//         </div>
//       </div>

//       {/* Messages */}
//       <div className="d-flex flex-column gap-2" id={style.center}>
//         {msgs.map((msg) => (
//           <div
//             key={msg.documentId}
//             className={`massge ${
//               msg.sender === auth.currentUser.uid ? "own" : ""
//             }`}
//             id={
//               msg.sender === auth.currentUser.uid
//                 ? style.massgeOwn
//                 : style.massge
//             }
//           >
//             {msg.sender !== auth.currentUser.uid && (
//               <img src="/src/assets/avatar.png" alt="avatar" />
//             )}
//             <div
//               className="texts flex-grow-1 d-flex flex-column gap-2 position-relative"
//               id={
//                 msg.sender === auth.currentUser.uid ? style.texts : style.recev
//               }
//             >
//               {msg.img && (
//                 <img
//                   src={msg.img}
//                   alt="message"
//                   style={{
//                     width: "100%",
//                     height: "300px",
//                     borderRadius: "10px",
//                     objectFit: "cover",
//                   }}
//                 />
//               )}
//               <p>{msg.text}</p>
//               <h6>
//                 {msg.datetime?.toDate
//                   ? new Date(msg.datetime.toDate()).toLocaleTimeString()
//                   : ""}
//               </h6>

//               {/* زر الحذف */}
//               {msg.sender === auth.currentUser.uid && (
//                 <button
//                   onClick={() => handleDeleteMessage(msg.documentId)}
//                   className="btn btn-sm btn-danger position-absolute"
//                   style={{
//                     top: "0",
//                     right: "0",
//                     borderRadius: "50%",
//                     fontSize: "7px",
//                   }}
//                 >
//                   ✖
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//         <div ref={endRef}></div>
//       </div>

//       {/* Input Area */}
//       <div
//         className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//         id={style.bottom}
//       >
//         <div className="icons d-flex gap-2">
//           <img src="/src/assets/camera.png" id={style.camera} alt="camera" />
//         </div>
//         <input
//           id={style.input}
//           className="form-control"
//           type="text"
//           placeholder="Type a message..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <div className="emoji position-relative">
//           <img
//             src="/src/assets/emoji.png"
//             alt="emoji"
//             id={style.emojiIcon}
//             onClick={() => setOpen((prev) => !prev)}
//           />
//           {open && (
//             <div className="picker position-absolute" id={style.picker}>
//               <EmojiPicker onEmojiClick={handleEmoji} />
//             </div>
//           )}
//         </div>
//         <button
//           type="button"
//           className="btn btn-outline-info"
//           onClick={handleSend}
//         >
//           send
//         </button>
//       </div>
//     </div>
//   );
// }
// مهم

// import React, { useEffect, useRef, useState } from "react";
// import { useChat } from "../..";
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   addDoc,
//   serverTimestamp,
//   doc,
//   deleteDoc,
// } from "firebase/firestore";
// import { auth, db } from "../../firebase";
// import EmojiPicker from "emoji-picker-react";
// import Swal from "sweetalert2"; // ✅ استدعاء SweetAlert
// import style from "./Chatmessage.module.css";

// export default function ChatMessage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [msgs, setmsg] = useState([]);
//   const endRef = useRef(null);
//   const { chat_id } = useChat();

//   // Scroll to latest message
//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [msgs]);

//   // Handle emoji select
//   const handleEmoji = (e) => {
//     setText((prev) => prev + e.emoji);
//     setOpen(false);
//   };

//   // Fetch messages from Firebase
//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (snapshot) => {
//         const final = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//           documentId: doc.id,
//         }));
//         setmsg(final);
//       }
//     );
//     return () => unsub();
//   }, [chat_id]);

//   // Send message to Firebase
//   const handleSend = async () => {
//     if (text.trim() === "") return;

//     try {
//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text,
//         sender: auth.currentUser?.uid, // added safe check for currentUser
//         datetime: serverTimestamp(),
//       });
//       setText("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   // Delete a message with confirmation
//   const handleDeleteMessage = async (messageId) => {
//     if (!auth.currentUser) {
//       console.error("No user is currently logged in!");
//       return;
//     }

//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to retrieve this message!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "Cancel",
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, `chats/${chat_id}/message/${messageId}`));
//         Swal.fire("Deleted", "The message was deleted successfully", "success");
//       } catch (err) {
//         console.error("Error deleting message:", err);
//         Swal.fire(
//           "Error!",
//           "There was an issue deleting the message.",
//           "error"
//         );
//       }
//     }
//   };

//   return (
//     <div className="d-flex flex-column" id={style.chat}>
//       {/* Header */}
//       <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//         <div
//           className="user d-flex align-items-center gap-2"
//           style={{ cursor: "pointer" }}
//         >
//           <img src="/src/assets/avatar.png" id={style.avatar} alt="avatar" />
//           <p className="m-0" id={style.info}>
//             User
//           </p>
//         </div>
//       </div>

//       {/* Messages */}
//       <div className="d-flex flex-column gap-2" id={style.center}>
//         {msgs.map((msg) => (
//           <div
//             key={msg.documentId}
//             className={`massge ${
//               msg.sender === auth.currentUser?.uid ? "own" : ""
//             }`}
//             id={
//               msg.sender === auth.currentUser?.uid
//                 ? style.massgeOwn
//                 : style.massge
//             }
//           >
//             {msg.sender !== auth.currentUser?.uid && (
//               <img src="/src/assets/avatar.png" alt="avatar" />
//             )}
//             <div
//               className="texts flex-grow-1 d-flex flex-column gap-2 position-relative"
//               id={
//                 msg.sender === auth.currentUser?.uid ? style.texts : style.recev
//               }
//             >
//               {msg.img && (
//                 <img
//                   src={msg.img}
//                   alt="message"
//                   style={{
//                     width: "100%",
//                     height: "300px",
//                     borderRadius: "10px",
//                     objectFit: "cover",
//                   }}
//                 />
//               )}
//               <p>{msg.text}</p>
//               <h6>
//                 {msg.datetime?.toDate
//                   ? new Date(msg.datetime.toDate()).toLocaleTimeString()
//                   : ""}
//               </h6>

//               {/* Delete button */}
//               {msg.sender === auth.currentUser?.uid && (
//                 <button
//                   onClick={() => handleDeleteMessage(msg.documentId)}
//                   className="btn btn-sm btn-danger position-absolute"
//                   style={{
//                     top: "0",
//                     right: "0",
//                     borderRadius: "50%",
//                     fontSize: "7px",
//                   }}
//                 >
//                   ✖
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//         <div ref={endRef}></div>
//       </div>

//       {/* Input Area */}
//       <div
//         className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//         id={style.bottom}
//       >
//         <div className="icons d-flex gap-2">
//           <img src="/src/assets/camera.png" id={style.camera} alt="camera" />
//         </div>
//         <input
//           id={style.input}
//           className="form-control"
//           type="text"
//           placeholder="Type a message..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <div className="emoji position-relative">
//           <img
//             src="/src/assets/emoji.png"
//             alt="emoji"
//             id={style.emojiIcon}
//             onClick={() => setOpen((prev) => !prev)}
//           />
//           {open && (
//             <div className="picker position-absolute" id={style.picker}>
//               <EmojiPicker onEmojiClick={handleEmoji} />
//             </div>
//           )}
//         </div>
//         <button
//           type="button"
//           className="btn btn-outline-info"
//           onClick={handleSend}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useRef, useState } from "react";
// import { useChat } from "../..";
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   addDoc,
//   serverTimestamp,
//   doc,
//   deleteDoc,
//   getDoc,
// } from "firebase/firestore";
// import { auth, db } from "../../firebase";
// import EmojiPicker from "emoji-picker-react";
// import Swal from "sweetalert2";
// import style from "./Chatmessage.module.css";

// export default function ChatMessage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [msgs, setmsg] = useState([]);
//   const [chatUser, setChatUser] = useState(null);
//   const endRef = useRef(null);
//   const { chat_id } = useChat();

//   // Scroll to latest message
//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [msgs]);

//   // Fetch chat user info
//   useEffect(() => {
//     const fetchChatUser = async () => {
//       if (!chat_id) return;

//       const chatDoc = await getDoc(doc(db, "chats", chat_id));
//       const chatData = chatDoc.data();
//       if (!chatData?.users) return;

//       const otherUserUid = chatData.users.find(
//         (uid) => uid !== auth.currentUser?.uid
//       );

//       if (otherUserUid) {
//         const userDoc = await getDoc(doc(db, "users", otherUserUid));
//         if (userDoc.exists()) {
//           setChatUser(userDoc.data());
//         }
//       }
//     };

//     fetchChatUser();
//   }, [chat_id]);

//   // Fetch messages from Firebase
//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (snapshot) => {
//         const final = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//           documentId: doc.id,
//         }));
//         setmsg(final);
//       }
//     );
//     return () => unsub();
//   }, [chat_id]);

//   // Send message to Firebase
//   const handleSend = async () => {
//     if (text.trim() === "") return;

//     try {
//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });
//       setText("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   // Delete a message
//   const handleDeleteMessage = async (messageId) => {
//     if (!auth.currentUser) return;

//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to retrieve this message!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "Cancel",
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, `chats/${chat_id}/message/${messageId}`));
//         Swal.fire("Deleted", "The message was deleted successfully", "success");
//       } catch (err) {
//         console.error("Error deleting message:", err);
//         Swal.fire(
//           "Error!",
//           "There was an issue deleting the message.",
//           "error"
//         );
//       }
//     }
//   };

//   return (
//     <div className="d-flex flex-column" id={style.chat}>
//       {/* Header */}
//       <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//         <div
//           className="user d-flex align-items-center gap-2"
//           style={{ cursor: "pointer" }}
//         >
//           <img
//             src={chatUser?.avatar || "/src/assets/avatar.png"}
//             id={style.avatar}
//             alt="avatar"
//           />
//           <p className="m-0" id={style.info}>
//             {chatUser?.username || "User"}
//           </p>
//         </div>
//       </div>

//       {/* Messages */}
//       <div className="d-flex flex-column gap-2" id={style.center}>
//         {msgs.map((msg) => (
//           <div
//             key={msg.documentId}
//             className={`massge ${
//               msg.sender === auth.currentUser?.uid ? "own" : ""
//             }`}
//             id={
//               msg.sender === auth.currentUser?.uid
//                 ? style.massgeOwn
//                 : style.massge
//             }
//           >
//             {msg.sender !== auth.currentUser?.uid && (
//               <img src="/src/assets/avatar.png" alt="avatar" />
//             )}
//             <div
//               className="texts flex-grow-1 d-flex flex-column gap-2 position-relative"
//               id={
//                 msg.sender === auth.currentUser?.uid ? style.texts : style.recev
//               }
//             >
//               {msg.img && (
//                 <img
//                   src={msg.img}
//                   alt="message"
//                   style={{
//                     width: "100%",
//                     height: "300px",
//                     borderRadius: "10px",
//                     objectFit: "cover",
//                   }}
//                 />
//               )}
//               <p>{msg.text}</p>
//               <h6>
//                 {msg.datetime?.toDate
//                   ? new Date(msg.datetime.toDate()).toLocaleTimeString()
//                   : ""}
//               </h6>
//               {msg.sender === auth.currentUser?.uid && (

//                 <button
//                   onClick={() => handleDeleteMessage(msg.documentId)}
//                   className="btn btn-sm btn-danger position-absolute"
//                   style={{
//                     top: "0",
//                     right: "0",
//                     borderRadius: "50%",
//                     fontSize: "7px",
//                   }}
//                 >
//                   ✖
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//         <div ref={endRef}></div>
//       </div>

//       {/* Input Area */}
//       <div
//         className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//         id={style.bottom}
//       >
//         <div className="icons d-flex gap-2">
//           <img src="/src/assets/camera.png" id={style.camera} alt="camera" />
//         </div>
//         <input
//           id={style.input}
//           className="form-control"
//           type="text"
//           placeholder="Type a message..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <div className="emoji position-relative">
//           <img
//             src="/src/assets/emoji.png"
//             alt="emoji"
//             id={style.emojiIcon}
//             onClick={() => setOpen((prev) => !prev)}
//           />
//           {open && (
//             <div className="picker position-absolute" id={style.picker}>
//               <EmojiPicker onEmojiClick={handleEmoji} />
//             </div>
//           )}
//         </div>
//         <button
//           type="button"
//           className="btn btn-outline-info"
//           onClick={handleSend}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useRef, useState } from "react";
// import { useChat } from "../..";
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   addDoc,
//   serverTimestamp,
//   doc,
//   deleteDoc,
//   getDoc,
// } from "firebase/firestore";
// import { auth, db } from "../../firebase";
// import EmojiPicker from "emoji-picker-react";
// import Swal from "sweetalert2";
// import style from "./Chatmessage.module.css";

// export default function ChatMessage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [msgs, setmsg] = useState([]);
//   const [chatUser, setChatUser] = useState(null);
//   const endRef = useRef(null);
//   const { chat_id } = useChat();

//   // Scroll to latest message
//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [msgs]);

//   // Fetch chat user info
//   useEffect(() => {
//     const fetchChatUser = async () => {
//       if (!chat_id) return;

//       const chatDoc = await getDoc(doc(db, "chats", chat_id));
//       const chatData = chatDoc.data();
//       if (!chatData?.users) return;

//       const otherUserUid = chatData.users.find(
//         (uid) => uid !== auth.currentUser?.uid
//       );

//       if (otherUserUid) {
//         const userDoc = await getDoc(doc(db, "users", otherUserUid));
//         if (userDoc.exists()) {
//           setChatUser(userDoc.data());
//         }
//       }
//     };

//     fetchChatUser();
//   }, [chat_id]);

//   // Fetch messages from Firebase
//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (snapshot) => {
//         const final = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//           documentId: doc.id,
//         }));
//         setmsg(final);
//       }
//     );
//     return () => unsub();
//   }, [chat_id]);

//   // Send message to Firebase
//   const handleSend = async () => {
//     if (text.trim() === "") return;

//     try {
//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });
//       setText("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   // Delete a message
//   const handleDeleteMessage = async (messageId) => {
//     if (!auth.currentUser) return;

//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to retrieve this message!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "Cancel",
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, `chats/${chat_id}/message/${messageId}`));
//         Swal.fire("Deleted", "The message was deleted successfully", "success");
//       } catch (err) {
//         console.error("Error deleting message:", err);
//         Swal.fire(
//           "Error!",
//           "There was an issue deleting the message.",
//           "error"
//         );
//       }
//     }
//   };

//   return (
//     <div className="d-flex flex-column" id={style.chat}>
//       {/* Header */}
//       <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//         <div
//           className="user d-flex align-items-center gap-2"
//           style={{ cursor: "pointer" }}
//         >
//           <img
//             src={chatUser?.photoURL || "/src/assets/avatar.png"}
//             id={style.avatar}
//             alt="avatar"
//           />
//           <p className="m-0" id={style.info}>
//             {chatUser?.displayName || "User"}
//           </p>
//         </div>
//       </div>

//       {/* Messages */}
//       <div className="d-flex flex-column gap-2" id={style.center}>
//         {msgs.map((msg) => (
//           <div
//             key={msg.documentId}
//             className={`massge ${
//               msg.sender === auth.currentUser?.uid ? "own" : ""
//             }`}
//             id={
//               msg.sender === auth.currentUser?.uid
//                 ? style.massgeOwn
//                 : style.massge
//             }
//           >
//             {msg.sender !== auth.currentUser?.uid && (
//               <img
//                 src={chatUser?.photoURL || "/src/assets/avatar.png"}
//                 alt="avatar"
//               />
//             )}
//             <div
//               className="texts flex-grow-1 d-flex flex-column gap-2 position-relative"
//               id={
//                 msg.sender === auth.currentUser?.uid ? style.texts : style.recev
//               }
//             >
//               {msg.img && (
//                 <img
//                   src={msg.img}
//                   alt="message"
//                   style={{
//                     width: "100%",
//                     height: "300px",
//                     borderRadius: "10px",
//                     objectFit: "cover",
//                   }}
//                 />
//               )}
//               <p>{msg.text}</p>
//               <h6>
//                 {msg.datetime?.toDate
//                   ? new Date(msg.datetime.toDate()).toLocaleTimeString()
//                   : ""}
//               </h6>
//               {msg.sender === auth.currentUser?.uid && (
//                 <button
//                   onClick={() => handleDeleteMessage(msg.documentId)}
//                   className="btn btn-sm btn-danger position-absolute"
//                   style={{
//                     top: "0",
//                     right: "0",
//                     borderRadius: "50%",
//                     fontSize: "7px",
//                   }}
//                 >
//                   ✖
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//         <div ref={endRef}></div>
//       </div>

//       {/* Input Area */}
//       <div
//         className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//         id={style.bottom}
//       >
//         <div className="icons d-flex gap-2">
//           <img src="/src/assets/camera.png" id={style.camera} alt="camera" />
//         </div>
//         <input
//           id={style.input}
//           className="form-control"
//           type="text"
//           placeholder="Type a message..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <div className="emoji position-relative">
//           <img
//             src="/src/assets/emoji.png"
//             alt="emoji"
//             id={style.emojiIcon}
//             onClick={() => setOpen((prev) => !prev)}
//           />
//           {open && (
//             <div className="picker position-absolute" id={style.picker}>
//               <EmojiPicker onEmojiClick={handleEmoji} />
//             </div>
//           )}
//         </div>
//         <button
//           type="button"
//           className="btn btn-outline-info"
//           onClick={handleSend}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }
// kd,,,,,,,
// import React, { useEffect, useRef, useState } from "react";
// import { useChat } from "../..";
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   addDoc,
//   serverTimestamp,
//   doc,
//   deleteDoc,
//   getDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { auth, db } from "../../firebase";
// import EmojiPicker from "emoji-picker-react";
// import Swal from "sweetalert2";
// import style from "./Chatmessage.module.css";

// export default function ChatMessage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [msgs, setmsg] = useState([]);
//   const [chatUser, setChatUser] = useState(null);
//   const [userStatus, setUserStatus] = useState({
//     isOnline: false,
//     lastSeen: null,
//   });
//   const endRef = useRef(null);
//   const { chat_id } = useChat();

//   // Scroll to latest message
//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [msgs]);

//   // Update user status in Firestore when they connect or disconnect
//   useEffect(() => {
//     const updateStatus = async () => {
//       const userRef = doc(db, "users", auth.currentUser.uid);
//       await updateDoc(userRef, {
//         isOnline: true, // Set to true when the user is online
//         lastSeen: null, // No lastSeen when user is online
//       });

//       return () => {
//         updateDoc(userRef, {
//           isOnline: false, // Set to false when the user goes offline
//           lastSeen: serverTimestamp(), // Set lastSeen to current timestamp
//         });
//       };
//     };

//     updateStatus();

//     return () => {
//       // When component unmounts, update user to offline status
//       const userRef = doc(db, "users", auth.currentUser.uid);
//       updateDoc(userRef, {
//         isOnline: false,
//         lastSeen: serverTimestamp(),
//       });
//     };
//   }, []);

//   // Fetch chat user info and their status (Online/Offline)
//   useEffect(() => {
//     const fetchChatUser = async () => {
//       if (!chat_id) return;

//       const chatDoc = await getDoc(doc(db, "chats", chat_id));
//       const chatData = chatDoc.data();
//       if (!chatData?.users) return;

//       const otherUserUid = chatData.users.find(
//         (uid) => uid !== auth.currentUser?.uid
//       );

//       if (otherUserUid) {
//         const userDoc = await getDoc(doc(db, "users", otherUserUid));
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           setChatUser(userData);

//           // Set user online status and last seen
//           setUserStatus({
//             isOnline: userData.isOnline,
//             lastSeen: userData.lastSeen?.toDate(),
//           });
//         }
//       }
//     };

//     fetchChatUser();
//   }, [chat_id]);

//   // Fetch messages from Firebase
//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (snapshot) => {
//         const final = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//           documentId: doc.id,
//         }));
//         setmsg(final);
//       }
//     );
//     return () => unsub();
//   }, [chat_id]);

//   // Send message to Firebase
//   const handleSend = async () => {
//     if (text.trim() === "") return;

//     try {
//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });
//       setText("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   // Delete a message
//   const handleDeleteMessage = async (messageId) => {
//     if (!auth.currentUser) return;

//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to retrieve this message!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "Cancel",
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, `chats/${chat_id}/message/${messageId}`));
//         Swal.fire("Deleted", "The message was deleted successfully", "success");
//       } catch (err) {
//         console.error("Error deleting message:", err);
//         Swal.fire(
//           "Error!",
//           "There was an issue deleting the message.",
//           "error"
//         );
//       }
//     }
//   };

//   return (
//     <div className="d-flex flex-column" id={style.chat}>
//       {/* Header */}
//       <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//         <div
//           className="user d-flex align-items-center gap-2"
//           style={{ cursor: "pointer" }}
//         >
//           <img
//             src={chatUser?.photoURL || "/src/assets/avatar.png"}
//             id={style.avatar}
//             alt="avatar"
//           />
//           <p className="m-0" id={style.info}>
//             {chatUser?.displayName || "User"}
//           </p>
//           <div className="status">
//             {userStatus.isOnline ? (
//               <span className="text-success">Online</span>
//             ) : (
//               <span className="text-muted">
//                 Last seen: {new Date(userStatus.lastSeen).toLocaleString()}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Messages */}
//       <div className="d-flex flex-column gap-2" id={style.center}>
//         {msgs.map((msg) => (
//           <div
//             key={msg.documentId}
//             className={`massge ${
//               msg.sender === auth.currentUser?.uid ? "own" : ""
//             }`}
//             id={
//               msg.sender === auth.currentUser?.uid
//                 ? style.massgeOwn
//                 : style.massge
//             }
//           >
//             {msg.sender !== auth.currentUser?.uid && (
//               <img
//                 src={chatUser?.photoURL || "/src/assets/avatar.png"}
//                 alt="avatar"
//               />
//             )}
//             <div
//               className="texts flex-grow-1 d-flex flex-column gap-2 position-relative"
//               id={
//                 msg.sender === auth.currentUser?.uid ? style.texts : style.recev
//               }
//             >
//               {msg.img && (
//                 <img
//                   src={msg.img}
//                   alt="message"
//                   style={{
//                     width: "100%",
//                     height: "300px",
//                     borderRadius: "10px",
//                     objectFit: "cover",
//                   }}
//                 />
//               )}
//               <p>{msg.text}</p>
//               <h6>
//                 {msg.datetime?.toDate
//                   ? new Date(msg.datetime.toDate()).toLocaleTimeString()
//                   : ""}
//               </h6>
//               {msg.sender === auth.currentUser?.uid && (
//                 <button
//                   onClick={() => handleDeleteMessage(msg.documentId)}
//                   className="btn btn-sm btn-danger position-absolute"
//                   style={{
//                     top: "0",
//                     right: "0",
//                     borderRadius: "50%",
//                     fontSize: "7px",
//                   }}
//                 >
//                   ✖
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//         <div ref={endRef}></div>
//       </div>

//       {/* Input Area */}
//       <div
//         className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//         id={style.bottom}
//       >
//         <div className="icons d-flex gap-2">
//           <img src="/src/assets/camera.png" id={style.camera} alt="camera" />
//         </div>
//         <input
//           id={style.input}
//           className="form-control"
//           type="text"
//           placeholder="Type a message..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <div className="emoji position-relative">
//           <img
//             src="/src/assets/emoji.png"
//             alt="emoji"
//             id={style.emojiIcon}
//             onClick={() => setOpen((prev) => !prev)}
//           />
//           {open && (
//             <div className="picker position-absolute" id={style.picker}>
//               <EmojiPicker onEmojiClick={handleEmoji} />
//             </div>
//           )}
//         </div>
//         <button
//           type="button"
//           className="btn btn-outline-info"
//           onClick={handleSend}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }
// الاخير شغال
// import React, { useEffect, useRef, useState } from "react";
// import { useChat } from "../..";
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   addDoc,
//   serverTimestamp,
//   doc,
//   deleteDoc,
//   getDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { auth, db } from "../../firebase";
// import EmojiPicker from "emoji-picker-react";
// import Swal from "sweetalert2";
// import style from "./Chatmessage.module.css";

// export default function ChatMessage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [msgs, setmsg] = useState([]);
//   const [chatUser, setChatUser] = useState(null);
//   const [userStatus, setUserStatus] = useState({
//     isOnline: false,
//     lastSeen: null,
//   });
//   const endRef = useRef(null);
//   const { chat_id } = useChat();

//   // ✅ Emoji handler
//   const handleEmoji = (emojiData) => {
//     setText((prev) => prev + emojiData.emoji);
//   };

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [msgs]);

//   useEffect(() => {
//     const updateStatus = async () => {
//       const userRef = doc(db, "users", auth.currentUser.uid);
//       await updateDoc(userRef, {
//         isOnline: true,
//         lastSeen: null,
//       });

//       return () => {
//         updateDoc(userRef, {
//           isOnline: false,
//           lastSeen: serverTimestamp(),
//         });
//       };
//     };

//     updateStatus();

//     return () => {
//       const userRef = doc(db, "users", auth.currentUser.uid);
//       updateDoc(userRef, {
//         isOnline: false,
//         lastSeen: serverTimestamp(),
//       });
//     };
//   }, []);

//   useEffect(() => {
//     const fetchChatUser = async () => {
//       if (!chat_id) return;

//       const chatDoc = await getDoc(doc(db, "chats", chat_id));
//       const chatData = chatDoc.data();
//       if (!chatData?.users) return;

//       const otherUserUid = chatData.users.find(
//         (uid) => uid !== auth.currentUser?.uid
//       );

//       if (otherUserUid) {
//         const userDoc = await getDoc(doc(db, "users", otherUserUid));
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           setChatUser(userData);
//           setUserStatus({
//             isOnline: userData.isOnline,
//             lastSeen: userData.lastSeen?.toDate(),
//           });
//         }
//       }
//     };

//     fetchChatUser();
//   }, [chat_id]);

//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (snapshot) => {
//         const final = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//           documentId: doc.id,
//         }));
//         setmsg(final);
//       }
//     );
//     return () => unsub();
//   }, [chat_id]);

//   const handleSend = async () => {
//     if (text.trim() === "") return;

//     try {
//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });
//       setText("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   const handleDeleteMessage = async (messageId) => {
//     if (!auth.currentUser) return;

//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to retrieve this message!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "Cancel",
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, `chats/${chat_id}/message/${messageId}`));
//         Swal.fire("Deleted", "The message was deleted successfully", "success");
//       } catch (err) {
//         console.error("Error deleting message:", err);
//         Swal.fire(
//           "Error!",
//           "There was an issue deleting the message.",
//           "error"
//         );
//       }
//     }
//   };

//   return (
//     <div className="d-flex flex-column" id={style.chat}>
//       {/* Header */}
//       <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//         <div
//           className="user d-flex align-items-center gap-2"
//           style={{ cursor: "pointer" }}
//         >
//           <img
//             src={chatUser?.photoURL || "/src/assets/avatar.png"}
//             id={style.avatar}
//             alt="avatar"
//           />
//           <p className="m-0" id={style.info}>
//             {chatUser?.displayName || "User"}
//           </p>
//           <div className="status">
//             {userStatus.isOnline ? (
//               <span className="text-success">Online</span>
//             ) : (
//               <span className="text-muted">
//                 Last seen: {new Date(userStatus.lastSeen).toLocaleString()}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Messages */}
//       <div className="d-flex flex-column gap-2" id={style.center}>
//         {msgs.map((msg) => (
//           <div
//             key={msg.documentId}
//             className={`massge ${
//               msg.sender === auth.currentUser?.uid ? "own" : ""
//             }`}
//             id={
//               msg.sender === auth.currentUser?.uid
//                 ? style.massgeOwn
//                 : style.massge
//             }
//           >
//             {msg.sender !== auth.currentUser?.uid && (
//               <img
//                 src={chatUser?.photoURL || "/src/assets/avatar.png"}
//                 alt="avatar"
//               />
//             )}
//             <div
//               className="texts flex-grow-1 d-flex flex-column gap-2 position-relative"
//               id={
//                 msg.sender === auth.currentUser?.uid ? style.texts : style.recev
//               }
//             >
//               {msg.img && (
//                 <img
//                   src={msg.img}
//                   alt="message"
//                   style={{
//                     width: "100%",
//                     height: "300px",
//                     borderRadius: "10px",
//                     objectFit: "cover",
//                   }}
//                 />
//               )}
//               <p>{msg.text}</p>
//               <h6>
//                 {msg.datetime?.toDate
//                   ? new Date(msg.datetime.toDate()).toLocaleTimeString()
//                   : ""}
//               </h6>
//               {msg.sender === auth.currentUser?.uid && (
//                 <button
//                   onClick={() => handleDeleteMessage(msg.documentId)}
//                   className="btn btn-sm btn-danger position-absolute"
//                   style={{
//                     top: "0",
//                     right: "0",
//                     borderRadius: "50%",
//                     fontSize: "7px",
//                   }}
//                 >
//                   ✖
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//         <div ref={endRef}></div>
//       </div>

//       {/* Input Area */}
//       <div
//         className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//         id={style.bottom}
//       >
//         <div className="icons d-flex gap-2">
//           <img src="/src/assets/camera.png" id={style.camera} alt="camera" />
//         </div>
//         <input
//           id={style.input}
//           className="form-control"
//           type="text"
//           placeholder="Type a message..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//         <div className="emoji position-relative">
//           <img
//             src="/src/assets/emoji.png"
//             alt="emoji"
//             id={style.emojiIcon}
//             onClick={() => setOpen((prev) => !prev)}
//             style={{ cursor: "pointer" }}
//           />
//           {open && (
//             <div
//               className="picker position-absolute"
//               id={style.picker}
//               style={{ bottom: "50px", right: "0", zIndex: 10 }}
//             >
//               <EmojiPicker onEmojiClick={handleEmoji} />
//             </div>
//           )}
//         </div>
//         <button
//           type="button"
//           className="btn btn-outline-info"
//           onClick={handleSend}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }
// شفال
// import React, { useEffect, useRef, useState } from "react";
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   addDoc,
//   serverTimestamp,
//   doc,
//   deleteDoc,
//   getDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { auth, db } from "../../firebase";
// import { useChat } from "../..";
// import EmojiPicker from "emoji-picker-react";
// import Swal from "sweetalert2";
// import style from "./Chatmessage.module.css";
// import "../details/Details";
// // import OffcanvasDetails from "../OffcanvasDetails"; // استدعاء مكون التفاصيل

// export default function ChatMessage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [msgs, setmsg] = useState([]);
//   const [chatUser, setChatUser] = useState(null);
//   const [userStatus, setUserStatus] = useState({
//     isOnline: false,
//     lastSeen: null,
//   });
//   const endRef = useRef(null);
//   const { chat_id } = useChat();

//   const handleEmoji = (emojiData) => {
//     setText((prev) => prev + emojiData.emoji);
//   };

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [msgs]);

//   useEffect(() => {
//     const userRef = doc(db, "users", auth.currentUser.uid);
//     updateDoc(userRef, {
//       isOnline: true,
//       lastSeen: null,
//     });

//     return () => {
//       updateDoc(userRef, {
//         isOnline: false,
//         lastSeen: serverTimestamp(),
//       });
//     };
//   }, []);

//   useEffect(() => {
//     const fetchChatUser = async () => {
//       if (!chat_id) return;

//       const chatDoc = await getDoc(doc(db, "chats", chat_id));
//       const chatData = chatDoc.data();
//       if (!chatData?.users) return;

//       const otherUserUid = chatData.users.find(
//         (uid) => uid !== auth.currentUser?.uid
//       );

//       if (otherUserUid) {
//         const userDoc = await getDoc(doc(db, "users", otherUserUid));
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           setChatUser(userData);
//           setUserStatus({
//             isOnline: userData.isOnline,
//             lastSeen: userData.lastSeen?.toDate(),
//           });
//         }
//       }
//     };

//     fetchChatUser();
//   }, [chat_id]);

//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (snapshot) => {
//         const final = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//           documentId: doc.id,
//         }));
//         setmsg(final);
//       }
//     );
//     return () => unsub();
//   }, [chat_id]);

//   const handleSend = async () => {
//     if (text.trim() === "") return;

//     try {
//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });
//       setText("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   const handleDeleteMessage = async (messageId) => {
//     if (!auth.currentUser) return;

//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to retrieve this message!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "Cancel",
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, `chats/${chat_id}/message/${messageId}`));
//         Swal.fire("Deleted", "The message was deleted successfully", "success");
//       } catch (err) {
//         console.error("Error deleting message:", err);
//         Swal.fire(
//           "Error!",
//           "There was an issue deleting the message.",
//           "error"
//         );
//       }
//     }
//   };

//   return (
//     <>
//       <div className="d-flex flex-column" id={style.chat}>
//         {/* Header */}
//         <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//           <div
//             className="user d-flex align-items-center gap-2"
//             style={{ cursor: "pointer" }}
//             data-bs-toggle="offcanvas"
//             data-bs-target="#userDetailsCanvas"
//           >
//             <img
//               src={chatUser?.photoURL || "/src/assets/avatar.png"}
//               id={style.avatar}
//               alt="avatar"
//             />
//             <p className="m-0" id={style.info}>
//               {chatUser?.displayName || "User"}
//             </p>
//             <div className="status">
//               {userStatus.isOnline ? (
//                 <span className="text-success">Online</span>
//               ) : (
//                 <span className="text-muted">
//                   Last seen:{" "}
//                   {userStatus.lastSeen &&
//                     new Date(userStatus.lastSeen).toLocaleString()}
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Messages */}
//         <div className="d-flex flex-column gap-2" id={style.center}>
//           {msgs.map((msg) => (
//             <div
//               key={msg.documentId}
//               className={`massge ${
//                 msg.sender === auth.currentUser?.uid ? "own" : ""
//               }`}
//               id={
//                 msg.sender === auth.currentUser?.uid
//                   ? style.massgeOwn
//                   : style.massge
//               }
//             >
//               {msg.sender !== auth.currentUser?.uid && (
//                 <img
//                   src={chatUser?.photoURL || "/src/assets/avatar.png"}
//                   alt="avatar"
//                 />
//               )}
//               <div
//                 className="texts flex-grow-1 d-flex flex-column gap-2 position-relative"
//                 id={
//                   msg.sender === auth.currentUser?.uid
//                     ? style.texts
//                     : style.recev
//                 }
//               >
//                 {msg.img && (
//                   <img
//                     src={msg.img}
//                     alt="message"
//                     style={{
//                       width: "100%",
//                       height: "300px",
//                       borderRadius: "10px",
//                       objectFit: "cover",
//                     }}
//                   />
//                 )}
//                 <p>{msg.text}</p>
//                 <h6>
//                   {msg.datetime?.toDate
//                     ? new Date(msg.datetime.toDate()).toLocaleTimeString()
//                     : ""}
//                 </h6>
//                 {msg.sender === auth.currentUser?.uid && (
//                   <button
//                     onClick={() => handleDeleteMessage(msg.documentId)}
//                     className="btn btn-sm btn-danger position-absolute"
//                     style={{
//                       top: "0",
//                       right: "0",
//                       borderRadius: "50%",
//                       fontSize: "7px",
//                     }}
//                   >
//                     ✖
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//           <div ref={endRef}></div>
//         </div>

//         {/* Input Area */}
//         <div
//           className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//           id={style.bottom}
//         >
//           <div className="icons d-flex gap-2">
//             <img src="/src/assets/camera.png" id={style.camera} alt="camera" />
//           </div>
//           <input
//             id={style.input}
//             className="form-control"
//             type="text"
//             placeholder="Type a message..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//           <div className="emoji position-relative">
//             <img
//               src="/src/assets/emoji.png"
//               alt="emoji"
//               id={style.emojiIcon}
//               onClick={() => setOpen((prev) => !prev)}
//               style={{ cursor: "pointer" }}
//             />
//             {open && (
//               <div
//                 className="picker position-absolute"
//                 id={style.picker}
//                 style={{ bottom: "50px", right: "0", zIndex: 10 }}
//               >
//                 <EmojiPicker onEmojiClick={handleEmoji} />
//               </div>
//             )}
//           </div>
//           <button
//             type="button"
//             className="btn btn-outline-info"
//             onClick={handleSend}
//           >
//             Send
//           </button>
//         </div>
//       </div>

//       {/* 👇 الأوف كانفس تحت الكومبوننت وبنبعتله بيانات المستخدم */}
//       <details user={chatUser} />
//     </>
//   );
// }
// import React, { useEffect, useRef, useState } from "react";
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   addDoc,
//   serverTimestamp,
//   doc,
//   deleteDoc,
//   getDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { auth, db } from "../../firebase";
// import { useChat } from "../..";
// import EmojiPicker from "emoji-picker-react";
// import Swal from "sweetalert2";
// import style from "./Chatmessage.module.css";
// import "../details/Details";
// import { FaCamera, FaSmile } from "react-icons/fa";
// import Details from "../details/Details";
// // import OffcanvasDetails from "../OffcanvasDetails"; // استدعاء مكون التفاصيل

// export default function ChatMessage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [msgs, setmsg] = useState([]);
//   const [sharedPhotos, setSharedPhotos] = useState([]);

//   const [chatUser, setChatUser] = useState(null);
//   const fileInputRef = useRef(null);
//   const [userStatus, setUserStatus] = useState({
//     isOnline: false,
//     lastSeen: null,
//   });
//   const endRef = useRef(null);
//   const { chat_id } = useChat();
//   const [uploading, setUploading] = useState(false);

//   const handleEmoji = (emojiData) => {
//     setText((prev) => prev + emojiData.emoji);
//   };

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [msgs]);

//   useEffect(() => {
//     if (!auth.currentUser) return; // التأكد من أن المستخدم موجود

//     const userRef = doc(db, "users", auth.currentUser.uid);
//     updateDoc(userRef, {
//       isOnline: true,
//       lastSeen: null,
//     });

//     return () => {
//       updateDoc(userRef, {
//         isOnline: false,
//         lastSeen: serverTimestamp(),
//       });
//     };
//   }, []);

//   useEffect(() => {
//     const fetchChatUser = async () => {
//       if (!chat_id) return;

//       const chatDoc = await getDoc(doc(db, "chats", chat_id));
//       const chatData = chatDoc.data();
//       if (!chatData?.users) return;

//       const otherUserUid = chatData.users.find(
//         (uid) => uid !== auth.currentUser?.uid // استخدام optional chaining
//       );

//       if (otherUserUid) {
//         const userDoc = await getDoc(doc(db, "users", otherUserUid));
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           setChatUser(userData);
//           setUserStatus({
//             isOnline: userData.isOnline,
//             lastSeen: userData.lastSeen?.toDate(),
//           });
//         }
//       }
//     };

//     fetchChatUser();
//   }, [chat_id]);

//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (snapshot) => {
//         const final = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//           documentId: doc.id,
//         }));
//         setmsg(final);
//         const photos = final.filter((msg) => msg.img);
//         setSharedPhotos(photos);
//       }
//     );
//     return () => unsub();
//   }, [chat_id]);

//   const handleSend = async () => {
//     if (text.trim() === "") return;

//     try {
//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text,
//         sender: auth.currentUser?.uid, // تأكد من أن المستخدم موجود
//         datetime: serverTimestamp(),
//       });
//       setText("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   const handleDeleteMessage = async (messageId) => {
//     if (!auth.currentUser) return; // التأكد من أن المستخدم موجود

//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to retrieve this message!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "Cancel",
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, `chats/${chat_id}/message/${messageId}`));
//         Swal.fire("Deleted", "The message was deleted successfully", "success");
//       } catch (err) {
//         console.error("Error deleting message:", err);
//         Swal.fire(
//           "Error!",
//           "There was an issue deleting the message.",
//           "error"
//         );
//       }
//     }
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "chatApp");

//     try {
//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dec3jkvqs/image/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       const imageUrl = data.secure_url;

//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text: text.trim(), // ممكن تبقى فاضية
//         img: imageUrl,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });

//       setText(""); // نفرّغ حقل النص بعد الإرسال
//     } catch (error) {
//       console.error("Image upload error:", error);
//     }
//   };

//   return (
//     <>
//       <div className="d-flex flex-column" id={style.chat}>
//         {/* Header */}
//         <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//           <div
//             className="user d-flex align-items-center gap-2"
//             style={{ cursor: "pointer" }}
//             data-bs-toggle="offcanvas"
//             data-bs-target="#userDetailsCanvas"
//           >
//             <img
//               src={chatUser?.photoURL || "/src/assets/avatar.png"}
//               id={style.avatar}
//               alt="avatar"
//             />
//             <p className="m-0" id={style.info}>
//               {chatUser?.displayName || "User"}
//             </p>
//             <div className="status">
//               {userStatus.isOnline ? (
//                 <span className="text-success">Online</span>
//               ) : (
//                 <span className="text-muted">
//                   Last seen:{" "}
//                   {userStatus.lastSeen &&
//                     new Date(userStatus.lastSeen).toLocaleString()}
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Messages */}
//         <div className="d-flex flex-column gap-2" id={style.center}>
//           {msgs.map((msg) => (
//             <div
//               key={msg.documentId}
//               className={`massge ${
//                 msg.sender === auth.currentUser?.uid ? "own" : ""
//               }`}
//               id={
//                 msg.sender === auth.currentUser?.uid
//                   ? style.massgeOwn
//                   : style.massge
//               }
//             >
//               {msg.sender !== auth.currentUser?.uid && (
//                 <img
//                   src={chatUser?.photoURL || "/src/assets/avatar.png"}
//                   alt="avatar"
//                 />
//               )}
//               <div
//                 className="texts flex-grow-1 d-flex flex-column gap-2 position-relative"
//                 id={
//                   msg.sender === auth.currentUser?.uid
//                     ? style.texts
//                     : style.recev
//                 }
//               >
//                 {msg.img && (
//                   <img
//                     src={msg.img}
//                     alt="message"
//                     style={{
//                       width: "50%",
//                       height: "150px",
//                       borderRadius: "10px",
//                       objectFit: "cover",
//                     }}
//                   />
//                 )}
//                 <p>{msg.text}</p>
//                 <h6>
//                   {msg.datetime?.toDate
//                     ? new Date(msg.datetime.toDate()).toLocaleTimeString()
//                     : ""}
//                 </h6>
//                 {msg.sender === auth.currentUser?.uid && (
//                   <button
//                     onClick={() => handleDeleteMessage(msg.documentId)}
//                     className="btn btn-sm btn-danger position-absolute"
//                     style={{
//                       top: "0",
//                       right: "0",
//                       borderRadius: "50%",
//                       fontSize: "7px",
//                     }}
//                   >
//                     ✖
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//           <div ref={endRef}></div>
//         </div>

//         {/* Input Area */}
//         <div
//           className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//           id={style.bottom}
//         >
//           <div className="icons d-flex gap-2 align-items-center">
//             <FaCamera
//               size={24}
//               style={{ cursor: "pointer", color: "#0dcaf0" }}
//               title="Upload Image"
//               onClick={() => fileInputRef.current.click()} // تفتح الـ input لما نضغط الكاميرا
//             />
//             <input
//               type="file"
//               accept="image/*"
//               ref={fileInputRef}
//               onChange={handleImageUpload}
//               style={{ display: "none" }}
//             />
//           </div>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Type a message..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             style={{ flexGrow: 1 }}
//           />
//           <div className="emoji position-relative">
//             <FaSmile
//               size={24}
//               onClick={() => setOpen((prev) => !prev)}
//               style={{ cursor: "pointer", color: "#ffc107" }}
//               title="Emoji Picker"
//             />
//             {open && (
//               <div
//                 className="picker position-absolute"
//                 id={style.picker}
//                 style={{ bottom: "50px", right: "0", zIndex: 10 }}
//               >
//                 <EmojiPicker onEmojiClick={handleEmoji} />
//               </div>
//             )}
//             {/* </div> */}
//             {/* )} */}
//           </div>
//           <button
//             type="button"
//             className="btn btn-outline-info"
//             onClick={handleSend}
//           >
//             Send
//           </button>
//         </div>
//       </div>

//       {/* 👇 الأوف كانفس تحت الكومبوننت وبنبعتله بيانات المستخدم */}
//       <Details user={chatUser} sharedPhotos={sharedPhotos} />
//     </>
//   );
// }

// جديد
// import React, { useEffect, useRef, useState } from "react";
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   addDoc,
//   serverTimestamp,
//   doc,
//   deleteDoc,
//   getDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { auth, db } from "../../firebase";
// import { useChat } from "../..";
// import EmojiPicker from "emoji-picker-react";
// import Swal from "sweetalert2";
// import style from "./Chatmessage.module.css";
// import "../details/Details";
// import { FaCamera, FaSmile } from "react-icons/fa";
// import Details from "../details/Details";

// export default function ChatMessage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [msgs, setmsg] = useState([]);
//   const [sharedPhotos, setSharedPhotos] = useState([]);
//   const [chatUser, setChatUser] = useState(null);
//   const fileInputRef = useRef(null);
//   const [userStatus, setUserStatus] = useState({
//     isOnline: false,
//     lastSeen: null,
//   });
//   const [uploading, setUploading] = useState(false); // ✅ حالة التحميل
//   const endRef = useRef(null);
//   const { chat_id } = useChat();

//   const handleEmoji = (emojiData) => {
//     setText((prev) => prev + emojiData.emoji);
//   };

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [msgs]);

//   useEffect(() => {
//     if (!auth.currentUser) return;

//     const userRef = doc(db, "users", auth.currentUser.uid);
//     updateDoc(userRef, {
//       isOnline: true,
//       lastSeen: null,
//     });

//     return () => {
//       updateDoc(userRef, {
//         isOnline: false,
//         lastSeen: serverTimestamp(),
//       });
//     };
//   }, []);

//   useEffect(() => {
//     const fetchChatUser = async () => {
//       if (!chat_id) return;

//       const chatDoc = await getDoc(doc(db, "chats", chat_id));
//       const chatData = chatDoc.data();
//       if (!chatData?.users) return;

//       const otherUserUid = chatData.users.find(
//         (uid) => uid !== auth.currentUser?.uid
//       );

//       if (otherUserUid) {
//         const userDoc = await getDoc(doc(db, "users", otherUserUid));
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           setChatUser(userData);
//           setUserStatus({
//             isOnline: userData.isOnline,
//             lastSeen: userData.lastSeen?.toDate(),
//           });
//         }
//       }
//     };

//     fetchChatUser();
//   }, [chat_id]);

//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (snapshot) => {
//         const final = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//           documentId: doc.id,
//         }));
//         setmsg(final);
//         const photos = final.filter((msg) => msg.img);
//         setSharedPhotos(photos);
//       }
//     );
//     return () => unsub();
//   }, [chat_id]);

//   const handleSend = async () => {
//     if (text.trim() === "") return;

//     try {
//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });
//       setText("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   const handleDeleteMessage = async (messageId) => {
//     if (!auth.currentUser) return;

//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to retrieve this message!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "Cancel",
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, `chats/${chat_id}/message/${messageId}`));
//         Swal.fire("Deleted", "The message was deleted successfully", "success");
//       } catch (err) {
//         console.error("Error deleting message:", err);
//         Swal.fire(
//           "Error!",
//           "There was an issue deleting the message.",
//           "error"
//         );
//       }
//     }
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true); // ✅ شغل التحميل

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "chatApp");

//     try {
//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dec3jkvqs/image/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       const imageUrl = data.secure_url;

//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text: text.trim(),
//         img: imageUrl,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });

//       setText("");
//     } catch (error) {
//       console.error("Image upload error:", error);
//     } finally {
//       setUploading(false); // ✅ وقف التحميل
//     }
//   };

//   return (
//     <>
//       <div className="d-flex flex-column" id={style.chat}>
//         {/* Header */}
//         <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//           <div
//             className="user d-flex align-items-center gap-2"
//             style={{ cursor: "pointer" }}
//             data-bs-toggle="offcanvas"
//             data-bs-target="#userDetailsCanvas"
//           >
//             <img
//               src={chatUser?.photoURL || "/src/assets/avatar.png"}
//               id={style.avatar}
//               alt="avatar"
//             />
//             <p className="m-0" id={style.info}>
//               {chatUser?.displayName || "User"}
//             </p>
//             <div className="status">
//               {userStatus.isOnline ? (
//                 <span className="text-success">Online</span>
//               ) : (
//                 <span className="text-muted">
//                   Last seen:{" "}
//                   {userStatus.lastSeen &&
//                     new Date(userStatus.lastSeen).toLocaleString()}
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Messages */}
//         <div className="d-flex flex-column gap-2" id={style.center}>
//           {msgs.map((msg) => (
//             <div
//               key={msg.documentId}
//               className={`massge ${
//                 msg.sender === auth.currentUser?.uid ? "own" : ""
//               }`}
//               id={
//                 msg.sender === auth.currentUser?.uid
//                   ? style.massgeOwn
//                   : style.massge
//               }
//             >
//               {msg.sender !== auth.currentUser?.uid && (
//                 <img
//                   src={chatUser?.photoURL || "/src/assets/avatar.png"}
//                   alt="avatar"
//                 />
//               )}
//               <div
//                 className="texts flex-grow-1 d-flex flex-column gap-2 position-relative"
//                 id={
//                   msg.sender === auth.currentUser?.uid
//                     ? style.texts
//                     : style.recev
//                 }
//               >
//                 {msg.img && (
//                   <img
//                     src={msg.img}
//                     alt="message"
//                     style={{
//                       width: "50%",
//                       height: "150px",
//                       borderRadius: "10px",
//                       objectFit: "cover",
//                     }}
//                   />
//                 )}
//                 <p>{msg.text}</p>
//                 <h6>
//                   {msg.datetime?.toDate
//                     ? new Date(msg.datetime.toDate()).toLocaleTimeString()
//                     : ""}
//                 </h6>
//                 {msg.sender === auth.currentUser?.uid && (
//                   <button
//                     onClick={() => handleDeleteMessage(msg.documentId)}
//                     className="btn btn-sm btn-danger position-absolute"
//                     style={{
//                       top: "0",
//                       right: "0",
//                       borderRadius: "50%",
//                       fontSize: "7px",
//                     }}
//                   >
//                     ✖
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}

//           {/* ✅ السبينر أثناء التحميل */}
//           {uploading && (
//             <div className="d-flex justify-content-center align-items-center p-2">
//               <div className="spinner-border text-info" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           )}

//           <div ref={endRef}></div>
//         </div>

//         {/* Input Area */}
//         <div
//           className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//           id={style.bottom}
//         >
//           <div className="icons d-flex gap-2 align-items-center">
//             <FaCamera
//               size={24}
//               style={{ cursor: "pointer", color: "#0dcaf0" }}
//               title="Upload Image"
//               onClick={() => fileInputRef.current.click()}
//             />
//             <input
//               type="file"
//               accept="image/*"
//               ref={fileInputRef}
//               onChange={handleImageUpload}
//               style={{ display: "none" }}
//             />
//           </div>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Type a message..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             style={{ flexGrow: 1 }}
//           />
//           <div className="emoji position-relative">
//             <FaSmile
//               size={24}
//               onClick={() => setOpen((prev) => !prev)}
//               style={{ cursor: "pointer", color: "#ffc107" }}
//               title="Emoji Picker"
//             />
//             {open && (
//               <div
//                 className="picker position-absolute"
//                 id={style.picker}
//                 style={{ bottom: "50px", right: "0", zIndex: 10 }}
//               >
//                 <EmojiPicker onEmojiClick={handleEmoji} />
//               </div>
//             )}
//           </div>
//           <button
//             type="button"
//             className="btn btn-outline-info"
//             onClick={handleSend}
//           >
//             Send
//           </button>
//         </div>
//       </div>

//       {/* أوف كانفاس تفاصيل المستخدم */}
//       <Details user={chatUser} sharedPhotos={sharedPhotos} />
//     </>
//   );
// }
// import React, { useEffect, useRef, useState } from "react";
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   addDoc,
//   serverTimestamp,
//   doc,
//   deleteDoc,
//   getDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { auth, db } from "../../firebase";
// import { useChat } from "../..";
// import EmojiPicker from "emoji-picker-react";
// import Swal from "sweetalert2";
// import style from "./Chatmessage.module.css";
// import "../details/Details";
// import { FaCamera, FaSmile } from "react-icons/fa";
// import Details from "../details/Details";

// export default function ChatMessage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [msgs, setmsg] = useState([]);
//   const [sharedPhotos, setSharedPhotos] = useState([]);
//   const [chatUser, setChatUser] = useState(null);
//   const fileInputRef = useRef(null);
//   const [userStatus, setUserStatus] = useState({
//     isOnline: false,
//     lastSeen: null,
//   });
//   const [uploading, setUploading] = useState(false);
//   const endRef = useRef(null);
//   const { chat_id } = useChat();
//   const [selectedImage, setSelectedImage] = useState(null); // ✅ مودال الصورة

//   const handleEmoji = (emojiData) => {
//     setText((prev) => prev + emojiData.emoji);
//   };

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [msgs]);

//   useEffect(() => {
//     if (!auth.currentUser) return;

//     const userRef = doc(db, "users", auth.currentUser.uid);
//     updateDoc(userRef, {
//       isOnline: true,
//       lastSeen: null,
//     });

//     return () => {
//       updateDoc(userRef, {
//         isOnline: false,
//         lastSeen: serverTimestamp(),
//       });
//     };
//   }, []);

//   useEffect(() => {
//     const fetchChatUser = async () => {
//       if (!chat_id) return;

//       const chatDoc = await getDoc(doc(db, "chats", chat_id));
//       const chatData = chatDoc.data();
//       if (!chatData?.users) return;

//       const otherUserUid = chatData.users.find(
//         (uid) => uid !== auth.currentUser?.uid
//       );

//       if (otherUserUid) {
//         const userDoc = await getDoc(doc(db, "users", otherUserUid));
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           setChatUser(userData);
//           setUserStatus({
//             isOnline: userData.isOnline,
//             lastSeen: userData.lastSeen?.toDate(),
//           });
//         }
//       }
//     };

//     fetchChatUser();
//   }, [chat_id]);

//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (snapshot) => {
//         const final = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//           documentId: doc.id,
//         }));
//         setmsg(final);
//         const photos = final.filter((msg) => msg.img);
//         setSharedPhotos(photos);
//       }
//     );
//     return () => unsub();
//   }, [chat_id]);

//   const handleSend = async () => {
//     if (text.trim() === "") return;

//     try {
//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });
//       setText("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   const handleDeleteMessage = async (messageId) => {
//     if (!auth.currentUser) return;

//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You will not be able to retrieve this message!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "Cancel",
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, `chats/${chat_id}/message/${messageId}`));
//         Swal.fire("Deleted", "The message was deleted successfully", "success");
//       } catch (err) {
//         console.error("Error deleting message:", err);
//         Swal.fire(
//           "Error!",
//           "There was an issue deleting the message.",
//           "error"
//         );
//       }
//     }
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "chatApp");

//     try {
//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dec3jkvqs/image/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       const imageUrl = data.secure_url;

//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text: text.trim(),
//         img: imageUrl,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });

//       setText("");
//     } catch (error) {
//       console.error("Image upload error:", error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <>
//       <div className="d-flex flex-column" id={style.chat}>
//         {/* Header */}
//         <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//           <div
//             className="user d-flex align-items-center gap-2"
//             style={{ cursor: "pointer" }}
//             data-bs-toggle="offcanvas"
//             data-bs-target="#userDetailsCanvas"
//           >
//             <img
//               src={chatUser?.photoURL || "/src/assets/avatar.png"}
//               id={style.avatar}
//               style={{ width: "50px", height: "50px", borderRadius: "50%" }}
//               alt="avatar"
//             />
//             <p className="m-0" id={style.info}>
//               {chatUser?.displayName || "User"}
//             </p>
//             <div className="status">
//               {userStatus.isOnline ? (
//                 <span className="text-success">Online</span>
//               ) : (
//                 <span className="text-muted">
//                   Last seen:{" "}
//                   {userStatus.lastSeen &&
//                     new Date(userStatus.lastSeen).toLocaleString()}
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Messages */}
//         <div className="d-flex flex-column gap-2" id={style.center}>
//           {msgs.map((msg) => (
//             <div
//               key={msg.documentId}
//               className={`massge ${
//                 msg.sender === auth.currentUser?.uid ? "own" : ""
//               }`}
//               id={
//                 msg.sender === auth.currentUser?.uid
//                   ? style.massgeOwn
//                   : style.massge
//               }
//             >
//               {msg.sender !== auth.currentUser?.uid && (
//                 <img
//                   src={chatUser?.photoURL || "/src/assets/avatar.png"}
//                   alt="avatar"
//                   style={{ width: "50px", height: "50px", borderRadius: "50%" }}
//                 />
//               )}
//               <div
//                 className="texts flex-grow-1 d-flex flex-column gap-2 position-relative"
//                 id={
//                   msg.sender === auth.currentUser?.uid
//                     ? style.texts
//                     : style.recev
//                 }
//               >
//                 {msg.img && (
//                   <img
//                     src={msg.img}
//                     alt="message"
//                     className={style.chatImage}
//                     onClick={() => setSelectedImage(msg.img)}
//                     style={{ cursor: "pointer" }}
//                   />
//                 )}
//                 <p>{msg.text}</p>
//                 <h6>
//                   {msg.datetime?.toDate
//                     ? new Date(msg.datetime.toDate()).toLocaleTimeString()
//                     : ""}
//                 </h6>
//                 {msg.sender === auth.currentUser?.uid && (
//                   <button
//                     onClick={() => handleDeleteMessage(msg.documentId)}
//                     className="btn btn-sm btn-danger position-absolute"
//                     style={{
//                       top: "0",
//                       right: "0",
//                       borderRadius: "50%",
//                       fontSize: "7px",
//                     }}
//                   >
//                     ✖
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}

//           {uploading && (
//             <div className="d-flex justify-content-center align-items-center p-2">
//               <div className="spinner-border text-info" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           )}

//           <div ref={endRef}></div>
//         </div>

//         {/* Input */}
//         <div
//           className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//           id={style.bottom}
//         >
//           <div className="icons d-flex gap-2 align-items-center">
//             <FaCamera
//               size={24}
//               style={{ cursor: "pointer", color: "#0dcaf0" }}
//               title="Upload Image"
//               onClick={() => fileInputRef.current.click()}
//             />
//             <input
//               type="file"
//               accept="image/*"
//               ref={fileInputRef}
//               onChange={handleImageUpload}
//               style={{ display: "none" }}
//             />
//           </div>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Type a message..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             style={{ flexGrow: 1 }}
//           />
//           <div className="emoji position-relative">
//             <FaSmile
//               size={24}
//               onClick={() => setOpen((prev) => !prev)}
//               style={{ cursor: "pointer", color: "#ffc107" }}
//               title="Emoji Picker"
//             />
//             {open && (
//               <div
//                 className="picker position-absolute"
//                 id={style.picker}
//                 style={{
//                   bottom: "60px",
//                   right: "10",
//                   zIndex: "1000",
//                   width: "300px",
//                   height: "300px",
//                   overflowY: "auto",
//                 }}
//               >
//                 <EmojiPicker
//                   onEmojiClick={handleEmoji}
//                   width={"100%"}
//                   height={"100%"}
//                 />
//               </div>
//             )}
//           </div>
//           <button
//             type="button"
//             className="btn btn-outline-info"
//             onClick={handleSend}
//           >
//             Send
//           </button>
//         </div>
//       </div>

//       {/* ✅ صورة بالحجم الكامل */}
//       {selectedImage && (
//         <div
//           className="modal fade show d-block"
//           tabIndex="-1"
//           style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="modal-dialog modal-dialog-centered modal-lg">
//             <div className="modal-content bg-transparent border-0 position-relative">
//               <button
//                 type="button"
//                 className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
//                 aria-label="Close"
//                 onClick={() => setSelectedImage(null)}
//               ></button>
//               <img
//                 src={selectedImage}
//                 alt="Full size"
//                 className="img-fluid rounded"
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       <Details user={chatUser} sharedPhotos={sharedPhotos} />
//     </>
//   );
// }
// import React, { useEffect, useRef, useState } from "react";
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   addDoc,
//   serverTimestamp,
//   doc,
//   deleteDoc,
//   getDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { auth, db } from "../../firebase";
// import { useChat } from "../..";
// import EmojiPicker from "emoji-picker-react";
// import Swal from "sweetalert2";
// import style from "./Chatmessage.module.css";
// import "../details/Details";
// import { FaCamera, FaSmile } from "react-icons/fa";
// import Details from "../details/Details";
// import { useTranslation } from "react-i18next";

// export default function ChatMessage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [msgs, setmsg] = useState([]);
//   const [sharedPhotos, setSharedPhotos] = useState([]);
//   const [chatUser, setChatUser] = useState(null);
//   const fileInputRef = useRef(null);
//   const [userStatus, setUserStatus] = useState({
//     isOnline: false,
//     lastSeen: null,
//   });
//   const [uploading, setUploading] = useState(false);
//   const endRef = useRef(null);
//   const { chat_id } = useChat();
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const { t } = useTranslation();

//   const handleEmoji = (emojiData) => {
//     setText((prev) => prev + emojiData.emoji);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [msgs]);

//   useEffect(() => {
//     if (!auth.currentUser) return;
//     const userRef = doc(db, "users", auth.currentUser.uid);
//     updateDoc(userRef, { isOnline: true, lastSeen: null });

//     return () => {
//       updateDoc(userRef, { isOnline: false, lastSeen: serverTimestamp() });
//     };
//   }, []);

//   useEffect(() => {
//     const fetchChatUser = async () => {
//       if (!chat_id) return;
//       const chatDoc = await getDoc(doc(db, "chats", chat_id));
//       const chatData = chatDoc.data();
//       if (!chatData?.users) return;

//       const otherUserUid = chatData.users.find(
//         (uid) => uid !== auth.currentUser?.uid
//       );

//       if (otherUserUid) {
//         const userDoc = await getDoc(doc(db, "users", otherUserUid));
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           setChatUser(userData);
//           setUserStatus({
//             isOnline: userData.isOnline,
//             lastSeen: userData.lastSeen?.toDate(),
//           });
//         }
//       }
//     };

//     fetchChatUser();
//   }, [chat_id]);

//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (snapshot) => {
//         const final = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//           documentId: doc.id,
//         }));
//         setmsg(final);
//         const photos = final.filter((msg) => msg.img);
//         setSharedPhotos(photos);
//       }
//     );
//     return () => unsub();
//   }, [chat_id]);

//   const handleSend = async () => {
//     if (text.trim() === "") return;

//     try {
//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });
//       setText("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   const handleDeleteMessage = async (messageId) => {
//     if (!auth.currentUser) return;

//     const result = await Swal.fire({
//       title: t("areYouSure"),
//       text: t("messageDeleteWarning"),
//       icon: t("warning"),
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: t("yesDelete"),
//       cancelButtonText: t("Cancel"),
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, `chats/${chat_id}/message/${messageId}`));
//         Swal.fire(t("deleted"), t("messageDeleted"), t("success"));
//       } catch (err) {
//         console.error("Error deleting message:", err);
//         Swal.fire(t("error"), t("messageDeleteError"), "error");
//       }
//     }
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "chatApp");

//     try {
//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dec3jkvqs/image/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       const imageUrl = data.secure_url;

//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text: text.trim(),
//         img: imageUrl,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });

//       setText("");
//     } catch (error) {
//       console.error("Image upload error:", error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <>
//       <div className="d-flex flex-column" id={style.chat}>
//         {/* Header */}
//         <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//           <div
//             className="user d-flex align-items-center gap-2"
//             style={{ cursor: "pointer" }}
//             data-bs-toggle="offcanvas"
//             data-bs-target="#userDetailsCanvas"
//           >
//             <img
//               src={chatUser?.photoURL || "/src/assets/avatar.png"}
//               id={style.avatar}
//               style={{ width: "50px", height: "50px", borderRadius: "50%" }}
//               alt="avatar"
//             />
//             <p className="m-0" id={style.info}>
//               {chatUser?.displayName || t("user")}
//             </p>
//             <div className="status">
//               {userStatus.isOnline ? (
//                 <span className="text-success">{t("online")}</span>
//               ) : (
//                 <span className="text-muted">
//                   {t("lastSeen")}{" "}
//                   {userStatus.lastSeen &&
//                     new Date(userStatus.lastSeen).toLocaleString()}
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Messages */}
//         <div className="d-flex flex-column gap-2" id={style.center}>
//           {msgs.map((msg) => (
//             <div
//               key={msg.documentId}
//               className={`massge ${
//                 msg.sender === auth.currentUser?.uid ? "own" : ""
//               }`}
//               id={
//                 msg.sender === auth.currentUser?.uid
//                   ? style.massgeOwn
//                   : style.massge
//               }
//             >
//               {msg.sender !== auth.currentUser?.uid && (
//                 <img
//                   src={chatUser?.photoURL || "/src/assets/avatar.png"}
//                   alt="avatar"
//                   style={{ width: "50px", height: "50px", borderRadius: "50%" }}
//                 />
//               )}
//               <div
//                 className="texts flex-grow-1 d-flex flex-column gap-2 position-relative"
//                 id={
//                   msg.sender === auth.currentUser?.uid
//                     ? style.texts
//                     : style.recev
//                 }
//               >
//                 {msg.img && (
//                   <img
//                     src={msg.img}
//                     alt="message"
//                     className={style.chatImage}
//                     onClick={() => setSelectedImage(msg.img)}
//                     style={{ cursor: "pointer" }}
//                   />
//                 )}
//                 <p>{msg.text}</p>
//                 <h6>
//                   {msg.datetime?.toDate
//                     ? new Date(msg.datetime.toDate()).toLocaleTimeString()
//                     : ""}
//                 </h6>
//                 {msg.sender === auth.currentUser?.uid && (
//                   <button
//                     onClick={() => handleDeleteMessage(msg.documentId)}
//                     className="btn btn-sm btn-danger position-absolute"
//                     style={{
//                       top: "0",
//                       right: "0",
//                       borderRadius: "50%",
//                       fontSize: "7px",
//                     }}
//                   >
//                     ✖
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//           {uploading && (
//             <div className="d-flex justify-content-center align-items-center p-2">
//               <div className="spinner-border text-info" role="status">
//                 <span className="visually-hidden">{t("loading")}</span>
//               </div>
//             </div>
//           )}
//           <div ref={endRef}></div>
//         </div>

//         {/* Input */}
//         <div
//           className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//           id={style.bottom}
//         >
//           <div className="icons d-flex gap-2 align-items-center">
//             <FaCamera
//               size={24}
//               style={{ cursor: "pointer", color: "#0dcaf0" }}
//               title="Upload Image"
//               onClick={() => fileInputRef.current.click()}
//             />
//             <input
//               type="file"
//               accept="image/*"
//               ref={fileInputRef}
//               onChange={handleImageUpload}
//               style={{ display: "none" }}
//             />
//           </div>
//           <input
//             type="text"
//             className="form-control"
//             placeholder={t("typeMessage")}
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             style={{ flexGrow: 1 }}
//           />
//           <div className="emoji position-relative">
//             <FaSmile
//               size={24}
//               onClick={() => setOpen((prev) => !prev)}
//               style={{ cursor: "pointer", color: "#ffc107" }}
//               title={t("emojiPicker")}
//             />
//             {open && (
//               <>
//                 {isMobile ? (
//                   <div
//                     className="modal fade show d-block"
//                     tabIndex="-1"
//                     style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1050 }}
//                     onClick={() => setOpen(false)}
//                   >
//                     <div className="modal-dialog modal-dialog-centered">
//                       <div className="modal-content p-3">
//                         <EmojiPicker
//                           onEmojiClick={handleEmoji}
//                           width="100%"
//                           height="400px"
//                         />
//                         <button
//                           type="button"
//                           className="btn btn-danger mt-3"
//                           onClick={() => setOpen(false)}
//                         >
//                           {t("close")}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div
//                     className="picker position-absolute bg-white p-2 rounded shadow"
//                     style={{
//                       bottom: "60px",
//                       right: "10px",
//                       width: "300px",
//                       height: "350px",
//                       overflowY: "auto",
//                       zIndex: 1000,
//                     }}
//                   >
//                     <EmojiPicker
//                       onEmojiClick={handleEmoji}
//                       width="100%"
//                       height="100%"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//           <button
//             type="button"
//             className="btn btn-outline-info"
//             onClick={handleSend}
//           >
//             {t("send")}
//           </button>
//         </div>
//       </div>

//       {/* ✅ صورة بالحجم الكامل */}
//       {selectedImage && (
//         <div
//           className="modal fade show d-block"
//           tabIndex="-1"
//           style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="modal-dialog modal-dialog-centered modal-lg">
//             <div className="modal-content bg-transparent border-0 position-relative">
//               <button
//                 type="button"
//                 className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
//                 aria-label="Close"
//                 onClick={() => setSelectedImage(null)}
//               ></button>
//               <img
//                 src={selectedImage}
//                 alt="Full size"
//                 className="img-fluid rounded"
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       <Details user={chatUser} sharedPhotos={sharedPhotos} />
//     </>
//   );
// }
// import React, { useEffect, useRef, useState } from "react";
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   addDoc,
//   serverTimestamp,
//   doc,
//   deleteDoc,
//   getDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { auth, db } from "../../firebase";
// import { useChat } from "../..";
// import EmojiPicker from "emoji-picker-react";
// import Swal from "sweetalert2";
// import style from "./Chatmessage.module.css";
// import "../details/Details";
// import { FaCamera, FaSmile } from "react-icons/fa";
// import Details from "../details/Details";
// import { useTranslation } from "react-i18next";

// export default function ChatMessage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [msgs, setmsg] = useState([]);
//   const [sharedPhotos, setSharedPhotos] = useState([]);
//   const [chatUser, setChatUser] = useState(null);
//   const fileInputRef = useRef(null);
//   const [userStatus, setUserStatus] = useState({
//     isOnline: false,
//     lastSeen: null,
//   });
//   const [uploading, setUploading] = useState(false);
//   const endRef = useRef(null);
//   const { chat_id } = useChat();
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const { t } = useTranslation();
//   const direction = document.documentElement.dir;

//   const handleEmoji = (emojiData) => {
//     setText((prev) => prev + emojiData.emoji);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [msgs]);

//   useEffect(() => {
//     if (!auth.currentUser) return;
//     const userRef = doc(db, "users", auth.currentUser.uid);
//     updateDoc(userRef, { isOnline: true, lastSeen: null });

//     return () => {
//       updateDoc(userRef, { isOnline: false, lastSeen: serverTimestamp() });
//     };
//   }, []);

//   useEffect(() => {
//     const fetchChatUser = async () => {
//       if (!chat_id) return;
//       const chatDoc = await getDoc(doc(db, "chats", chat_id));
//       const chatData = chatDoc.data();
//       if (!chatData?.users) return;

//       const otherUserUid = chatData.users.find(
//         (uid) => uid !== auth.currentUser?.uid
//       );

//       if (otherUserUid) {
//         const userDoc = await getDoc(doc(db, "users", otherUserUid));
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           setChatUser(userData);
//           setUserStatus({
//             isOnline: userData.isOnline,
//             lastSeen: userData.lastSeen?.toDate(),
//           });
//         }
//       }
//     };

//     fetchChatUser();
//   }, [chat_id]);

//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (snapshot) => {
//         const final = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//           documentId: doc.id,
//         }));
//         setmsg(final);
//         const photos = final.filter((msg) => msg.img);
//         setSharedPhotos(photos);
//       }
//     );
//     const checkBlocked = async () => {
//       const currentUser = auth.currentUser;
//       if (!currentUser || !chatUser?.uid) return false;

//       const blockRef = doc(db, "blocks", `${currentUser.uid}_${chatUser.uid}`);
//       const blockSnap = await getDoc(blockRef);

//       return blockSnap.exists(); // إذا كانت المحادثة محظورة سيتم إرجاع true
//     };

//     return () => unsub();
//   }, [chat_id]);

//   const handleSend = async () => {
//     if (text.trim() === "") return;
//     try {
//       // تحقق لحظي قبل الإرسال
//       const isUserBlocked = await checkBlocked();
//       if (isUserBlocked) {
//         alert("لا يمكنك إرسال رسالة لهذا المستخدم.");
//         return;
//       }

//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });
//       setText("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   const handleDeleteMessage = async (messageId) => {
//     if (!auth.currentUser) return;

//     const result = await Swal.fire({
//       title: t("areYouSure"),
//       text: t("messageDeleteWarning"),
//       icon: t("warning"),
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: t("yesDelete"),
//       cancelButtonText: t("cancel"),
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, `chats/${chat_id}/message/${messageId}`));
//         Swal.fire(t("deleted"), t("messageDeleted"), "success");
//       } catch (err) {
//         console.error("Error deleting message:", err);
//         Swal.fire(t("error"), t("messageDeleteError"), "error");
//       }
//     }
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "chatApp");

//     try {
//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dec3jkvqs/image/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       const imageUrl = data.secure_url;

//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text: text.trim(),
//         img: imageUrl,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });

//       setText("");
//     } catch (error) {
//       console.error("Image upload error:", error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <>
//       <div className="d-flex flex-column" id={style.chat}>
//         {/* Header */}
//         <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//           <div
//             className="user d-flex align-items-center gap-2"
//             style={{ cursor: "pointer" }}
//             data-bs-toggle="offcanvas"
//             data-bs-target="#userDetailsCanvas"
//           >
//             <img
//               src={chatUser?.photoURL || "/src/assets/avatar.png"}
//               id={style.avatar}
//               style={{ width: "50px", height: "50px", borderRadius: "50%" }}
//               alt="avatar"
//             />
//             <p className="m-0" id={style.info}>
//               {chatUser?.displayName || t("user")}
//             </p>
//             <div className="status">
//               {userStatus.isOnline ? (
//                 <span className="text-success">{t("online")}</span>
//               ) : (
//                 <span className="text-muted">
//                   {t("lastSeen")}{" "}
//                   {userStatus.lastSeen &&
//                     new Date(userStatus.lastSeen).toLocaleString()}
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Messages */}
//         <div className="d-flex flex-column gap-2" id={style.center}>
//           {msgs.map((msg) => (
//             <div
//               key={msg.documentId}
//               className={`massge ${
//                 msg.sender === auth.currentUser?.uid ? "own" : ""
//               }`}
//               id={
//                 msg.sender === auth.currentUser?.uid
//                   ? style.massgeOwn
//                   : style.massge
//               }
//             >
//               {msg.sender !== auth.currentUser?.uid && (
//                 <img
//                   src={chatUser?.photoURL || "/src/assets/avatar.png"}
//                   alt="avatar"
//                   style={{
//                     width: "50px",
//                     height: "50px",
//                     borderRadius: "50%",
//                   }}
//                 />
//               )}
//               <div
//                 className="texts flex-grow-1 d-flex flex-column gap-2 position-relative"
//                 id={
//                   msg.sender === auth.currentUser?.uid
//                     ? style.texts
//                     : style.recev
//                 }
//               >
//                 {msg.img && (
//                   <img
//                     src={msg.img}
//                     alt="message"
//                     className={style.chatImage}
//                     onClick={() => setSelectedImage(msg.img)}
//                     style={{ cursor: "pointer" }}
//                   />
//                 )}
//                 <p>{msg.text}</p>
//                 <h6>
//                   {msg.datetime?.toDate
//                     ? new Date(msg.datetime.toDate()).toLocaleTimeString()
//                     : ""}
//                 </h6>
//                 {msg.sender === auth.currentUser?.uid && (
//                   <button
//                     onClick={() => handleDeleteMessage(msg.documentId)}
//                     className="btn btn-sm btn-danger position-absolute"
//                     style={{
//                       top: "0",
//                       right: "0",
//                       borderRadius: "50%",
//                       fontSize: "7px",
//                     }}
//                   >
//                     ✖
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//           {uploading && (
//             <div className="d-flex justify-content-center align-items-center p-2">
//               <div className="spinner-border text-info" role="status">
//                 <span className="visually-hidden">{t("loading")}</span>
//               </div>
//             </div>
//           )}
//           <div ref={endRef}></div>
//         </div>

//         {/* Input */}
//         <div
//           className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//           id={style.bottom}
//         >
//           <div className="icons d-flex gap-2 align-items-center">
//             <FaCamera
//               size={24}
//               style={{ cursor: "pointer", color: "#0dcaf0" }}
//               title={t("uploadImage")}
//               onClick={() => fileInputRef.current.click()}
//             />
//             <input
//               type="file"
//               accept="image/*"
//               ref={fileInputRef}
//               onChange={handleImageUpload}
//               style={{ display: "none" }}
//             />
//           </div>
//           <input
//             type="text"
//             className="form-control"
//             placeholder={t("typeMessage")}
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             style={{ flexGrow: 1 }}
//           />
//           <div className="emoji position-relative">
//             <FaSmile
//               size={24}
//               onClick={() => setOpen((prev) => !prev)}
//               style={{ cursor: "pointer", color: "#ffc107" }}
//               title={t("emojiPicker")}
//             />
//             {open && (
//               <>
//                 {isMobile ? (
//                   <div
//                     className="modal fade show d-block"
//                     tabIndex="-1"
//                     style={{
//                       backgroundColor: "rgba(0,0,0,0.6)",
//                       zIndex: 1050,
//                     }}
//                     onClick={() => setOpen(false)}
//                   >
//                     <div className="modal-dialog modal-dialog-centered">
//                       <div className="modal-content p-3">
//                         <EmojiPicker
//                           onEmojiClick={handleEmoji}
//                           width="100%"
//                           height="400px"
//                         />
//                         <button
//                           type="button"
//                           className="btn btn-danger mt-3"
//                           onClick={() => setOpen(false)}
//                         >
//                           {t("close")}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div
//                     className="picker position-absolute bg-white p-2 rounded shadow"
//                     style={{
//                       bottom: "60px",
//                       [document.documentElement.dir === "rtl"
//                         ? "left"
//                         : "right"]: "10px",
//                       width: "300px",
//                       height: "350px",
//                       overflowY: "auto",
//                       zIndex: 1000,
//                     }}
//                   >
//                     <EmojiPicker
//                       onEmojiClick={handleEmoji}
//                       width="100%"
//                       height="100%"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//           <button
//             type="button"
//             className="btn btn-outline-info"
//             style={{ marginLeft: "1rem" }}
//             onClick={handleSend}
//           >
//             {t("send")}
//           </button>
//         </div>
//       </div>

//       {/* ✅ صورة بالحجم الكامل */}
//       {selectedImage && (
//         <div
//           className="modal fade show d-block"
//           tabIndex="-1"
//           style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="modal-dialog modal-dialog-centered modal-lg">
//             <div className="modal-content bg-transparent border-0 position-relative">
//               <button
//                 type="button"
//                 className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
//                 aria-label="Close"
//                 onClick={() => setSelectedImage(null)}
//               ></button>
//               <img
//                 src={selectedImage}
//                 alt="Full size"
//                 className="img-fluid rounded"
//                 style={{ maxWidth: "90%", maxHeight: "80vh" }}
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       <Details user={chatUser} sharedPhotos={sharedPhotos} />
//     </>
//   );
// }
// import React, { useEffect, useRef, useState } from "react";
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   addDoc,
//   serverTimestamp,
//   doc,
//   deleteDoc,
//   getDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { auth, db } from "../../firebase";
// import { useChat } from "../..";
// import EmojiPicker from "emoji-picker-react";
// import Swal from "sweetalert2";
// import style from "./Chatmessage.module.css";
// import "../details/Details";
// import { FaCamera, FaSmile } from "react-icons/fa";
// import Details from "../details/Details";
// import { useTranslation } from "react-i18next";

// export default function ChatMessage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [msgs, setmsg] = useState([]);
//   const [sharedPhotos, setSharedPhotos] = useState([]);
//   const [chatUser, setChatUser] = useState(null);
//   const fileInputRef = useRef(null);
//   const [userStatus, setUserStatus] = useState({
//     isOnline: false,
//     lastSeen: null,
//   });
//   const [uploading, setUploading] = useState(false);
//   const endRef = useRef(null);
//   const { chat_id } = useChat();
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const { t } = useTranslation();
//   const direction = document.documentElement.dir;

//   const handleEmoji = (emojiData) => {
//     setText((prev) => prev + emojiData.emoji);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [msgs]);

//   useEffect(() => {
//     if (!auth.currentUser) return;
//     const userRef = doc(db, "users", auth.currentUser.uid);
//     updateDoc(userRef, { isOnline: true, lastSeen: null });

//     return () => {
//       updateDoc(userRef, { isOnline: false, lastSeen: serverTimestamp() });
//     };
//   }, []);

//   useEffect(() => {
//     const fetchChatUser = async () => {
//       if (!chat_id) return;
//       const chatDoc = await getDoc(doc(db, "chats", chat_id));
//       const chatData = chatDoc.data();
//       if (!chatData?.users) return;

//       const otherUserUid = chatData.users.find(
//         (uid) => uid !== auth.currentUser?.uid
//       );

//       if (otherUserUid) {
//         const userDoc = await getDoc(doc(db, "users", otherUserUid));
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           setChatUser(userData);
//           setUserStatus({
//             isOnline: userData.isOnline,
//             lastSeen: userData.lastSeen?.toDate(),
//           });
//         }
//       }
//     };

//     fetchChatUser();
//   }, [chat_id]);

//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (snapshot) => {
//         const final = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//           documentId: doc.id,
//         }));
//         setmsg(final);
//         const photos = final.filter((msg) => msg.img);
//         setSharedPhotos(photos);
//       }
//     );
//     const checkBlocked = async () => {
//       const currentUser = auth.currentUser;
//       if (!currentUser || !chatUser?.uid) return false;

//       const blockRef = doc(db, "blocks", `${currentUser.uid}_${chatUser.uid}`);
//       const blockSnap = await getDoc(blockRef);

//       return blockSnap.exists(); // إذا كانت المحادثة محظورة سيتم إرجاع true
//     };

//     return () => unsub();
//   }, [chat_id]);

//   const handleSend = async () => {
//     if (text.trim() === "") return;
//     try {
//       // تحقق لحظي قبل الإرسال
//       const isUserBlocked = await checkBlocked();
//       if (isUserBlocked) {
//         alert("لا يمكنك إرسال رسالة لهذا المستخدم.");
//         return;
//       }

//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });
//       setText("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   const handleDeleteMessage = async (messageId) => {
//     if (!auth.currentUser) return;

//     const result = await Swal.fire({
//       title: t("areYouSure"),
//       text: t("messageDeleteWarning"),
//       icon: t("warning"),
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: t("yesDelete"),
//       cancelButtonText: t("cancel"),
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, `chats/${chat_id}/message/${messageId}`));
//         Swal.fire(t("deleted"), t("messageDeleted"), "success");
//       } catch (err) {
//         console.error("Error deleting message:", err);
//         Swal.fire(t("error"), t("messageDeleteError"), "error");
//       }
//     }
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "chatApp");

//     try {
//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dec3jkvqs/image/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       const imageUrl = data.secure_url;

//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text: text.trim(),
//         img: imageUrl,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });

//       setText("");
//     } catch (error) {
//       console.error("Image upload error:", error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <>
//       <div className="d-flex flex-column" id={style.chat}>
//         {/* Header */}
//         <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//           <div
//             className="user d-flex align-items-center gap-2"
//             style={{ cursor: "pointer" }}
//             data-bs-toggle="offcanvas"
//             data-bs-target="#userDetailsCanvas"
//           >
//             <img
//               src={chatUser?.photoURL || "/src/assets/avatar.png"}
//               id={style.avatar}
//               style={{ width: "50px", height: "50px", borderRadius: "50%" }}
//               alt="avatar"
//             />
//             <p className="m-0" id={style.info}>
//               {chatUser?.displayName || t("user")}
//             </p>
//             <div className="status">
//               {userStatus.isOnline ? (
//                 <span className="text-success">{t("online")}</span>
//               ) : (
//                 <span className="text-muted">
//                   {t("lastSeen")}{" "}
//                   {userStatus.lastSeen &&
//                     new Date(userStatus.lastSeen).toLocaleString()}
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Messages */}
//         <div className="d-flex flex-column gap-2" id={style.center}>
//           {msgs.map((msg) => (
//             <div
//               key={msg.documentId}
//               className={`massge ${
//                 msg.sender === auth.currentUser?.uid ? "own" : ""
//               }`}
//               id={
//                 msg.sender === auth.currentUser?.uid
//                   ? style.massgeOwn
//                   : style.massge
//               }
//             >
//               {msg.sender !== auth.currentUser?.uid && (
//                 <img
//                   src={chatUser?.photoURL || "/src/assets/avatar.png"}
//                   alt="avatar"
//                   style={{
//                     width: "50px",
//                     height: "50px",
//                     borderRadius: "50%",
//                   }}
//                 />
//               )}
//               <div
//                 className="texts flex-grow-1 d-flex flex-column gap-2 position-relative"
//                 id={
//                   msg.sender === auth.currentUser?.uid
//                     ? style.texts
//                     : style.recev
//                 }
//               >
//                 {msg.img && (
//                   <img
//                     src={msg.img}
//                     alt="message"
//                     className={style.chatImage}
//                     onClick={() => setSelectedImage(msg.img)}
//                     style={{ cursor: "pointer" }}
//                   />
//                 )}
//                 <p>{msg.text}</p>
//                 <h6>
//                   {msg.datetime?.toDate
//                     ? new Date(msg.datetime.toDate()).toLocaleTimeString()
//                     : ""}
//                 </h6>
//                 {msg.sender === auth.currentUser?.uid && (
//                   <button
//                     onClick={() => handleDeleteMessage(msg.documentId)}
//                     className="btn btn-sm btn-danger position-absolute"
//                     style={{
//                       top: "0",
//                       right: "0",
//                       borderRadius: "50%",
//                       fontSize: "7px",
//                     }}
//                   >
//                     ✖
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//           {uploading && (
//             <div className="d-flex justify-content-center align-items-center p-2">
//               <div className="spinner-border text-info" role="status">
//                 <span className="visually-hidden">{t("loading")}</span>
//               </div>
//             </div>
//           )}
//           <div ref={endRef}></div>
//         </div>

//         {/* Input */}
//         <div
//           className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//           id={style.bottom}
//         >
//           <div className="icons d-flex gap-2 align-items-center">
//             <FaCamera
//               size={24}
//               style={{ cursor: "pointer", color: "#0dcaf0" }}
//               title={t("uploadImage")}
//               onClick={() => fileInputRef.current.click()}
//             />
//             <input
//               type="file"
//               accept="image/*"
//               ref={fileInputRef}
//               onChange={handleImageUpload}
//               style={{ display: "none" }}
//             />
//           </div>
//           <input
//             type="text"
//             className="form-control"
//             placeholder={t("typeMessage")}
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             style={{ flexGrow: 1 }}
//           />
//           <div className="emoji position-relative">
//             <FaSmile
//               size={24}
//               onClick={() => setOpen((prev) => !prev)}
//               style={{ cursor: "pointer", color: "#ffc107" }}
//               title={t("emojiPicker")}
//             />
//             {open && (
//               <>
//                 {isMobile ? (
//                   <div
//                     className="modal fade show d-block"
//                     tabIndex="-1"
//                     style={{
//                       backgroundColor: "rgba(0,0,0,0.6)",
//                       zIndex: 1050,
//                     }}
//                     onClick={() => setOpen(false)}
//                   >
//                     <div className="modal-dialog modal-dialog-centered">
//                       <div className="modal-content p-3">
//                         <EmojiPicker
//                           onEmojiClick={handleEmoji}
//                           width="100%"
//                           height="400px"
//                         />
//                         <button
//                           type="button"
//                           className="btn btn-danger mt-3"
//                           onClick={() => setOpen(false)}
//                         >
//                           {t("close")}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div
//                     className="picker position-absolute bg-white p-2 rounded shadow"
//                     style={{
//                       bottom: "60px",
//                       [document.documentElement.dir === "rtl"
//                         ? "left"
//                         : "right"]: "10px",
//                       width: "300px",
//                       height: "350px",
//                       overflowY: "auto",
//                       zIndex: 1000,
//                     }}
//                   >
//                     <EmojiPicker
//                       onEmojiClick={handleEmoji}
//                       width="100%"
//                       height="100%"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//           <button
//             type="button"
//             className="btn btn-outline-info"
//             style={{ marginLeft: "1rem" }}
//             onClick={handleSend}
//           >
//             {t("send")}
//           </button>
//         </div>
//       </div>

//       {/* ✅ صورة بالحجم الكامل */}
//       {selectedImage && (
//         <div
//           className="modal fade show d-block"
//           tabIndex="-1"
//           style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="modal-dialog modal-dialog-centered modal-lg">
//             <div className="modal-content bg-transparent border-0 position-relative">
//               <button
//                 type="button"
//                 className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
//                 aria-label="Close"
//                 onClick={() => setSelectedImage(null)}
//               ></button>
//               <img
//                 src={selectedImage}
//                 alt="Full size"
//                 className="img-fluid rounded"
//                 style={{ maxWidth: "90%", maxHeight: "80vh" }}
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       <Details user={chatUser} sharedPhotos={sharedPhotos} />
//     </>
//   );
// }
// import React, { useEffect, useRef, useState } from "react";
// import {
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   addDoc,
//   serverTimestamp,
//   doc,
//   deleteDoc,
//   getDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { auth, db } from "../../firebase";
// import { useChat } from "../..";
// import EmojiPicker from "emoji-picker-react";
// import Swal from "sweetalert2";
// import style from "./Chatmessage.module.css";
// import "../details/Details";
// import { FaCamera, FaSmile } from "react-icons/fa";
// import Details from "../details/Details";
// import { useTranslation } from "react-i18next";
// import TicTacToeModal from "../../game/TicTacToeModal";

// export default function ChatMessage() {
//   const [showGame, setShowGame] = useState(false);

//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState("");
//   const [msgs, setmsg] = useState([]);
//   const [sharedPhotos, setSharedPhotos] = useState([]);
//   const [chatUser, setChatUser] = useState(null);
//   const fileInputRef = useRef(null);
//   const [userStatus, setUserStatus] = useState({
//     isOnline: false,
//     lastSeen: null,
//   });
//   const [uploading, setUploading] = useState(false);
//   const endRef = useRef(null);
//   const { chat_id } = useChat();
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const { t } = useTranslation();
//   const direction = document.documentElement.dir;

//   const handleEmoji = (emojiData) => {
//     setText((prev) => prev + emojiData.emoji);
//   };

//   // دالة للتحقق من الحظر
//   const checkBlocked = async () => {
//     const currentUser = auth.currentUser;
//     if (!currentUser || !chatUser?.uid) return false;

//     const blockRef = doc(db, "blocks", `${currentUser.uid}_${chatUser.uid}`);
//     const blockSnap = await getDoc(blockRef);

//     return blockSnap.exists(); // إذا كانت المحادثة محظورة سيتم إرجاع true
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     endRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [msgs]);

//   useEffect(() => {
//     if (!auth.currentUser) return;
//     const userRef = doc(db, "users", auth.currentUser.uid);
//     updateDoc(userRef, { isOnline: true, lastSeen: null });

//     return () => {
//       updateDoc(userRef, { isOnline: false, lastSeen: serverTimestamp() });
//     };
//   }, []);

//   useEffect(() => {
//     const fetchChatUser = async () => {
//       if (!chat_id) return;
//       const chatDoc = await getDoc(doc(db, "chats", chat_id));
//       const chatData = chatDoc.data();
//       if (!chatData?.users) return;

//       const otherUserUid = chatData.users.find(
//         (uid) => uid !== auth.currentUser?.uid
//       );

//       if (otherUserUid) {
//         const userDoc = await getDoc(doc(db, "users", otherUserUid));
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           setChatUser(userData);
//           setUserStatus({
//             isOnline: userData.isOnline,
//             lastSeen: userData.lastSeen?.toDate(),
//           });
//         }
//       }
//     };

//     fetchChatUser();
//   }, [chat_id]);

//   useEffect(() => {
//     const unsub = onSnapshot(
//       query(collection(db, `chats/${chat_id}/message`), orderBy("datetime")),
//       (snapshot) => {
//         const final = snapshot.docs.map((doc) => ({
//           ...doc.data(),
//           documentId: doc.id,
//         }));
//         setmsg(final);
//         const photos = final.filter((msg) => msg.img);
//         setSharedPhotos(photos);
//       }
//     );

//     return () => unsub();
//   }, [chat_id]);

//   const handleSend = async () => {
//     if (text.trim() === "") return;
//     try {
//       // تحقق لحظي قبل الإرسال
//       const isUserBlocked = await checkBlocked();
//       if (isUserBlocked) {
//         Swal.fire({
//           icon: "error",
//           title: t("blocked"),
//           text: t("blockedMessage"),
//         });
//         return;
//       }

//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });
//       setText("");
//     } catch (err) {
//       Swal.fire({
//         icon: "error",
//         title: t("error"),
//         text: t("messageSendError"),
//       });
//     }
//   };

//   const handleDeleteMessage = async (messageId) => {
//     if (!auth.currentUser) return;

//     const result = await Swal.fire({
//       title: t("areYouSure"),
//       text: t("messageDeleteWarning"),
//       icon: t("warning"),
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: t("yesDelete"),
//       cancelButtonText: t("cancel"),
//     });

//     if (result.isConfirmed) {
//       try {
//         await deleteDoc(doc(db, `chats/${chat_id}/message/${messageId}`));
//         Swal.fire(t("deleted"), t("messageDeleted"), "success");
//       } catch (err) {
//         Swal.fire({
//           icon: "error",
//           title: t("error"),
//           text: t("messageDeleteError"),
//         });
//       }
//     }
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "chatApp");

//     try {
//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dec3jkvqs/image/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       const imageUrl = data.secure_url;

//       await addDoc(collection(db, `chats/${chat_id}/message`), {
//         text: text.trim(),
//         img: imageUrl,
//         sender: auth.currentUser?.uid,
//         datetime: serverTimestamp(),
//       });

//       setText("");
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: t("error"),
//         text: t("imageUploadError"),
//       });
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <>
//       <div className="d-flex flex-column" id={style.chat}>
//         {/* Header */}
//         <div className="d-flex p-3 flex-row align-items-center" id={style.top}>
//           <div
//             className="user d-flex align-items-center gap-2"
//             style={{ cursor: "pointer" }}
//             data-bs-toggle="offcanvas"
//             data-bs-target="#userDetailsCanvas"
//           >
//             <img
//               src={chatUser?.photoURL || "/src/assets/avatar.png"}
//               id={style.avatar}
//               style={{ width: "50px", height: "50px", borderRadius: "50%" }}
//               alt="avatar"
//             />
//             <p className="m-0" id={style.info}>
//               {chatUser?.displayName || t("user")}
//             </p>
//             <div className="status">
//               {userStatus.isOnline ? (
//                 <span className="text-success">{t("online")}</span>
//               ) : (
//                 <span className="text-muted">
//                   {t("lastSeen")}{" "}
//                   {userStatus.lastSeen &&
//                     new Date(userStatus.lastSeen).toLocaleString()}
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Messages */}
//         <div className="d-flex flex-column gap-2" id={style.center}>
//           {msgs.map((msg) => (
//             <div
//               key={msg.documentId}
//               className={`massge ${
//                 msg.sender === auth.currentUser?.uid ? "own" : ""
//               }`}
//               id={
//                 msg.sender === auth.currentUser?.uid
//                   ? style.massgeOwn
//                   : style.massge
//               }
//             >
//               {msg.sender !== auth.currentUser?.uid && (
//                 <img
//                   src={chatUser?.photoURL || "/src/assets/avatar.png"}
//                   alt="avatar"
//                   style={{ width: "50px", height: "50px", borderRadius: "50%" }}
//                 />
//               )}
//               <div
//                 className="texts flex-grow-1 d-flex flex-column gap-2 position-relative"
//                 id={
//                   msg.sender === auth.currentUser?.uid
//                     ? style.texts
//                     : style.recev
//                 }
//               >
//                 {msg.img && (
//                   <img
//                     src={msg.img}
//                     alt="message"
//                     className={style.chatImage}
//                     onClick={() => setSelectedImage(msg.img)}
//                     style={{ cursor: "pointer" }}
//                   />
//                 )}
//                 <p>{msg.text}</p>
//                 <h6>
//                   {msg.datetime?.toDate
//                     ? new Date(msg.datetime.toDate()).toLocaleTimeString()
//                     : ""}
//                 </h6>
//                 {msg.sender === auth.currentUser?.uid && (
//                   <button
//                     onClick={() => handleDeleteMessage(msg.documentId)}
//                     className="btn btn-sm btn-danger position-absolute"
//                     style={{
//                       top: "0",
//                       right: "0",
//                       borderRadius: "50%",
//                       fontSize: "7px",
//                     }}
//                   >
//                     ✖
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//           {uploading && (
//             <div className="d-flex justify-content-center align-items-center p-2">
//               <div className="spinner-border text-info" role="status">
//                 <span className="visually-hidden">{t("loading")}</span>
//               </div>
//             </div>
//           )}
//           <div ref={endRef}></div>
//         </div>

//         {/* Input */}
//         <div
//           className="bottom d-flex align-items-center justify-content-between p-2 gap-3"
//           id={style.bottom}
//         >
//           <div className="icons d-flex gap-2 align-items-center">
//             <FaCamera
//               size={24}
//               style={{ cursor: "pointer", color: "#0dcaf0" }}
//               title={t("uploadImage")}
//               onClick={() => fileInputRef.current.click()}
//             />
//             <input
//               type="file"
//               accept="image/*"
//               ref={fileInputRef}
//               onChange={handleImageUpload}
//               style={{ display: "none" }}
//             />
//           </div>
//           <input
//             type="text"
//             className="form-control"
//             placeholder={t("typeMessage")}
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             style={{ flexGrow: 1 }}
//           />
//           <div className="emoji position-relative">
//             <FaSmile
//               size={24}
//               onClick={() => setOpen((prev) => !prev)}
//               style={{ cursor: "pointer", color: "#ffc107" }}
//               title={t("emojiPicker")}
//             />
//             {open && (
//               <>
//                 {isMobile ? (
//                   <div
//                     className="modal fade show d-block"
//                     tabIndex="-1"
//                     style={{
//                       backgroundColor: "rgba(0,0,0,0.6)",
//                       zIndex: 1050,
//                     }}
//                     onClick={() => setOpen(false)}
//                   >
//                     <div className="modal-dialog modal-dialog-centered">
//                       <div className="modal-content p-3">
//                         <EmojiPicker
//                           onEmojiClick={handleEmoji}
//                           width="100%"
//                           height="400px"
//                         />
//                         <button
//                           type="button"
//                           className="btn btn-danger mt-3"
//                           onClick={() => setOpen(false)}
//                         >
//                           {t("close")}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div
//                     className="picker position-absolute bg-white p-2 rounded shadow"
//                     style={{
//                       bottom: "60px",
//                       [document.documentElement.dir === "rtl"
//                         ? "left"
//                         : "right"]: "10px",
//                       width: "300px",
//                       height: "350px",
//                       overflowY: "auto",
//                       zIndex: 1000,
//                     }}
//                   >
//                     <EmojiPicker
//                       onEmojiClick={handleEmoji}
//                       width="100%"
//                       height="100%"
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </div>
//           <button
//             type="button"
//             className="btn btn-outline-info"
//             style={{ marginLeft: "1rem" }}
//             onClick={handleSend}
//           >
//             {t("send")}
//           </button>
//           {/* <div> */}
//         </div>
//       </div>

//       {/* ✅ صورة بالحجم الكامل */}
//       {selectedImage && (
//         <div
//           className="modal fade show d-block"
//           tabIndex="-1"
//           style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="modal-dialog modal-dialog-centered modal-lg">
//             <div className="modal-content bg-transparent border-0 position-relative">
//               <button
//                 type="button"
//                 className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
//                 aria-label="Close"
//                 onClick={() => setSelectedImage(null)}
//               ></button>
//               <img
//                 src={selectedImage}
//                 alt="Full size"
//                 className="img-fluid rounded"
//                 style={{ maxWidth: "90%", maxHeight: "80vh" }}
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       <Details user={chatUser} sharedPhotos={sharedPhotos} />
//     </>
//   );
// }
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
                  // 📱 Emoji Picker للموبايل كمودال كامل
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
                  // 💻 Emoji Picker للديسكتوب يظهر بجانب الزر
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

      {/* عرض الصورة بالحجم الكامل */}
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
