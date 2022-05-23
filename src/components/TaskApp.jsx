import React from "react";

import styles from "./taskApp.module.css";

import AddTask from "./AddTask/AddTask.jsx"
import Counter from "./Counter/Counter.jsx"
import Task from "./Task/Task.jsx"
import TaskHeader from "./TaskHeader/TaskHeader.jsx"
import Tasks from "./Tasks/Tasks.jsx"


const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
      <TaskHeader/>
      <AddTask/>
      <Counter/>
      <Task/>
      
      <Tasks/>
    </div>
  );
};

export default TaskApp;
