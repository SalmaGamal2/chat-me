// import { collection, getDocs } from "firebase/firestore";
// import db from "../../firebase";
// import { doc, getDoc } from "firebase/firestore";

// export const showUser = async (user_id) => {
//   let final = {};
//   const docRef = doc(db, "users", user_id);
//   const userData = await getDoc(docRef);
//   final = { ...userData.data(), id: userData.id };

//   if (userData.exists()) {
//   } else {
//     // docSnap.data() will be undefined in this case
//     console.log("No such document!");
//   }

//   return final;
// };

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
