import Task from "../Task/Task";
import Button from "../Button/Button";
import "./TaskContainer.css";

const TaskContainer = ({ index, todo, handleToggle, handleDelete }) => {
  return (
    <div className="task-container">
      <div className="task-container__text">
        <Task descriptionText={todo.text} className={todo.isCompleted ? "line-through" : "description"} />
      </div>
      <div className="buttons-container">
        <Button type="button" handleClick={() => handleToggle(index)} buttonText="Completado" className="btn complete" />
        <Button type="button" handleClick={() => handleDelete(index)} buttonText="Delete" className="btn delete" />
      </div>
    </div>
  );
};

export default TaskContainer;
