// import { useState, useEffect } from "react";
// import { Button, Card, ListGroup, Alert } from "react-bootstrap"; // استيراد مكونات Bootstrap

// export default function Block() {
//   const [blockedUsers, setBlockedUsers] = useState([]);

//   useEffect(() => {
//     // محاكاة تحميل البيانات (يمكنك استبداله ب API أو قاعدة بيانات)
//     const fetchBlockedUsers = () => {
//       const users = [
//         { id: 1, name: "John Doe" },
//         { id: 2, name: "Jane Smith" },
//       ];
//       setBlockedUsers(users);
//     };

//     fetchBlockedUsers();
//   }, []);

//   const handleUnblock = (userId) => {
//     console.log("Unblocking user with ID:", userId);
//     setBlockedUsers(blockedUsers.filter((user) => user.id !== userId)); // حذف المستخدم من القائمة
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">الأشخاص المحظورين</h1>

//       {/* في حال عدم وجود مستخدمين محظورين */}
//       {blockedUsers.length === 0 ? (
//         <Alert variant="info">لا يوجد أشخاص محظورين حالياً</Alert>
//       ) : (
//         <Card>
//           <Card.Body>
//             <ListGroup variant="flush">
//               {blockedUsers.map((user) => (
//                 <ListGroup.Item
//                   key={user.id}
//                   className="d-flex justify-content-between align-items-center"
//                 >
//                   <span>{user.name}</span>
//                   <Button
//                     variant="danger"
//                     onClick={() => handleUnblock(user.id)}
//                   >
//                     إلغاء الحظر
//                   </Button>
//                 </ListGroup.Item>
//               ))}
//             </ListGroup>
//           </Card.Body>
//         </Card>
//       )}
//     </div>
//   );
// }
// import { useState, useEffect } from "react";
// import { Button, Card, ListGroup, Alert, Spinner } from "react-bootstrap";
// import { auth, db } from "../firebase"; // تأكد أن هذا المسار صحيح حسب مشروعك
// import {
//   collection,
//   getDocs,
//   doc,
//   getDoc,
//   deleteDoc,
// } from "firebase/firestore";
// import { useTranslation } from "react-i18next";

// export default function Block() {
//     const {t}  = useTranslation ();

//   const [blockedUsers, setBlockedUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // التحقق مما إذا كان المستخدم محظورًا
//   const checkBlocked = async (blockedId) => {
//     const currentUser = auth.currentUser;
//     if (!currentUser || !blockedId) return false;

//     const blockRef = doc(db, "blocks", `${currentUser.uid}_${blockedId}`);
//     const blockSnap = await getDoc(blockRef);
//     return blockSnap.exists();
//   };

//   // جلب المستخدمين المحظورين من قاعدة البيانات
//   const fetchBlockedUsers = async () => {
//     const currentUser = auth.currentUser;
//     if (!currentUser) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const usersSnapshot = await getDocs(collection(db, "users"));
//       const blockedList = [];

//       for (let docSnap of usersSnapshot.docs) {
//         const user = { id: docSnap.id, ...docSnap.data() };

//         if (user.id === currentUser.uid) continue; // لا نعرض المستخدم الحالي

//         const isBlocked = await checkBlocked(user.id);
//         if (isBlocked) {
//           blockedList.push(user);
//         }
//       }

//       setBlockedUsers(blockedList);
//     } catch (err) {
//       console.error(err);
//       setError("حدث خطأ أثناء جلب المستخدمين المحظورين.");
//     }

//     setLoading(false);
//   };

//   // إلغاء الحظر
//   const handleUnblock = async (userId) => {
//     const currentUser = auth.currentUser;
//     if (!currentUser || !userId) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const blockRef = doc(db, "blocks", `${currentUser.uid}_${userId}`);
//       await deleteDoc(blockRef);

//       // تحديث القائمة بعد الإلغاء
//       await fetchBlockedUsers();
//     } catch (err) {
//       console.error(err);
//       setError("حدث خطأ أثناء محاولة إلغاء الحظر.");
//     }

//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchBlockedUsers();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">الأشخاص المحظورين</h1>

//       {error && <Alert variant="danger">{error}</Alert>}

