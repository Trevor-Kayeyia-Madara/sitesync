export default function TaskChecklist({ tasks, setTasks }) {
  const options = [
    "Foundation Excavation",
    "Wall Plastering – Living Room",
    "Wall Plastering – Bedroom",
    "Roofing"
  ];

  const toggleTask = (task) => {
    setTasks(
      tasks.includes(task)
        ? tasks.filter(t => t !== task)
        : [...tasks, task]
    );
  };

  return (
    <>
      <h4>Tasks Completed</h4>
      {options.map(task => (
        <label key={task}>
          <input
            type="checkbox"
            checked={tasks.includes(task)}
            onChange={() => toggleTask(task)}
          />
          {task}
        </label>
      ))}
    </>
  );
}
