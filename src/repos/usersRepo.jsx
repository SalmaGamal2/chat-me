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
