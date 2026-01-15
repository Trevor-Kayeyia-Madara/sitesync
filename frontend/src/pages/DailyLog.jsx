import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TaskChecklist from "../components/TaskChecklist";
import { mockApi } from "../services/mockApi";

export default function DailyLog() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [workers, setWorkers] = useState(0);
  const [notes, setNotes] = useState("");

  const submitLog = async () => {
    if (tasks.length === 0) {
      alert("Select at least one task");
      return;
    }

    await mockApi.submitDailyLog({ tasks, workers, notes });
    navigate("/photos");
  };

  return (
    <div>
      <h2>Daily Site Report</h2>
      <p>📍 Meru (auto)</p>

      <TaskChecklist tasks={tasks} setTasks={setTasks} />

      <input
        type="number"
        placeholder="Workers on site"
        onChange={(e) => setWorkers(e.target.value)}
      />

      <textarea
        placeholder="Challenges / Notes"
        onChange={(e) => setNotes(e.target.value)}
      />

      <button onClick={submitLog}>Continue to Photos</button>
    </div>
  );
}
