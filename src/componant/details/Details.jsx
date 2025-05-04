// import { useContext, useState } from "react";
// import style from "./Details.module.css";
// import { useNavigate } from "react-router-dom";
// import useUserStore from "../../repos/useUserStore.JSX";
// import { ThemeContext } from "../../ThemeContext.js/ThemeProvider";
// import { useTranslation } from "react-i18next";
// import { db, auth } from "../../firebase";
// import { doc, setDoc, getDoc } from "firebase/firestore";
// import Swal from "sweetalert2";

// export default function Details({ user, sharedPhotos = [] }) {
//   const [isSettingsOpen, setIsSettingsOpen] = useState(true);
//   const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
//   const [isPhotosOpen, setIsPhotosOpen] = useState(false);
//   const [blocked, setBlocked] = useState(false);
//   const logout = useUserStore((state) => state.logout);
//   const { darkMode } = useContext(ThemeContext);
//   const navigate = useNavigate();
//   const { t } = useTranslation();

//   const checkBlocked = async () => {
//     const currentUser = auth.currentUser;
//     if (!currentUser || !user?.uid) return false;

//     const blockRef = doc(db, "blocks", `${currentUser.uid}_${user.uid}`);
//     const blockSnap = await getDoc(blockRef);

//     return blockSnap.exists();
//   };

//   const handleBlockUser = async () => {
//     const currentUser = auth.currentUser;
//     if (!currentUser || !user?.uid) return;

//     try {
//       const blockRef = doc(db, "blocks", `${currentUser.uid}_${user.uid}`);
//       await setDoc(blockRef, {
//         blockerId: currentUser.uid,
//         blockedId: user.uid,
//         createdAt: new Date(),
//       });
//       setBlocked(true);

//       Swal.fire({
//         icon: "success",
//         title: t("blockSuccessTitle"),
//         text: t("blockSuccessText"),
//       });
//     } catch (err) {
//       console.error("خطأ أثناء الحظر:", err);
//       Swal.fire({
//         icon: "error",
//         title: t("error"),
//         text: t("blockError"),
//       });
//     }
//   };

//   const handleSendMessage = async (message) => {
//     const isUserBlocked = await checkBlocked();
//     if (isUserBlocked) {
//       alert("لا يمكنك إرسال رسالة لهذا المستخدم.");
//       return;
//     }
//   };

//   return (
//     <>
//       <div
//         className={`offcanvas offcanvas-end ${
//           darkMode ? style.darkUserDetailsCanvas : style.userDetailsCanvas
//         }`}
//         tabIndex="-1"
//         id="userDetailsCanvas"
//         aria-labelledby="offcanvasLabel"
//         style={{}}
//       >
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title" id="offcanvasLabel">
//             {t("userDetails")}
//           </h5>
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>

//         <div className={`offcanvas-body ${style.details}`}>
//           <div
//             className="user d-flex flex-column align-items-center text-center"
//             id={style.user}
//           >
//             {blocked ? (
//               <div
//                 style={{
//                   width: "150px",
//                   height: "150px",
//                   backgroundColor: "gray",
//                   borderRadius: "50%",
//                 }}
//               ></div>
//             ) : (
//               <img
//                 src={user?.photoURL || "/src/assets/avatar.png"}
//                 alt="avatar"
//                 style={{
//                   width: "150px",
//                   height: "150px",
//                   borderRadius: "15PX",
//                 }}
//               />
//             )}
//             <h2>{user?.displayName || "No Name"}</h2>
//             <p>{user?.bio || "No bio available."}</p>
//           </div>

//           {/* Info Sections */}
//           <div className="info d-flex flex-column" id={style.info}>
//             {/* Chat Settings */}
//             <div className="option">
//               <div
//                 className="title d-flex align-items-center justify-content-between"
//                 onClick={() => setIsSettingsOpen(!isSettingsOpen)}
//               >
//                 <h5>{t("chatSettings")}</h5>
//                 <img
//                   src={`/src/assets/${
//                     isSettingsOpen ? "arrowUp" : "arrowDown"
//                   }.png`}
//                   alt="arrow"
//                   id={style.icons}
//                 />
//               </div>
//               {isSettingsOpen && (
//                 <div className={`collapsible ${isSettingsOpen ? "open" : ""}`}>
//                   <p>{t("chatSettings")}</p>
//                 </div>
//               )}
//             </div>

