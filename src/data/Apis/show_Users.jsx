import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const showUser = async (user_id) => {
  const docRef = doc(db, "users", user_id);
  const userData = await getDoc(docRef);

  if (userData.exists()) {
    return { ...userData.data(), id: userData.id };
  } else {
    console.log("No such document!");
    return null;
  }
};
