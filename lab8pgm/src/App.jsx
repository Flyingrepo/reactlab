import React, {useState} from 'react';
import {format} from 'date-fns';
import "./reminder.css";

const ReminderApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [form, setForm] = useState({ taskName: '', dueDate: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!form.taskName || !form.dueDate) return;
    const newTask = {
      id: Date.now(),
      ...form,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setForm({ taskName: '', dueDate: '', description: '' });
  };

  const toggleCompletion = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="container">
      <h1 className="title">Reminder Application</h1>
      <form onSubmit={handleAddTask} className="form">
        <input
          name="taskName"
          type="text"
          placeholder="Task Name"
          value={form.taskName}
          onChange={handleChange}
          className="input"
          required
        />

        <input
          name="dueDate"
          type="date"
          value={form.dueDate}
          onChange={handleChange}
          className="input"
          required
        />

        <textarea
          name="description"
          placeholder="Optional Description"
          value={form.description}
          onChange={handleChange}
          className="textarea"
        />
        <button type="submit" className="btn-submit">
          Add Task
        </button>
      </form>
      <div className="filter-group">
        <button onClick={() => setFilter('all')} className="btn-filter">
          All Tasks
        </button>

        <button onClick={() => setFilter('completed')} className="btn-filter">
          Completed
        </button>

        <button onClick={() => setFilter('incomplete')} className="btn-filter">
          Incomplete
        </button>
      </div>
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? 'completed' : 'incomplete'}`}
          >
            <div className="task-row">
              <div>
                <h3 className="task-title">{task.taskName}</h3>
                <p className="task-date">Due: {format(new Date(task.dueDate), 'PPP')}</p>
                {task.description && <p className="task-desc">{task.description}</p>}
              </div>
              <button
                onClick={() => toggleCompletion(task.id)}
                className="btn-toggle"
              >
                {task.completed ? 'Mark Incomplete' : 'Mark Completed'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReminderApp;
