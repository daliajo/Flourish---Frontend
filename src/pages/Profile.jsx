import { useState } from "react";
import "../styles/profile.css";

export default function Profile() {
  // frontend-only state
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
  });

  // React doesn’t remember input values like normal HTML forms.
// handleChange updates the correct field in state whenever the user types.
// // so we can validate, save, or send them later if needed
  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="profile-page">
      <h1 className="profile-title">Your Profile</h1>

      <div className="profile-card">
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={profile.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Bio
          <textarea
            name="bio"
            rows="4"
            placeholder="Tell us something about yourself"
            value={profile.bio}
            onChange={handleChange}
          />
        </label>

        <button className="profile-btn" disabled>
          Save Changes
        </button>
      </div>
    </div>
  );
}
