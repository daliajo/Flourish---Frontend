import { useState } from "react";
import "../styles/mood.css";

export default function MoodTracker() {
  const [mood, setMood] = useState(5);

  return (
    <div className="mood-card">
      <h2 className="mood-title">Mood Tracker</h2>

      {/* Slider container */}
      <div className="mood-slider-container">
        <input
          type="range"
          min={1}
          max={10}
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="mood-slider"
        />
      </div>

      {/* Mood display */}
      <div className="mood-display">
        Your mood today: {mood}/10
      </div>
    </div>
  );
}
