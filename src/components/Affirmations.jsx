// This component shows daily affirmations to help you feel good
import { useState, useEffect } from "react";
import "./Affirmations.css"; 

export default function Affirmation() {
  // This stores the current affirmation text
  // We start with an empty string, then we'll get one from the internet
  const [affirmation, setAffirmation] = useState("");

  // This function gets a new affirmation from the internet
  function getAffirmation() {
    // We're using a website that gives us random positive messages
    fetch("https://api.allorigins.win/raw?url=https://www.affirmations.dev/?t=" + Date.now())
      .then((res) => res.json())
      .then((data) => setAffirmation(data.affirmation))
      .catch((err) => console.log("Error:", err));
  }

  // When the page loads, automatically get an affirmation
  useEffect(() => {
    getAffirmation();
  }, []);

  return (
    <div className="affirmation-card">
      <h2 className="affirmation-title">Daily Affirmations</h2>
      <p className="affirmation-text">{affirmation}</p>
      <button className="affirmation-button" onClick={getAffirmation}>
        New Affirmation
      </button>
    </div>
  );
}

