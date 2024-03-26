
import { useState } from 'react';
import './App.css';
import TaskCreate from './component/TaskCreate';
import TaskList from './component/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks, {//... eskileri kopyalıyor
        id: Math.round(Math.random() * 9999),
        title: title,
        taskDesc: taskDesc

      }
    ];

    setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {

    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(afterDeletingTasks);
  }


  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {

    const updatedTasks = tasks.map((task) => {
      if (task.id == id) {
        return { id: id, title: updatedTitle, taskDesc: updatedTaskDesc }
      }
      else {
        return task;
      }
    })
    setTasks(updatedTasks);
  }
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
    </div>
  );
}

export default App;
