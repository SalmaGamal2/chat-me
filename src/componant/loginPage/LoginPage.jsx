// import { useState } from "react";
// import styles from "./LoginPage.module.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";
// import { useNavigate } from "react-router-dom"; // ✅

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // ✅

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // تحقق من الحقول الفارغة
//     if (!email || !password) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     try {
//       // ✅ تسجيل الدخول باستخدام Firebase
//       await signInWithEmailAndPassword(auth, email, password);
//       toast.success("Login successful!");

//       // ✅ التحويل إلى صفحة الشات بعد تسجيل الدخول
//       navigate("/chats"); // تغيير "/chat" حسب المسار الخاص بك
//     } catch (error) {
//       console.error("Login error:", error.message);

//       // عرض رسائل الخطأ حسب نوعه
//       if (error.code === "auth/user-not-found") {
//         toast.error("User not found. Please register first.");
//       } else if (error.code === "auth/wrong-password") {
//         toast.error("Incorrect password.");
//       } else {
//         toast.error("Failed to login. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className={`container ${styles.loginContainer}`}>
//       <div className="row">
//         <div className={`col-lg-6 col-12 ${styles.loginForm}`}>
//           <h3>Sign In</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <button
//               type="submit"
//               className={`btn w-100 text-white ${styles.btnLogin}`}
//             >
//               Sign In
//             </button>
//             <div
//               className={`mt-3 d-flex justify-content-between ${styles.rememberMe}`}
//             >
//               <div>
//                 <input type="checkbox" id="remember" />
//                 <label htmlFor="remember"> Remember Me</label>
//               </div>
//               <a href="#">Forgot Password</a>
//             </div>
//           </form>
//         </div>

//         {/* Right Side: Welcome Section */}
//         <div
//           className={`col-lg-6 col-12 d-flex flex-column justify-content-center text-center ${styles.welcomeSection}`}
//         >
//           <h2>Welcome to login</h2>
//           <p>Don't have an account?</p>
//           <button className={`btn mt-2 px-4 ${styles.btnSignup}`}>
//             <a href="/register">Sign up</a>
//           </button>
//         </div>
//       </div>

//       {/* Toast container */}
//       <ToastContainer
//         position="bottom-right"
//         autoClose={3000}
//         theme="colored"
//       />
//     </div>
//   );
// }