//             {/* Privacy & Help */}
//             <div className="option">
//               <div
//                 className="title d-flex align-items-center justify-content-between"
//                 onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}
//               >
//                 <h5>{t("privacyHelp")}</h5>
//                 <img
//                   src={`/src/assets/${
//                     isPrivacyOpen ? "arrowUp" : "arrowDown"
//                   }.png`}
//                   alt="arrow"
//                   id={style.icons}
//                 />
//               </div>
//               {isPrivacyOpen && (
//                 <div className={`collapsible ${isPrivacyOpen ? "open" : ""}`}>
//                   <p>{t("privacyHelp")}</p>
//                 </div>
//               )}
//             </div>

//             {/* Shared Photos */}
//             <div className="option">
//               <div
//                 className="title d-flex align-items-center justify-content-between"
//                 onClick={() => setIsPhotosOpen(!isPhotosOpen)}
//               >
//                 <h5>{t("sharedPhotos")}</h5>
//                 <img
//                   src={`/src/assets/${
//                     isPhotosOpen ? "arrowUp" : "arrowDown"
//                   }.png`}
//                   alt="arrow"
//                   id={style.icons}
//                 />
//               </div>
//               {isPhotosOpen && (
//                 <div className={`collapsible ${isPhotosOpen ? "open" : ""}`}>
//                   <div
//                     className="photoes d-flex flex-column"
//                     id={style.photoes}
//                   >
//                     {sharedPhotos.length > 0 ? (
//                       sharedPhotos.map((msg, index) => (
//                         <div
//                           key={index}
//                           className="photoItem d-flex align-items-center justify-content-between"
//                           id={style.photoItem}
//                         >
//                           <div className="photo-detail d-flex align-items-center gap-2">
//                             <img
//                               src={msg.img}
//                               alt={`shared-${index}`}
//                               id={style.photoImg}
//                             />
//                             <b id={style.b}>{`${t("photo")} ${index + 1}`}</b>
//                           </div>
//                           <a href={msg.img} download>
//                             <img
//                               src="/src/assets/download.png"
//                               alt="download"
//                               id={style.downloadIcon}
//                             />
//                           </a>
//                         </div>
//                       ))
//                     ) : (
//                       <p>{t("noPhotos")}</p>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <button className="btn btn-danger mt-4" onClick={handleBlockUser}>
//               {t("blockUser")}
//             </button>
//             <button
//               onClick={() => {
//                 logout();
//                 navigate("/login");
//               }}
//               className="btn btn-info mt-1"
//               type="button"
//             >
//               {t("logout")}
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { useContext, useState } from "react";
import style from "./Details.module.css";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../repos/useUserStore.JSX";
import { ThemeContext } from "../../ThemeContext.js/ThemeProvider";
import { useTranslation } from "react-i18next";
import { db, auth } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";

import avatarImage from "../../assets/avatar.png";
import arrowUpImage from "../../assets/arrowUp.png";
import arrowDownImage from "../../assets/arrowDown.png";
import downloadImage from "../../assets/download.png";

