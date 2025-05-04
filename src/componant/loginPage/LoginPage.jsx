import { useState } from "react";
import styles from "./LoginPage.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import useUserStore from "../../repos/useUserStore.JSX";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setCurrentUser = useUserStore((state) => state.setCurrentUser);

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

      setCurrentUser({
        uid: user.uid,
        email: user.email,
        name: userData.name || user.displayName || "No Name",
        about: userData.about || "",
        photoURL: userData.photoURL || "",
        blocked: userData.blocked || [],
      });

      toast.success("Login successful!");
      navigate("/chats");
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