// import { useState } from "react";
// import styles from "./LoginPage.module.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";
// import { useNavigate } from "react-router-dom";
// import { useUserStore } from "../..";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { setUser } = useUserStore();
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     try {
//       // ✅ تسجيل الدخول والحصول على بيانات المستخدم
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // ✅ تخزين بيانات المستخدم في Zustand
//       setUser({
//         uid: user.uid,
//         id: user.uid,
//         name: user.displayName || "No Name",

//         email: user.email,
//         photo: user.photoURL || "", // ممكن يكون null
//         blocked: [],
//       });

//       toast.success("Login successful!");

//       // ✅ التحويل إلى صفحة الشات
//       navigate("/chats");
//     } catch (error) {
//       console.error("Login error:", error.message);

//       if (error.code === "auth/user-not-found") {
//         toast.error("User not found. Please register first.");
//       } else if (error.code === "auth/wrong-password") {
//         toast.error("Incorrect password.");
//       } else {
//         toast.error("Failed to login. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className={`container ${styles.loginContainer}`}>
//       <div className="row">
//         <div className={`col-lg-6 col-12 ${styles.loginForm}`}>
//           <h3>Sign In</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <button
//               type="submit"
//               className={`btn w-100 text-white ${styles.btnLogin}`}
//             >
//               Sign In
//             </button>
//             <div
//               className={`mt-3 d-flex justify-content-between ${styles.rememberMe}`}
//             >
//               <div>
//                 <input type="checkbox" id="remember" />
//                 <label htmlFor="remember"> Remember Me</label>
//               </div>
//               <a href="#">Forgot Password</a>
//             </div>
//           </form>
//         </div>

//         {/* Right Side */}
//         <div
//           className={`col-lg-6 col-12 d-flex flex-column justify-content-center text-center ${styles.welcomeSection}`}
//         >
//           <h2>Welcome to login</h2>
//           <p>Don't have an account?</p>
//           <button className={`btn mt-2 px-4 ${styles.btnSignup}`}>
//             <a href="/register">Sign up</a>
//           </button>
//         </div>
//       </div>

//       <ToastContainer
//         position="bottom-right"
//         autoClose={3000}
//         theme="colored"
//       />
//     </div>
//   );
// }
// الاخير شغال

// import { useState } from "react";
// import styles from "./LoginPage.module.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// import { useUserStore } from "../..";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { setUser } = useUserStore();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     try {
//       // تسجيل الدخول
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // جلب بيانات المستخدم من Firestore
//       const userRef = doc(db, "users", user.uid);
//       const userSnap = await getDoc(userRef);

//       if (!userSnap.exists()) {
//         toast.error("User profile not found in database.");
//         return;
//       }

//       const userData = userSnap.data();

//       // تخزين البيانات في Zustand
//       setUser({
//         uid: userData.uid,
//         id: userData.id,
//         name: userData.name || userData.displayName || "No Name",
//         email: userData.email,
//         photo: userData.photoURL || userData.photo || "",
//         blocked: userData.blocked || [],
//       });

//       toast.success("Login successful!");
//       navigate("/chats");
//     } catch (error) {
//       console.error("Login error:", error.message);

//       if (error.code === "auth/user-not-found") {
//         toast.error("User not found. Please register first.");
//       } else if (error.code === "auth/wrong-password") {
//         toast.error("Incorrect password.");
//       } else {
//         toast.error("Failed to login. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className={`container ${styles.loginContainer}`}>
//       <div className="row">
//         {/* Form side */}
//         <div className={`col-lg-6 col-12 ${styles.loginForm}`}>
//           <h3>Sign In</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <button
//               type="submit"
//               className={`btn w-100 text-white ${styles.btnLogin}`}
//             >
//               Sign In
//             </button>
//             <div
//               className={`mt-3 d-flex justify-content-between ${styles.rememberMe}`}
//             >
//               <div>
//                 <input type="checkbox" id="remember" />
//                 <label htmlFor="remember"> Remember Me</label>
//               </div>
//               <a href="#">Forgot Password</a>
//             </div>
//           </form>
//         </div>

//         {/* Right side */}
//         <div
//           className={`col-lg-6 col-12 d-flex flex-column justify-content-center text-center ${styles.welcomeSection}`}
//         >
//           <h2>Welcome to login</h2>
//           <p>Don't have an account?</p>
//           <button className={`btn mt-2 px-4 ${styles.btnSignup}`}>
//             <a href="/register">Sign up</a>
//           </button>
//         </div>
//       </div>

//       <ToastContainer
//         position="bottom-right"
//         autoClose={3000}
//         theme="colored"
//       />
//     </div>
//   );
// }
// import { useState, useEffect } from "react";
// import styles from "./LoginPage.module.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
// import useUserStore from "../.."; // تعديل المسار حسب مكان `zustand`

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const setCurrentUser = useUserStore((state) => state.setCurrentUser); // تعديل اسم الدالة

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     try {
//       // تسجيل الدخول
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // جلب بيانات المستخدم من Firestore
//       const userRef = doc(db, "users", user.uid);
//       const userSnap = await getDoc(userRef);

//       if (!userSnap.exists()) {
//         toast.error("User profile not found in database.");
//         return;
//       }

//       const userData = userSnap.data();

//       // تخزين البيانات في Zustand
//       setCurrentUser({
//         uid: user.uid,
//         name: userData.name || user.displayName || "No Name",
//         email: user.email,
//         about: userData.about || "",
//         photoURL: userData.photoURL || "",
//         blocked: userData.blocked || [],
//       });

//       toast.success("Login successful!");
//       navigate("/chats"); // التوجيه بعد تسجيل الدخول
//     } catch (error) {
//       console.error("Login error:", error.message);

//       if (error.code === "auth/user-not-found") {
//         toast.error("User not found. Please register first.");
//       } else if (error.code === "auth/wrong-password") {
//         toast.error("Incorrect password.");
//       } else {
//         toast.error("Failed to login. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className={`container ${styles.loginContainer}`}>
//       <div className="row">
//         {/* Form side */}
//         <div className={`col-lg-6 col-12 ${styles.loginForm}`}>
//           <h3>Sign In</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <button
//               type="submit"
//               className={`btn w-100 text-white ${styles.btnLogin}`}
//             >
//               Sign In
//             </button>
//             <div
//               className={`mt-3 d-flex justify-content-between ${styles.rememberMe}`}
//             >
//               <div>
//                 <input type="checkbox" id="remember" />
//                 <label htmlFor="remember"> Remember Me</label>
//               </div>
//               <a href="#">Forgot Password</a>
//             </div>
//           </form>
//         </div>

//         {/* Right side */}
//         <div
//           className={`col-lg-6 col-12 d-flex flex-column justify-content-center text-center ${styles.welcomeSection}`}
//         >
//           <h2>Welcome to login</h2>
//           <p>Don't have an account?</p>
//           <button className={`btn mt-2 px-4 ${styles.btnSignup}`}>
//             <a href="/register">Sign up</a>
//           </button>
//         </div>
//       </div>

//       <ToastContainer
//         position="bottom-right"
//         autoClose={3000}
//         theme="colored"
//       />
//     </div>
//   );
// }
import { useState } from "react";
import styles from "./LoginPage.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../firebase";
// تأكد من إلغاء تعليق استيراد auth و db إذا كنت بحاجة إليها
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase"; // تأكد من إضافة هذه الاستيرادات
import useUserStore from "../../repos/useUserStore.JSX";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setCurrentUser = useUserStore((state) => state.setCurrentUser); // استخدام useUserStore هنا

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        toast.error("User profile not found in database.");
        return;
      }

      const userData = userSnap.data();

      // تحديث المستخدم في zustand
      setCurrentUser({
        uid: user.uid,
        email: user.email,
        name: userData.name || user.displayName || "No Name",
        about: userData.about || "",
        photoURL: userData.photoURL || "",
        blocked: userData.blocked || [],
      });

      toast.success("Login successful!");
      navigate("/chats"); // التنقل إلى صفحة الدردشة بعد تسجيل الدخول
    } catch (error) {
      console.error("Login error:", error.message);
      if (error.code === "auth/user-not-found") {
        toast.error("User not found. Please register first.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password.");
      } else {
        toast.error("Failed to login. Please try again.");
      }
    }
  };

  return (
    <div className={`container ${styles.loginContainer}`}>
      <div className="row">
        {/* Form side */}
        <div className={`col-lg-6 col-12 ${styles.loginForm}`}>
          <h3>Sign In</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className={`btn w-100 text-white ${styles.btnLogin}`}
            >
              Sign In
            </button>
            <div
              className={`mt-3 d-flex justify-content-between ${styles.rememberMe}`}
            >
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember"> Remember Me</label>
              </div>
              <a href="#">Forgot Password</a>
            </div>
          </form>
        </div>

        {/* Right side */}
        <div
          className={`col-lg-6 col-12 d-flex flex-column justify-content-center text-center ${styles.welcomeSection}`}
        >
          <h2>Welcome to login</h2>
          <p>Don't have an account?</p>
          <button className={`btn mt-2 px-4 ${styles.btnSignup}`}>
            <a href="/register">Sign up</a>
          </button>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
      />
    </div>
  );
}
