import { useState, useEffect } from "react";
import "../styles/habit.css";

export default function HabitTracker() {

  const [habits, setHabits] = useState([
    { name: 'Drink Water', done: false },
    { name: 'Meditate 5 minutes', done: false },
    { name: 'Exercise', done: false },
    { name: 'Read 10 pages', done: false },
  ]);

  const [newHabit, setNewHabit] = useState("");

  function toggleHabit(index) {
    const updatedHabits = [...habits]; // Make a NEW array with the same values as habits
    updatedHabits[index].done = !updatedHabits[index].done; // Flip (toggle) the value
    setHabits(updatedHabits);
  }

  function addHabit() {
    const trimmed = newHabit.trim();
    if (!trimmed) return;

    const updatedHabits = [...habits, { name: trimmed, done: false }];

    setHabits(updatedHabits);

    setNewHabit(""); // clear input
  }

  function deleteHabit(indexToDelete) {
    const updatedHabits = habits.filter((_, index) => index !== indexToDelete);
    setHabits(updatedHabits);
  }

  useEffect(() => {
    const saved = localStorage.getItem("flourish-habits");
    if (saved) {
      try {
        setHabits(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved habits", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("flourish-habits", JSON.stringify(habits));
  }, [habits]);

  return (
    <div className="habit-card">
      <h2 className="habit-title">Habit Tracker</h2>

      {/* Add habit form */}
      <div className="habit-add">
        <input
          type="text"
          placeholder="Add a new habit .. "
          
          // ❌ WRONG: value="newHabit"
          // ✔ FIX:
          value={newHabit}

          onChange={(e) => setNewHabit(e.target.value)}
        />

        <button onClick={addHabit}>Add</button>
      </div>

      {/* .map() : loops through the array and prints something for each item.
          for each habit in habits {
            show a checkbox + habit name
          }
      */}
      <div className="habit-list">
        {habits.map((habit, index) => (
          <div key={index} className="habit-item">
            <label>
              <input
                type="checkbox"
                checked={habit.done}
                onChange={() => toggleHabit(index)}
              />
              <span>{habit.name}</span>
            </label>

            {/* Add delete styling */}
            <button className="habit-delete" onClick={() => deleteHabit(index)}>
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
