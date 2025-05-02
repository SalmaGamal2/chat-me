// import { collection, getDocs } from "firebase/firestore";
// import db from "../../firebase";

// export const indexChatMessages = async (chat_id) => {
//   const msg = await getDocs(collection(db, `chats/${chat_id}/message`));
//   let final = [];
//   usersSnapshot.forEach((user) => {
//     let obj = { ...user.data(), documentId: user.id };
//     final.push(obj);
//   });
//   return final;
// };

// src/data/Apis/index_chat_messages.js
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
