// new

// import { useEffect, useState } from "react";
// import "./Chats.css";
// import Message from "./Message";
// import { usersRepo } from "../../repos/usersRepo";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import db from "../../firebase";

// export default function Chat() {
//   const [chats, setChats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [add, setAdd] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredChats, setFilteredChats] = useState([]);

//   // 👤 هنا بنحدد ID اليوزر الحالي
//   const currentUserId = "5"; // ممكن تخليه ديناميكي حسب تسجيل الدخول

//   // ✅ تحميل الشات الخاص باليوزر الحالي فقط
//   useEffect(() => {
//     const q = query(
//       collection(db, "chats"),
//       where("users", "array-contains", currentUserId)
//     );

//     const unsubscribe = onSnapshot(q, (chatsSnapshot) => {
//       let final = [];
//       chatsSnapshot.forEach((chat) => {
//         let obj = { ...chat.data(), documentId: chat.id };
//         let reciver_id = obj.users.find((el) => el !== "2");
//         let userData = usersRepo.get_user_data(reciver_id).then((res) => {
//           console.log(res);
//         });
//         obj.name = reciver_id;
//         final.push(obj);
//       });
//       console.log("Final Chat Data:", results);
//       setChats(results);
//       setChats(final);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [currentUserId]);

//   // ✅ فلترة البحث
//   useEffect(() => {
//     if (searchTerm.trim() === "") {
//       setFilteredChats([]);
//     } else {
//       const filtered = chats.filter((chat) =>
//         chat.name?.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredChats(filtered);
//     }
//   }, [searchTerm, chats]);

//   const handleSelect = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="chatlist col-12 h-100 p-3 d-flex flex-column">
//       {/* 🔍 شريط البحث */}
//       <div className="search">
//         <div className="searchbar d-flex align-items-center mb-3">
//           <img
//             src="/src/assets/search.png"
//             alt="search"
//             style={{ width: "20px", height: "20px", marginRight: "10px" }}
//           />
//           <input
//             className="w-100"
//             type="text"
//             placeholder="Search"
//             style={{ padding: "5px" }}
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <img
//           src={add ? "/src/assets/minus.png" : "/src/assets/plus.png"}
//           className="addation"
//           alt="toggle"
//           onClick={() => setAdd((prev) => !prev)}
//           style={{ width: "20px", height: "20px", cursor: "pointer" }}
//         />
//       </div>

//       {/* عدد المحادثات */}
//       <div className="chat-header mb-3">
//         <h3>
//           your chats (
//           {filteredChats.length > 0 ? filteredChats.length : chats.length})
//         </h3>
//       </div>

//       {/* 💬 عرض المحادثات */}
//       {loading ? (
//         <div className="text-center mt-5">
//           <div className="spinner"></div>
//           <p className="text-muted">Chat is loading....</p>
//         </div>
//       ) : (filteredChats.length > 0 ? filteredChats : searchTerm ? [] : chats)
//           .length === 0 ? (
//         <p className="text-center text-muted mt-3">No matches found..</p>
//       ) : (
//         (filteredChats.length > 0 ? filteredChats : chats).map((el, index) => (
//           <Message
//             key={el.documentId}
//             username={el.name}
//             data={el}
//             isActive={index === activeIndex}
//             onClick={() => handleSelect(index)}
//           />
//         ))
//       )}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import "./Chats.css";
// import Message from "./Message";
// import { usersRepo } from "../../repos/usersRepo";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import db from "../../firebase";

// export default function Chat() {
//   const [chats, setChats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [add, setAdd] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredChats, setFilteredChats] = useState([]);

//   // 👤 ID المستخدم الحالي (خليه ديناميكي بعدين)
//   const currentUserId = "5";

//   // 📡 تحميل المحادثات الخاصة بالمستخدم
//   useEffect(() => {
//     const q = query(
//       collection(db, "chats"),
//       where("users", "array-contains", currentUserId)
//     );

//     const unsubscribe = onSnapshot(q, async (chatsSnapshot) => {
//       let promises = [];

//       chatsSnapshot.forEach((chat) => {
//         let obj = { ...chat.data(), documentId: chat.id };

//         // 🧠 استخراج الـ ID الخاص بالطرف الآخر في الشات
//         let receiverId = obj.users.find((el) => el !== currentUserId);

//         // 🧾 جلب بيانات الطرف الآخر
//         const promise = usersRepo.get_user_data(receiverId).then((res) => {
//           if (res && res.name) {
//             obj.name = res.name;
//           } else {
//             obj.name = "Unknown User";
//           }

//           return obj;
//         });

//         promises.push(promise);
//       });

//       const results = await Promise.all(promises);
//       console.log("✅ Final chats with names:", results);
//       setChats(results);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [currentUserId]);

//   // 🔍 فلترة البحث
//   useEffect(() => {
//     if (searchTerm.trim() === "") {
//       setFilteredChats([]);
//     } else {
//       const filtered = chats.filter((chat) =>
//         chat.name?.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredChats(filtered);
//     }
//   }, [searchTerm, chats]);

