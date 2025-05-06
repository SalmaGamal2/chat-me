import styles from "./HomePage.module.css";
import screen2 from "../../../assets/Screenshot (141).png";
import screen1 from "../../../assets/Screenshot (145).png";
import screen3 from "../../../assets/Screenshot (161).png";
import screen4 from "../../../assets/Screenshot (158).png";
import screen5 from "../../../assets/Screenshot (159).png";

import screen6 from "../../../assets/Screenshot (157).png";
import screen7 from "../../../assets/Screenshot (166).png";
import screen8 from "../../../assets/Screenshot (141).png";
import screen9 from "../../../assets/Screenshot (163).png";
import screen10 from "../../../assets/Screenshot (164).png";
import lap from "../../../assets/image-removebg-preview.png";
// import screen11 from "../../../assets/Screenshot (141).png";
import { FaShieldAlt, FaComments, FaPhotoVideo } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Testimonials from "../test/Testimonials";

// import img from "/src/assets/Screenshot (141).png";

export default function HomePage() {
  const images = [
    screen1,
    screen2,
    screen3,
    screen5,
    screen6,
    screen7,
    screen4,
    screen8,
    screen9,
    screen10,
    // screen11,
  ];

  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles.container}>
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${
          scrolled ? styles.scrolled : styles.navbar
        }`}
      >
        <div className="container">
          <a className={`navbar-brand ${styles.a}`} href="#">
            Chat me
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["Home", "About", "GaLLery", "Testimonials"].map(
                (item, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link" href={`#${item}`}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>

      <section id="Home" className={styles.banner}>
        <div className={styles.overlay}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
                <h1 className={styles.title}>Connect Instantly with</h1>
                <b className={styles.b}>Chat Me</b>
                <p className={styles.subtitle}>
                  Real-time messaging, media sharing, group chats & more — all
                  in one secure platform.
                </p>
                <div
                  className={`d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center gap-2 ${styles.storeButtons}`}
                >
                  <Link
                    to="/login"
                    className="btn btn-outline-info text-white px-4"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-outline-info text-white px-4"
                  >
                    Create an account
                  </Link>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 text-center">
                <img
                  src={lap}
                  alt="App Preview"
                  className="img-fluid"
                  style={{ width: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="About" className={styles.about}>
        <div className="container text-center">
          <h2 className="mb-4">Why ChatMe?</h2>
          <div className="row">
            {[
              {
                icon: <FaShieldAlt size={40} color="#6c63ff" />,
                title: "Secure Messaging",
                desc: "End-to-end encryption ensures your chats stay private.",
              },
              {
                icon: <FaComments size={40} color="#6c63ff" />,
                title: "Group Chats",
                desc: "Create and manage group conversations with ease.",
              },
              {
                icon: <FaPhotoVideo size={40} color="#6c63ff" />,
                title: "Media Sharing",
                desc: "Send and receive images, videos, and documents instantly.",
              },
            ].map((feature, index) => (
              <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
                <div className={styles.featureBox}>
                  <div className={`${styles.icons} mb-3`}>{feature.icon}</div>
                  <h5>{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="GaLLery" className={styles.container}>
        <h2 className="text-center mb-4">معرض الصور</h2>

        <div className={styles.imageGrid}>
          {images.map((img, index) => (
            <div
              key={index}
              className={styles.imageGridItem}
              onClick={() => openModal(img)}
            >
              <img src={img} alt={`screen-${index}`} />
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className={`${styles.modal} ${isModalOpen ? "open" : ""}`}>
            <div className={styles.modalContent}>
              <span className={styles.closeModal} onClick={closeModal}>
                &times;
              </span>
              <img src={selectedImage} alt="" />
            </div>
          </div>
        )}
      </div>
      <Testimonials />
      <footer className={styles.footer}>
        <div className="container text-center ">
          <p>&copy; 2025 ChatMe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
