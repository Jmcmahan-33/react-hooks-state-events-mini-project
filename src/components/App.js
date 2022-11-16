import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(deletedTask) {
    // console.log("DELETED TASK", deletedTask)
    setTasks(tasks.filter((task) => task.text !== deletedTask));

  }

  function chooseCategory(category) {
    // console.log("Code", category)
    setCategory(category)
  }

  const updatedTask = tasks.filter((task)=> {
    if(category === "All") {
      return true
    }
      return task.category === category
  })

  

  //problem: when the cat buttons are clicked, nothing happens
  //solution: once the button is clicked, filter the items that specify the user change. 
  // if the button is clicked
  // return the selected category
  //otherwise return "" 

  console.log("Category State", category)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  categories={CATEGORIES} selectedCategory={category} getCategory={chooseCategory} />
      <NewTaskForm 
      categories={CATEGORIES}
      onTaskFormSubmit={handleAddTask}
      />
      <TaskList onDelete={deleteTask} tasks={updatedTask} category={CATEGORIES} />
    </div>
  );
}

export default App;
