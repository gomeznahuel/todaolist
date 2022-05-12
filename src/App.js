import { useEffect, useState } from "react";
import Title from "./components/Title/Title";
import Description from "./components/Description/Description";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import TaskContainer from "./components/TaskContainer/TaskContainer";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // This useEffect show error message if input is empty or if input is not a string
  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  }, [errorMessage]);

  // handleInput change and set the input value
  const handleInput = (e) => {
    setInput(e.target.value); // input
  };

  // handleSubmit add the input value to the tasks array
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the input
    if (input === "") {
      setErrorMessage("Please! Enter a task...");
    } else if (input.length > 20) {
      setErrorMessage("Please! Enter a task less than 20 characters...");
    } else if (input.length < 3) {
      setErrorMessage("Please! Enter a task more than 3 characters...");
    } else if (input.trim() === "") {
      setErrorMessage("You can't enter only spaces...");
    } else if (input.trim().length === 0) {
      setErrorMessage("You can't enter only spaces...");
    } else {
      setTasks([...tasks, { text: input, isCompleted: false }]);
      setInput("");
    }
  };

  // handleToggle is used to toggle the isCompleted property of a task in the tasks array
  const handleToggle = (index) => {
    const newTodos = [...tasks];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTasks(newTodos);
  };

  // handleDelete is used to delete a task from the tasks array
  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // This useEffect is used to save the tasks array to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <Title titleText="To-Do List" className="title" />
      <Description textDescription="Enter a to do and press enter to add it to the list" className="description" />
      <form onSubmit={handleSubmit} className="form">
        <Input value={input} placeholder="Enter a todo..." onChange={handleInput} />
        <Button type="submit" buttonText="Add To Do" className="btn" />
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}

      {tasks.map((todo, index) => (
        <TaskContainer key={index} index={index} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default App;
