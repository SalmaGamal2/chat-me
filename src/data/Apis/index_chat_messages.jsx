import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const indexChatMessages = async (chat_id) => {
  const msgSnapshot = await getDocs(collection(db, `chats/${chat_id}/message`));
  let final = [];
  msgSnapshot.forEach((doc) => {
    let obj = { ...doc.data(), documentId: doc.id };
    final.push(obj);
  });
  return final;
};
