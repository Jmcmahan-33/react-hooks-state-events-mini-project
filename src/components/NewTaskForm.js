import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit,categories}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

function handleSubmit(e) {
  console.log(e.target.value)
  e.preventDefault()
  onTaskFormSubmit({text, category})
  setText("")
  setCategory("Code")

}

 const newCategories = categories.filter((category)=> category !=="All")





  console.log("Formlog",categories)
  return (
    <form onSubmit={handleSubmit}className="new-task-form">
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}


        />
      </label>
      <label>
        Category
        <select  value={category} name="category" onChange={(e) => setCategory(e.target.value)}>
          {newCategories.map((category)=> <option key={category}>{category}</option>)}
       
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
