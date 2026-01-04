import "../styles/auth.css";

export default function Signup() {

  // No handleChange here on purpose.
// Login/signup only need the values on submit, so React doesn’t
// need to track every keystroke yet.

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Sign Up</h1>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="auth-main-btn">Create Account</button>

        <p className="auth-switch">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
