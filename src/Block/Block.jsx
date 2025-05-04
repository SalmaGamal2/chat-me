import { useState, useEffect } from "react";
import { Button, Card, ListGroup, Alert, Spinner } from "react-bootstrap";
import { auth, db } from "../firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { useTranslation } from "react-i18next";
export default function Block() {
  const { t } = useTranslation();
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkBlocked = async (blockedId) => {
    const currentUser = auth.currentUser;
    if (!currentUser || !blockedId) return false;

    const blockRef = doc(db, "blocks", `${currentUser.uid}_${blockedId}`);
    const blockSnap = await getDoc(blockRef);
    return blockSnap.exists();
  };

  const fetchBlockedUsers = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    setLoading(true);
    setError(null);

    try {
      const usersSnapshot = await getDocs(collection(db, "users"));
      const blockedList = [];

      for (let docSnap of usersSnapshot.docs) {
        const user = { id: docSnap.id, ...docSnap.data() };

        if (user.id === currentUser.uid) continue;

        const isBlocked = await checkBlocked(user.id);
        if (isBlocked) {
          blockedList.push(user);
        }
      }

      setBlockedUsers(blockedList);
    } catch (err) {
      console.error(err);
      setError("حدث خطأ أثناء جلب المستخدمين المحظورين.");
    }

    setLoading(false);
  };

  const handleUnblock = async (userId) => {
    const currentUser = auth.currentUser;
    if (!currentUser || !userId) return;

    setLoading(true);
    setError(null);

    try {
      const blockRef = doc(db, "blocks", `${currentUser.uid}_${userId}`);
      await deleteDoc(blockRef);
      await fetchBlockedUsers();
    } catch (err) {
      console.error(err);
      setError("حدث خطأ أثناء محاولة إلغاء الحظر.");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchBlockedUsers();
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
