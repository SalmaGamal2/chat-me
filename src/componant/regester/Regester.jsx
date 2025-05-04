import { useState } from "react";
import styles from "./Regester.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Regester() {
  const [avatar, setAvatar] = useState({ file: null, url: "" });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegester = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: username,
        photoURL: avatar.url || "",
      });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        id: user.uid,
        name: username,
        email: user.email,
        displayName: user.displayName || username,
        photoURL: avatar.url || "",
        blocked: [],
        createdAt: Date.now(),
      });

      toast.success("Registration successful!");
    } catch (error) {
      console.error("Error registering user:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className={`container ${styles.registerContainer}`}>
      <div className="row">
        <div className={`col-lg-6 col-12 ${styles.registerForm}`}>
          <h3>Create Account</h3>
          <form onSubmit={handleRegester}>
            <div className="mb-3">
              <img
                src={avatar.url || "/src/assets/avatar.png"}
                id={styles.img}
                alt="Avatar"
              />
              <label htmlFor="file">Upload an Image</label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={handleAvatar}
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Full Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button className={`btn w-100 text-white ${styles.btnRegister}`}>
              Register
            </button>
            <div className={`mt-3 text-end ${styles.already}`}>
              Already have an account? <a href="/login">Login</a>
            </div>
          </form>
        </div>

        <div
          className={`col-lg-6 col-12 d-flex flex-column justify-content-center text-center ${styles.welcomeSection}`}
        >
          <h2>Welcome Back!</h2>
          <p>To keep connected with us, please login with your personal info</p>
          <a href="/login" className={`btn mt-2 px-4 ${styles.btnLogin}`}>
            Sign In
          </a>
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
