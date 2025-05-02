import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./Testimonials.module.css";
export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", text: "", rating: 0 });
  const [filterStars, setFilterStars] = useState(0); // 0 = All

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  const handleRating = (rate) => {
    setForm({ ...form, rating: rate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.text && form.rating > 0) {
      const newReviews = [form, ...reviews];
      setReviews(newReviews);
      localStorage.setItem("reviews", JSON.stringify(newReviews));
      setForm({ name: "", text: "", rating: 0 });
    }
  };

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        ).toFixed(1)
      : 0;

  return (
    <div id="Testimonials" className="container py-5">
      <h2 className="text-center mb-4">User Reviews</h2>

      {/* Average Rating */}
      <div className="text-center mb-3">
        <h4>
          Average Rating:{" "}
          <span style={{ color: "#ffc107" }}>{averageRating} ★</span>
        </h4>
      </div>

      {/* Star Filter */}
      <div className="text-center mb-4">
        <label className="me-2">Filter by stars:</label>
        {[0, 5, 4, 3, 2, 1].map((num) => (
          <button
            key={num}
            className="btn btn-sm me-2"
            style={{
              backgroundColor: filterStars === num ? "#6c63ff" : "#e4e4e4",
              color: filterStars === num ? "white" : "black",
              borderRadius: "20px",
              border: "none",
            }}
            onClick={() => setFilterStars(num)}
          >
            {num === 0 ? "All" : `${num}★`}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-4 text-center">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Your review..."
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
        ></textarea>
        <div className="mb-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <FaStar
              key={num}
              size={25}
              color={num <= form.rating ? "#ffc107" : "#ccc"}
              style={{ cursor: "pointer" }}
              onClick={() => handleRating(num)}
            />
          ))}
        </div>
        <button className="btn btn-primary px-4" type="submit">
          Submit Review
        </button>
      </form>

      {/* Reviews List */}
      <div className="row">
        {reviews
          .filter((rev) => filterStars === 0 || rev.rating === filterStars)
          .map((rev, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className={styles.reviewItem}>
                <div className={styles.stars}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <FaStar key={i} color="#ffc107" size={20} />
                  ))}
                </div>
                <p className={styles.reviewText}>"{rev.text}"</p>
                <p className={styles.reviewAuthor}>- {rev.name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
