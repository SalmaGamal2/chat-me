// import { collection, onSnapshot } from "firebase/firestore";
// import db from "../../firebase";

// export const getLive = () => {

// const q = query(, where("state", "==", "CA"));
//   onSnapshot(collection(db, "users"), (usersSnapshot) => {
//     let final = [];
//     usersSnapshot.forEach((user) => {
//       let obj = { ...user.data(), documentId: user.id };
//       final.push(obj);
//     });
//     //   setChats(final);
//     return final;
//     // getLive();
//   });
// };