//       {loading ? (
//         <div className="text-center">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : blockedUsers.length === 0 ? (
//         <Alert variant="info">لا يوجد أشخاص محظورين حالياً</Alert>
//       ) : (
//         <Card>
//           <Card.Body>
//             <ListGroup variant="flush">
//               {blockedUsers.map((user) => (
//                 <ListGroup.Item
//                   key={user.id}
//                   className="d-flex justify-content-between align-items-center"
//                 >
//                   <span>{user.name}</span>
//                   <Button
//                     variant="danger"
//                     onClick={() => handleUnblock(user.id)}
//                     disabled={loading}
//                   >
//                     {loading ? "جارٍ الإلغاء..." : "إلغاء الحظر"}
//                   </Button>
//                 </ListGroup.Item>
//               ))}
//             </ListGroup>
//           </Card.Body>
//         </Card>
//       )}
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { Button, Card, ListGroup, Alert, Spinner } from "react-bootstrap";
import { auth, db } from "../firebase"; // تأكد من صحة المسار حسب مشروعك
import {
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { useTranslation } from "react-i18next"; // استيراد الترجمة

export default function Block() {
  const { t } = useTranslation(); // استخدام دالة الترجمة

  const [blockedUsers, setBlockedUsers] = useState([]); // قائمة المستخدمين المحظورين
  const [loading, setLoading] = useState(false); // حالة التحميل
  const [error, setError] = useState(null); // تخزين الأخطاء

  // دالة للتحقق مما إذا كان المستخدم محظورًا
  const checkBlocked = async (blockedId) => {
    const currentUser = auth.currentUser;
    if (!currentUser || !blockedId) return false;

    const blockRef = doc(db, "blocks", `${currentUser.uid}_${blockedId}`);
    const blockSnap = await getDoc(blockRef);
    return blockSnap.exists(); // هل يوجد سجل حظر في قاعدة البيانات
  };

  // دالة لجلب قائمة المستخدمين المحظورين من قاعدة البيانات
  const fetchBlockedUsers = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    setLoading(true);
    setError(null);

    try {
      const usersSnapshot = await getDocs(collection(db, "users")); // جلب كل المستخدمين من قاعدة البيانات
      const blockedList = [];

      for (let docSnap of usersSnapshot.docs) {
        const user = { id: docSnap.id, ...docSnap.data() };

        if (user.id === currentUser.uid) continue; // تجاهل المستخدم الحالي

        const isBlocked = await checkBlocked(user.id);
        if (isBlocked) {
          blockedList.push(user); // أضف المستخدم إلى القائمة إذا كان محظورًا
        }
      }

      setBlockedUsers(blockedList); // تحديث الحالة
    } catch (err) {
      console.error(err);
      setError("حدث خطأ أثناء جلب المستخدمين المحظورين.");
    }

    setLoading(false);
  };

  // دالة لإلغاء حظر مستخدم
  const handleUnblock = async (userId) => {
    const currentUser = auth.currentUser;
    if (!currentUser || !userId) return;

    setLoading(true);
    setError(null);

    try {
      const blockRef = doc(db, "blocks", `${currentUser.uid}_${userId}`);
      await deleteDoc(blockRef); // حذف سجل الحظر من قاعدة البيانات

      await fetchBlockedUsers(); // تحديث القائمة بعد الإلغاء
    } catch (err) {
      console.error(err);
      setError("حدث خطأ أثناء محاولة إلغاء الحظر.");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchBlockedUsers(); // تنفيذ الدالة عند تحميل الصفحة
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{t("blocked_users_title")}</h1>

      {error && <Alert variant="danger">{error}</Alert>}

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : blockedUsers.length === 0 ? (
        <Alert variant="info">{t("no_blocked_users")}</Alert>
      ) : (
        <Card>
          <Card.Body>
            <ListGroup variant="flush">
              {blockedUsers.map((user) => (
                <ListGroup.Item
                  key={user.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <span>{user.name}</span>
                  <Button
                    variant="danger"
                    onClick={() => handleUnblock(user.id)}
                    disabled={loading}
                  >
                    {loading ? t("unblocking") : t("unblock")}
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