//   const handleSelect = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="chatlist col-12 h-100 p-3 d-flex flex-column">
//       {/* 🔍 شريط البحث */}
//       <div className="search">
//         <div className="searchbar d-flex align-items-center mb-3">
//           <img
//             src="/src/assets/search.png"
//             alt="search"
//             style={{ width: "20px", height: "20px", marginRight: "10px" }}
//           />
//           <input
//             className="w-100"
//             type="text"
//             placeholder="Search"
//             style={{ padding: "5px" }}
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <img
//           src={add ? "/src/assets/minus.png" : "/src/assets/plus.png"}
//           className="addation"
//           alt="toggle"
//           onClick={() => setAdd((prev) => !prev)}
//           style={{ width: "20px", height: "20px", cursor: "pointer" }}
//         />
//       </div>

//       {/* عدد المحادثات */}
//       <div className="chat-header mb-3">
//         <h3>
//           your chats (
//           {filteredChats.length > 0 ? filteredChats.length : chats.length})
//         </h3>
//       </div>

//       {/* 💬 عرض المحادثات */}
//       {loading ? (
//         <div className="text-center mt-5">
//           <div className="spinner"></div>
//           <p className="text-muted">Chat is loading....</p>
//         </div>
//       ) : (filteredChats.length > 0 ? filteredChats : searchTerm ? [] : chats)
//           .length === 0 ? (
//         <p className="text-center text-muted mt-3">No matches found..</p>
//       ) : (
//         (filteredChats.length > 0 ? filteredChats : chats).map((el, index) => (
//           <Message
//             key={el.documentId}
//             username={el.name}
//             data={el}
//             isActive={index === activeIndex}
//             onClick={() => handleSelect(index)}
//           />
//         ))
//       )}
//     </div>
//   );
// }

// new imp

// import { useEffect, useState } from "react";
// import "./Chats.css";
// import Message from "./Message";
// import { usersRepo } from "../../repos/usersRepo";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import Adduser from "./adduser/Adduser";
// import { db } from "../../firebase";

// export default function Chat() {
//   const [chats, setChats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [add, setAdd] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredChats, setFilteredChats] = useState([]);

//   // 👤 هنا بنحدد ID اليوزر الحالي
//   const currentUserId = "1"; // ممكن تخليه ديناميكي حسب تسجيل الدخول

//   // ✅ تحميل الشات الخاص باليوزر الحالي فقط
//   useEffect(() => {
//     const q = query(
//       collection(db, "chats"),
//       where("users", "array-contains", currentUserId)
//     );

//     const unsubscribe = onSnapshot(q, async (chatsSnapshot) => {
//       let promises = [];
//       let finalChats = [];

//       // تأكد من أن البيانات يتم تحميلها بشكل صحيح
//       console.log("🔄 Loading chats...");

//       chatsSnapshot.forEach((chat) => {
//         let obj = { ...chat.data(), documentId: chat.id };

//         // إيجاد الطرف الآخر في الشات
//         const receiverId = obj.users.find((el) => el !== currentUserId);
//         console.log("Receiver ID:", receiverId);

//         // التحقق من وجود receiverId
//         if (!receiverId) {
//           console.warn("⚠️ Receiver ID not found in chat:", obj);
//           return;
//         }

//         // جلب بيانات المستخدم الآخر (من الـ usersRepo)
//         const promise = usersRepo.get_user_data(receiverId).then((res) => {
//           obj.name = res?.name || "Unknown User"; // اسم المستخدم الآخر
//           finalChats.push(obj);
//         });

//         promises.push(promise);
//       });

//       // بعد تجميع كل الـ promises، انتظر النتائج
//       await Promise.all(promises);

//       // تحقق من أن المحادثات تم تحميلها بشكل صحيح
//       console.log("✅ Final chats with names:", finalChats);
//       setChats(finalChats);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [currentUserId]);

//   // ✅ فلترة البحث
//   useEffect(() => {
//     if (searchTerm.trim() === "") {
//       setFilteredChats([]);
//     } else {
//       const filtered = chats.filter((chat) =>
//         chat.name?.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredChats(filtered);
//     }
//   }, [searchTerm, chats]);

//   const handleSelect = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="chatlist col-12 h-100 p-3 d-flex flex-column ">
//       {/* 🔍 شريط البحث */}
//       <div className="search">
//         <div className="searchbar d-flex align-items-center mb-3">
//           <img
//             src="/src/assets/search.png"
//             alt="search"
//             style={{ width: "20px", height: "20px", marginRight: "10px" }}
//           />
//           <input
//             className="w-100"
//             type="text"
//             placeholder="Search"
//             style={{ padding: "5px" }}
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <img
//           src={add ? "/src/assets/minus.png" : "/src/assets/plus.png"}
//           className="addation"
//           alt="toggle"
//           onClick={() => setAdd((prev) => !prev)}
//           style={{ width: "20px", height: "20px", cursor: "pointer" }}
//         />
//       </div>

//       {/* عدد المحادثات */}
//       <div className="chat-header mb-3">
//         <h3>
//           your chats (
//           {filteredChats.length > 0 ? filteredChats.length : chats.length})
//         </h3>
//       </div>

