import { useState, useEffect } from "react";
import "../styles/journal.css";


export default function Journal() {
  const [text, setText] = useState("");
  const [entries, setEntries] = useState([]);

  // Load saved entries
  useEffect(() => {
    const saved = localStorage.getItem("flourish-journal");
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse journal entries", e);
      }
    }
  }, []);

  // Save entries to localStorage
  useEffect(() => {
    localStorage.setItem("flourish-journal", JSON.stringify(entries));
  }, [entries]);

  function saveEntry() {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newEntry = {
      id: Date.now(),
      content: trimmed,
      date: new Date().toLocaleString(),
    };

    setEntries([newEntry, ...entries]);
    setText("");
  }

  function deleteEntry(id) {
    const updated = entries.filter((entry) => entry.id !== id);
    setEntries(updated);
  }

 return (
  <div className="journal-card">
    <h2 className="journal-title">Journal</h2>

    <textarea
      className="journal-textarea"
      placeholder="Write your thoughts..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />

    <button className="journal-save" onClick={saveEntry}>
      Save Entry
    </button>

    <div className="journal-entries">
      {entries.map((entry) => (
        <div key={entry.id} className="journal-entry">
          <p className="journal-date"><strong>{entry.date}</strong></p>
          <p className="journal-content">{entry.content}</p>
          <button
            className="journal-delete"
            onClick={() => deleteEntry(entry.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  </div>
);
}
