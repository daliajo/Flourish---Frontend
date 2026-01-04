import "../styles/aboutus.css";
import selfcare from "../assets/selfcare.jpg";

export default function AboutUs() {
  return (
    <div className="about-us-page">
      <div className="about-us-card">

        <div className="about-us-row">
        
          <div className="about-us-text">
            <h1>About Us</h1>
            <p className="about-us-description">
              Welcome to Flourish Planner. We are dedicated to helping you stay
              organized, set goals, and prioritize self-care. Our mission is to
              provide you with a mindful, balanced routine through daily planning,
              habit tracking, and gentle reminders.
            </p>
          </div>

      
          <img
            src={selfcare}
            alt="Self care"
            className="about-us-image"
          />
        </div>

      </div>
    </div>
  );
}
