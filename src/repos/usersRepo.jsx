// import { indexUsers } from "../data/Apis/index_users";
// import { showUser } from "../data/Apis/show_Users";

// export const usersRepo = {
//   get_all_users: async () => {
//     return await indexUsers();
//   },
//   get_all_users_live: async () => {
//     return await getLive();
//   },
//   get_user_data: async (user_id) => {
//     return showUser(user_id);
//   },
// };
// new

// import { indexChatMessages } from "../data/Apis/index_chat_messages";
// import { indexUsers } from "../data/Apis/index_users";
// import { showUser } from "../data/Apis/show_Users";

// export const usersRepo = {
//   // جلب جميع المستخدمين مرة واحدة
//   get_all_users: async () => {
//     return await indexUsers();
//   },

//   // جلب المستخدمين لايف (لو عندك دالة اسمها getLive)
//   get_all_users_live: async () => {
//     return await getLive();
//   },

//   // جلب بيانات مستخدم واحد حسب الـ ID
//   get_user_data: async (user_id) => {
//     return await showUser(user_id);
//   },
//   // };
//   get_chat_messages: async (chat_id) => {
//     return await indexChatMessages(chat_id);
//   },
// };

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
export const usersRepo = {
  get_chat: async (chat_id) => {
    try {
      const chatRef = doc(db, "chats", chat_id);
      const chatSnap = await getDoc(chatRef);
      if (chatSnap.exists()) {
        return { id: chatSnap.id, ...chatSnap.data() };
      } else {
        console.warn("⚠️ No such chat!");
        return null;
      }
    } catch (error) {
      console.error("❌ Error fetching chat:", error);
      return null;
    }
  },

  get_chat_messages: async (chat_id) => {
    // ...
  },

  get_user_by_id: async (user_id) => {
    try {
      const userRef = doc(db, "users", user_id);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        return { id: userSnap.id, ...userSnap.data() };
      }
      return null;
    } catch (error) {
      console.error("❌ Error fetching user:", error);
      return null;
    }
  },
};