//       {/* 💬 عرض المحادثات */}
//       {loading ? (
//         <div className="text-center mt-5">
//           <div className="spinner"></div>
//           <p className="text-muted">Chat is loading....</p>
//         </div>
//       ) : (filteredChats.length > 0 ? filteredChats : searchTerm ? [] : chats)
//           .length === 0 ? (
//         <p className="text-center text-muted mt-3">No matches found..</p>
//       ) : (
//         (filteredChats.length > 0 ? filteredChats : chats).map((el, index) => (
//           <Message
//             key={el.documentId}
//             chat_id={el.documentId}
//             username={el.name}
//             data={el}
//             isActive={index === activeIndex}
//             onClick={() => handleSelect(index)}
//           />
//         ))
//       )}
//       {/* {add && <Adduser />} */}
//       {add && <Adduser onClose={() => setAdd(false)} />}
//     </div>
//   );
// }
// الاخير

// import { useEffect, useState } from "react";
// import "./Chats.css";
// import Message from "./Message";
// import { usersRepo } from "../../repos/usersRepo";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import Adduser from "./adduser/Adduser";
// import { auth, db } from "../../firebase";
// import { useTranslation } from "react-i18next";

// export default function Chat() {
//   const [chats, setChats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [add, setAdd] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredChats, setFilteredChats] = useState([]);
//   const currentUserId = auth.currentUser?.uid || "";
//   const { t } = useTranslation();

//   useEffect(() => {
//     const q = query(
//       collection(db, "chats"),
//       where("users", "array-contains", currentUserId)
//     );

//     const unsubscribe = onSnapshot(q, async (chatsSnapshot) => {
//       let promises = [];
//       let finalChats = [];

//       chatsSnapshot.forEach((chat) => {
//         let obj = { ...chat.data(), documentId: chat.id };
//         const receiverId = obj.users.find((el) => el !== currentUserId);

//         if (!receiverId) return;

//         const promise = usersRepo.get_user_by_id(receiverId).then((res) => {
//           obj.name = res?.name || "Unknown User";
//           obj.photoURL = res?.photo || "/src/assets/avatar.png";
//           finalChats.push(obj);
//         });

//         promises.push(promise);
//       });

//       await Promise.all(promises);
//       setChats(finalChats);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [currentUserId]);

//   useEffect(() => {
//     if (searchTerm.trim() === "") {
//       setFilteredChats([]);
//     } else {
//       const filtered = chats.filter((chat) =>
//         chat.name?.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredChats(filtered);
//     }
//   }, [searchTerm, chats]);

//   const handleSelect = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div
//       className="chat-wrapper d-flex flex-column"
//       style={{ height: "100%", minHeight: 0 }}
//     >
//       <div className="chatlist col-12 h-100 p-3 d-flex flex-column ">
//         <div className="search">
//           <div className="searchbar d-flex align-items-center mb-3">
//             <img
//               src="/src/assets/search.png"
//               alt="search"
//               style={{ width: "20px", height: "20px", marginRight: "10px" }}
//             />
//             <input
//               className="w-100"
//               type="text"
//               placeholder={t("searchPlaceholder")}
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               style={{ padding: "5px" }}
//             />
//           </div>
//           <img
//             src={add ? "/src/assets/minus.png" : "/src/assets/plus.png"}
//             className="addation"
//             alt="toggle"
//             onClick={() => setAdd((prev) => !prev)}
//             style={{ width: "20px", height: "20px", cursor: "pointer" }}
//           />
//         </div>

//         <div className="chat-header mb-3">
//           <h3>
//             {t("yourChats")} (
//             {filteredChats.length > 0 ? filteredChats.length : chats.length})
//           </h3>
//         </div>

//         {loading ? (
//           <div className="text-center mt-5">
//             <div className="spinner"></div>
//             <p className="text-muted">{t("loading")}</p>
//           </div>
//         ) : (filteredChats.length > 0 ? filteredChats : chats).length === 0 ? (
//           <p className="text-center text-muted mt-3">{t("noMatches")}</p>
//         ) : (
//           (filteredChats.length > 0 ? filteredChats : chats).map(
//             (el, index) => (
//               <Message
//                 key={el.documentId}
//                 chat_id={el.documentId}
//                 username={el.name}
//                 data={el}
//                 isActive={index === activeIndex}
//                 onClick={() => handleSelect(index)}
//               />
//             )
//           )
//         )}

//         {/* {add && (
//         <Adduser
//           onClose={() => setAdd(false)}
//           onUserAdded={(newChat) =>
//             setChats((prevChats) => [...prevChats, newChat])
//           }
//         />
//       )} */}

//         {add && <Adduser onClose={() => setAdd(false)} setChats={setChats} />}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import "./Chats.css";
import Message from "./Message";
import { usersRepo } from "../../repos/usersRepo";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Adduser from "./adduser/Adduser";
import { auth, db } from "../../firebase";
import { useTranslation } from "react-i18next";
import ChatWindow from "./ChatWindow";

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
          obj.photoURL = res?.photo || "/src/assets/avatar.png";
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
              src="/src/assets/search.png"
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
            src={add ? "/src/assets/minus.png" : "/src/assets/plus.png"}
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
