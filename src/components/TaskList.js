import React from "react";
import Task from "./Task";
function TaskList({ tasks, category, onDelete }) {
  const renderList = tasks.map((task) => {
    // console.log("test", task.text)
    return <Task key={task.text} category={task.category} text={task.text} onDelete={onDelete} />

  })
  // console.log("LOAD", category)
  return (
    <div className="tasks">
      {renderList}
    </div>
  );
}

export default TaskList;
