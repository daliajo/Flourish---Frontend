import HabitTracker from "./HabitTracker";
import Journal from "./Journal";
import MoodTracker from "./MoodTracker"; 
import "../styles/dashboard.css";


export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Your Daily Dashboard</h1>

      <section className="dash-section">
        <MoodTracker /> 
      </section>

      <section className="dash-section">
        <HabitTracker />
      </section>

      <section className="dash-section">
        <Journal />
      </section>
    </div>
  );
}
