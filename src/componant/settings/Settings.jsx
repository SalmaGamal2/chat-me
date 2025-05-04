import React, { useRef, useState } from "react";
import styles from "./Settings.module.css";
import { Card } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserStore from "../../repos/useUserStore.JSX";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t } = useTranslation();
  const currentUser = useUserStore((state) => state.currentUser);
  const updateUserField = useUserStore((state) => state.updateUserField);

  const [image, setImage] = useState(currentUser?.photoURL || null);
  const fileInput = useRef(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [name, setName] = useState(currentUser?.name || "");
  const [about, setAbout] = useState(currentUser?.about || "");

  const handleImageClick = () => fileInput.current.click();

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
      toast.error(t("uploadFailed"), { position: "bottom-right" });
      return null;
    }
  };

  const updateUserData = async (field, value) => {
    if (!currentUser?.uid) return;
    try {
      await updateDoc(doc(db, "users", currentUser.uid), {
        [field]: value,
      });
      updateUserField(field, value);
      toast.success(t("changesSaved"), { position: "bottom-right" });
    } catch (err) {
      toast.error(t("errorSaving"), { position: "bottom-right" });
      console.error(err);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = await uploadImageToCloudinary(file);
      if (url) {
        setImage(url);
        updateUserData("photoURL", url);
      }
    }
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.ProfileImage} onClick={handleImageClick}>
        {image ? (
          <img
            src={image}
            alt="profile"
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <div>
            📷
            <br />
            {t("addImage")}
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInput}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>

      <Card className="text-end border-0 bg-transparent">
        <Card.Body>
          <Card.Title className="mb-1 fw-bold" id={styles.title}>
            {t("yourName")}
          </Card.Title>
          <div className="d-flex justify-content-center align-items-center">
            {isEditingName ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => {
                  setIsEditingName(false);
                  updateUserData("name", name);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setIsEditingName(false);
                    updateUserData("name", name);
                  }
                }}
                autoFocus
                className="form-control me-2"
              />
            ) : (
              <>
                <b className={styles.b}>{name}</b>
                <PencilSquare
                  className={styles.editIcon}
                  onClick={() => setIsEditingName(true)}
                />
              </>
            )}
          </div>
        </Card.Body>
      </Card>

      <Card className="text-end border-0 bg-transparent mt-3">
        <Card.Body>
          <Card.Title className="mb-1 fw-bold" id={styles.title}>
            {t("about")}
          </Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            {isEditingAbout ? (
              <input
                type="text"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                onBlur={() => {
                  setIsEditingAbout(false);
                  updateUserData("about", about);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setIsEditingAbout(false);
                    updateUserData("about", about);
                  }
                }}
                autoFocus
                className="form-control me-2"
              />
            ) : (
              <>
                <b className={styles.b}>{about}</b>
                <PencilSquare
                  className={styles.editIcon}
                  onClick={() => setIsEditingAbout(true)}
                />
              </>
            )}
          </div>
        </Card.Body>
      </Card>

      <ToastContainer />
    </div>
  );
}
