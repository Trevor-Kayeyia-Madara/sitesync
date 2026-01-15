import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TaskChecklist from "../components/TaskChecklist";
import Page from "../components/Page";
import { mockApi } from "../services/mockApi";

export default function DailyLog() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [workers, setWorkers] = useState("");
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
    <Page
      title="Daily Site Report"
      subtitle="📍 Meru site (auto-detected)"
    >
      <TaskChecklist tasks={tasks} setTasks={setTasks} />

      <label className="block text-sm text-gray-600 mt-4 mb-1">
        Workers on site
      </label>
      <input
        type="number"
        className="w-full border rounded-xl p-3 mb-4"
        placeholder="e.g. 6"
        onChange={(e) => setWorkers(e.target.value)}
      />

      <label className="block text-sm text-gray-600 mb-1">
        Challenges / Notes (optional)
      </label>
      <textarea
        className="w-full border rounded-xl p-3 mb-4"
        placeholder="Rain delay, materials pending..."
        onChange={(e) => setNotes(e.target.value)}
      />

      <button
        onClick={submitLog}
        className="w-full bg-emerald-700 text-white p-4 rounded-xl font-semibold"
      >
        Continue to Photos →
      </button>
    </Page>
  );
}
