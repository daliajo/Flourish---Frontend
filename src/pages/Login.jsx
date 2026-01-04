import "../styles/auth.css";
import { Link } from "react-router-dom";


export default function Login() {

// No handleChange here on purpose.
// Login/signup only need the values on submit, so React doesn’t
// need to track every keystroke yet.


  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Login</h1>

        <div className="auth-field">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="auth-field">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button className="auth-btn">Login</button>

        <p className="auth-switch">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
