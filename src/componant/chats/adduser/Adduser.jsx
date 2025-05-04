import { useEffect, useState } from "react";
import styles from "./Adduser.module.css";
import { db, auth } from "../../../firebase";
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next";

export default function Adduser({ onClose, setChats }) {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!currentUser) return;

    const fetchUsers = async () => {
      const snap = await getDocs(collection(db, "users"));
      const list = snap.docs
        .map((doc) => doc.data())
        .filter((u) => u.uid && u.uid !== currentUser.uid);
      setAllUsers(list);
    };

    fetchUsers();
  }, [currentUser]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = allUsers.filter((u) =>
      u.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleAddUser = async (user) => {
    if (!currentUser?.uid || !user?.uid) {
      console.warn("🚫 User data missing.");
      return;
    }

    try {
      const user1 = currentUser.uid;
      const user2 = user.uid;
      const chatId = user1 > user2 ? `${user1}_${user2}` : `${user2}_${user1}`;

      const chatRef = doc(db, "chats", chatId);
      const chatSnap = await getDoc(chatRef);

      if (!chatSnap.exists()) {
        await setDoc(chatRef, {
          users: [user1, user2],
          createdAt: new Date(),
        });
      }

      onClose();

      setChats((prevChats) => [
        ...prevChats,
        {
          users: [currentUser.uid, user.uid],
          documentId: chatId,
          name: user.displayName || user.name || user.email,
          photoURL: user.photoURL || "/src/assets/avatar.png",
        },
      ]);
    } catch (err) {
      console.error("❌ Error adding user:", err);
    }
  };

  const handleOverlayClick = () => {
    if (onClose) onClose();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.wrapper}>
        <div className={styles.Adduser} onClick={stopPropagation}>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <form className="row g-2" onSubmit={handleSearch}>
                <div className="col-12 col-sm-8">
                  <input
                    type="text"
                    placeholder={t("addUserSearchPlaceholder")}
                    name="email"
                    className={`form-control ${styles.input}`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="col-12 col-sm-4">
                  <button className={`w-100 ${styles.btn}`} type="submit">
                    {t("searchButton")}
                  </button>
                </div>
              </form>
            </div>

            <div className="col-12 col-md-8 mt-4">
              {searchTerm && filteredUsers.length === 0 ? (
                <p className="text-muted">{t("noUsers")}</p>
              ) : (
                filteredUsers.map((user) => (
                  <div
                    key={user.uid}
                    className={`d-flex justify-content-between align-items-center mb-2 ${styles.userBox}`}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={user.photoURL || "/src/assets/avatar.png"}
                        alt="avatar"
                        className={styles.img}
                      />
                      <b>{user.displayName || user.name || user.email}</b>
                    </div>
                    <button
                      className={styles.addBtn}
                      onClick={() => handleAddUser(user)}
                    >
                      {t("addUser")}
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
