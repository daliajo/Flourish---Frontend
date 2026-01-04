import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Navbar() {
  const location = useLocation();
  const { t } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <img src={logo} className="navbar-logo" />

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)} className={location.pathname === "/" ? "active" : ""}>
          {t.nav.home}
        </Link>

        <Link to="/dashboard" onClick={() => setOpen(false)} className={location.pathname === "/dashboard" ? "active" : ""}>
          {t.nav.dashboard}
        </Link>

        <Link to="/inspiration" onClick={() => setOpen(false)} className={location.pathname === "/inspiration" ? "active" : ""}>
          {t.nav.inspiration}
        </Link>

        <Link to="/about-us" onClick={() => setOpen(false)} className={location.pathname === "/about-us" ? "active" : ""}>
          {t.nav.about}
        </Link>

        <Link to="/profile" onClick={() => setOpen(false)} className={location.pathname === "/profile" ? "active" : ""}>
          {t.nav.profile}
        </Link>

        <Link to="/settings" onClick={() => setOpen(false)} className={location.pathname === "/settings" ? "active" : ""}>
          {t.nav.settings}
        </Link>
      </div>
    </nav>
  );
}
