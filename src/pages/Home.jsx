import "../styles/home.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Home() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="home-content">
      <section className="hero">
        <h1 className="hero-title">
          {t.home?.title || (
            <>
              Make space for self-care,<br />make time to flourish
            </>
          )}
        </h1>

        <p className="hero-sub">
          <span className="bold">
            {t.home?.brand || "Flourish Planner"}
          </span>{" "}
          {t.home?.subtitle ||
            "is your personal space to stay organized, set goals, and make time for self-care. With daily planning, habit tracking, and gentle reminders, it helps you build a balanced, mindful routine."}
        </p>

        {/* OLD BUTTON OPTIONS – kept for reference */}
        {/* <button className="cta-btn glow-hover">Get Started</button> */}
        {/* <a className="cta-btn glow-hover" href="/login">Get Started</a> */}

        {/* CURRENT CTA – language safe */}
        <Link to="/login" className="cta-btn">
          {t.home?.getStarted || "Get Started"}
        </Link>
      </section>

      <footer className="footer">
        © 2025 Flourish. All rights reserved.
      </footer>
    </div>
  );
}
