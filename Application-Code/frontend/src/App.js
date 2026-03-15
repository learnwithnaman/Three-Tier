import React from "react";
import Tasks from "./Tasks";
import "./App.css";

class App extends Tasks {
  state = { tasks: [], currentTask: "" };

  render() {
    const { tasks, currentTask } = this.state;
    const completedCount = tasks.filter((t) => t.completed).length;
    const pendingCount = tasks.length - completedCount;

    return (
      <div className="app-shell">
        <div className="hero-header">
          <h1 className="app-title">My To-Do List</h1>
          <p className="app-subtitle">Stay organized · Stay ahead</p>
        </div>

        <div className="card">
          <form onSubmit={this.handleSubmit} className="input-row">
            <input
              className="task-input"
              value={currentTask}
              onChange={this.handleChange}
              placeholder="What needs to be done today?"
              required
            />
            <button className="add-btn" type="submit">
              + Add Task
            </button>
          </form>

          <div className="stats-row">
            <div className="stat-box">
              <span className="stat-num">{tasks.length}</span>
              <span className="stat-label">Total</span>
            </div>
            <div className="stat-box">
              <span className="stat-num pending">{pendingCount}</span>
              <span className="stat-label">Pending</span>
            </div>
            <div className="stat-box">
              <span className="stat-num done">{completedCount}</span>
              <span className="stat-label">Done</span>
            </div>
          </div>

          <p className="section-label">Tasks</p>

          <div className="tasks-list">
            {tasks.length === 0 && (
              <div className="empty-state">
                No tasks yet. Add one above!
              </div>
            )}
            {tasks.map((task) => (
              <div
                key={task._id}
                className={`task-item${task.completed ? " completed" : ""}`}
              >
                <button
                  className="check-circle"
                  onClick={() => this.handleUpdate(task._id)}
                  aria-label="Toggle task"
                  type="button"
                >
                  {task.completed && <span className="check-mark">✓</span>}
                </button>
                <div className="task-content">
                  <span className={`task-text${task.completed ? " strikethrough" : ""}`}>
                    {task.task}
                  </span>
                  {task.completed && <span className="done-tag">done</span>}
                </div>
                <button
                  className="delete-btn"
                  onClick={() => this.handleDelete(task._id)}
                  type="button"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

