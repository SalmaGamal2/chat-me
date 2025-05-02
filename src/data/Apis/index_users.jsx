import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const indexUsers = async () => {
  const usersSnapshot = await getDocs(collection(db, "users"));
  let final = [];
  usersSnapshot.forEach((user) => {
    let obj = { ...user.data(), documentId: user.id };
    final.push(obj);
  });
  return final;
};