export default function Details({ user, sharedPhotos = [] }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isPhotosOpen, setIsPhotosOpen] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const logout = useUserStore((state) => state.logout);
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const checkBlocked = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser || !user?.uid) return false;

    const blockRef = doc(db, "blocks", `${currentUser.uid}_${user.uid}`);
    const blockSnap = await getDoc(blockRef);

    return blockSnap.exists();
  };

  const handleBlockUser = async () => {
    const currentUser = auth.currentUser;
    if (!currentUser || !user?.uid) return;

    try {
      const blockRef = doc(db, "blocks", `${currentUser.uid}_${user.uid}`);
      await setDoc(blockRef, {
        blockerId: currentUser.uid,
        blockedId: user.uid,
        createdAt: new Date(),
      });
      setBlocked(true);

      Swal.fire({
        icon: "success",
        title: t("blockSuccessTitle"),
        text: t("blockSuccessText"),
      });
    } catch (err) {
      console.error("خطأ أثناء الحظر:", err);
      Swal.fire({
        icon: "error",
        title: t("error"),
        text: t("blockError"),
      });
    }
  };

  const handleSendMessage = async (message) => {
    const isUserBlocked = await checkBlocked();
    if (isUserBlocked) {
      alert("لا يمكنك إرسال رسالة لهذا المستخدم.");
      return;
    }
  };

  return (
    <>
      <div
        className={`offcanvas offcanvas-end ${
          darkMode ? style.darkUserDetailsCanvas : style.userDetailsCanvas
        }`}
        tabIndex="-1"
        id="userDetailsCanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">
            {t("userDetails")}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className={`offcanvas-body ${style.details}`}>
          <div
            className="user d-flex flex-column align-items-center text-center"
            id={style.user}
          >
            {blocked ? (
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "gray",
                  borderRadius: "50%",
                }}
              ></div>
            ) : (
              <img
                src={user?.photoURL || avatarImage}
                alt="avatar"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "15PX",
                }}
              />
            )}
            <h2>{user?.displayName || "No Name"}</h2>
            <p>{user?.bio || "No bio available."}</p>
          </div>

          {/* Info Sections */}
          <div className="info d-flex flex-column" id={style.info}>
            {/* Chat Settings */}
            <div className="option">
              <div
                className="title d-flex align-items-center justify-content-between"
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              >
                <h5>{t("chatSettings")}</h5>
                <img
                  src={isSettingsOpen ? arrowUpImage : arrowDownImage}
                  alt="arrow"
                  id={style.icons}
                />
              </div>
              {isSettingsOpen && (
                <div className={`collapsible ${isSettingsOpen ? "open" : ""}`}>
                  <p>{t("chatSettings")}</p>
                </div>
              )}
            </div>

            {/* Privacy & Help */}
            <div className="option">
              <div
                className="title d-flex align-items-center justify-content-between"
                onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}
              >
                <h5>{t("privacyHelp")}</h5>
                <img
                  src={isPrivacyOpen ? arrowUpImage : arrowDownImage}
                  alt="arrow"
                  id={style.icons}
                />
              </div>
              {isPrivacyOpen && (
                <div className={`collapsible ${isPrivacyOpen ? "open" : ""}`}>
                  <p>{t("privacyHelp")}</p>
                </div>
              )}
            </div>

            {/* Shared Photos */}
            <div className="option">
              <div
                className="title d-flex align-items-center justify-content-between"
                onClick={() => setIsPhotosOpen(!isPhotosOpen)}
              >
                <h5>{t("sharedPhotos")}</h5>
                <img
                  src={isPhotosOpen ? arrowUpImage : arrowDownImage}
                  alt="arrow"
                  id={style.icons}
                />
              </div>
              {isPhotosOpen && (
                <div className={`collapsible ${isPhotosOpen ? "open" : ""}`}>
                  <div
                    className="photoes d-flex flex-column"
                    id={style.photoes}
                  >
                    {sharedPhotos.length > 0 ? (
                      sharedPhotos.map((msg, index) => (
                        <div
                          key={index}
                          className="photoItem d-flex align-items-center justify-content-between"
                          id={style.photoItem}
                        >
                          <div className="photo-detail d-flex align-items-center gap-2">
                            <img
                              src={msg.img}
                              alt={`shared-${index}`}
                              id={style.photoImg}
                            />
                            <b id={style.b}>{`${t("photo")} ${index + 1}`}</b>
                          </div>
                          <a href={msg.img} download>
                            <img
                              src={downloadImage}
                              alt="download"
                              id={style.downloadIcon}
                            />
                          </a>
                        </div>
                      ))
                    ) : (
                      <p>{t("noPhotos")}</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <button className="btn btn-danger mt-4" onClick={handleBlockUser}>
              {t("blockUser")}
            </button>
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="btn btn-info mt-1"
              type="button"
            >
              {t("logout")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
