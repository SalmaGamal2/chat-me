import React, { useState, useEffect } from "react";
import { PlusCircle, XCircle } from "react-bootstrap-icons";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
  doc,
  getDoc,
  where,
  limit,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import styles from "./StoryApp.module.css";
import { db, auth } from "../../firebase";

const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "chatApp");

  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dec3jkvqs/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return data.secure_url;
  } catch (err) {
    console.error("Upload Error: ", err);
    return null;
  }
};

export default function StoryApp() {
  const [statuses, setStatuses] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [myStatus, setMyStatus] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "statuses"), orderBy("timestamp", "desc")),
      (snapshot) => {
        const data = snapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((status) => {
            const now = new Date();
            const expiryTimestamp = status.expiryTimestamp?.toDate();
            if (expiryTimestamp && expiryTimestamp < now) {
              deleteDoc(doc(db, "statuses", status.id));
              return false;
            }
            return true;
          });
        setStatuses(data);
      },
      (error) => {
        console.error("Error fetching statuses: ", error);
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchMyStatus = async () => {
      const q = query(
        collection(db, "statuses"),
        where("userId", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc"),
        limit(1)
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMyStatus(data[0]);
    };

    fetchMyStatus();
  }, [uploading]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    try {
      const imageUrl = await uploadImageToCloudinary(file);
      if (!imageUrl) throw new Error("Upload failed");

      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.exists() ? userSnap.data() : {};

      const expiryTimestamp = new Date();
      expiryTimestamp.setHours(expiryTimestamp.getHours() + 24);

      await addDoc(collection(db, "statuses"), {
        content: "",
        type: "image",
        imageUrl,
        timestamp: serverTimestamp(),
        expiryTimestamp: expiryTimestamp,
        userId: auth.currentUser.uid,
        username: userData.name || auth.currentUser.displayName || "Unknown",
        userAvatar: userData.avatar || auth.currentUser.photoURL || "",
      });

      alert("Status uploaded!");
    } catch (err) {
      console.error("Error uploading status:", err);
      alert("Upload failed!");
    }

    setUploading(false);
  };

  return (
    <div className={`p-3 ${styles.statusContainer}`}>
      <div className={`d-flex align-items-center ${styles.statusItem}`}>
        <div
          className={styles.myAvatarContainer}
          onClick={() => myStatus && setSelectedStatus(myStatus)}
        >
          <label htmlFor="statusUpload">
            <img
              src={
                myStatus?.imageUrl ||
                auth.currentUser?.photoURL ||
                "https://res.cloudinary.com/demo/image/upload/sample.jpg"
              }
              alt="My Status"
              className={styles.avatar}
              style={{ cursor: "pointer" }}
            />
            <PlusCircle className={styles.plusIcon} />
          </label>
          <input
            type="file"
            id="statusUpload"
            accept="image/*"
            onChange={handleFileChange}
            hidden
            disabled={uploading}
          />
        </div>
        <div className="ms-2">
          <p className="mb-0 fw-bold">My Status</p>
          <small className="text-muted">
            {myStatus ? "Tap to view or delete" : "Tap to add status update"}
          </small>
        </div>
      </div>

      <h6 className="mt-3 mb-2 " style={{ color: "rgb(109 25 135)" }}>
        Recent Updates
      </h6>
      {statuses
        .filter((status) => status.userId !== auth.currentUser.uid)
        .map((status) => (
          <div
            key={status.id}
            className={styles.statusItem}
            onClick={() => setSelectedStatus(status)}
          >
            <img
              src={
                status.type === "image" && status.imageUrl
                  ? status.imageUrl
                  : "https://via.placeholder.com/100"
              }
              alt={status.username}
              className={styles.avatar}
            />
            <div className="ms-2">
              <p className="mb-0 fw-bold">{status.username}</p>
              <small className="text-muted">
                {status.timestamp?.toDate().toLocaleString() || "Just now"}
              </small>
            </div>
          </div>
        ))}

      {selectedStatus && (
        <div className={styles.overlay}>
          <div className={styles.content}>
            <XCircle
              className={styles.closeIcon}
              onClick={() => setSelectedStatus(null)}
            />
            <img
              src={selectedStatus.imageUrl}
              alt={selectedStatus.username}
              className={styles.image}
            />
            <div className={styles.caption}>
              <h5>{selectedStatus.username}</h5>
              <small>
                {selectedStatus.timestamp?.toDate().toLocaleString() ||
                  "Just now"}
              </small>
            </div>

            {selectedStatus.userId === auth.currentUser.uid && (
              <button
                className="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x mb-3"
                onClick={async () => {
                  await deleteDoc(doc(db, "statuses", selectedStatus.id));
                  setStatuses(
                    statuses.filter((s) => s.id !== selectedStatus.id)
                  );
                  if (selectedStatus.id === myStatus?.id) setMyStatus(null);
                  setSelectedStatus(null);
                }}
              >
                Delete My Status
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
