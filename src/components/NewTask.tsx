import styles from './NewTask.module.css';
import ButtonImg from '../assets/Button.svg';
import { FormEvent, ChangeEvent, useState } from 'react';

export function NewTask() {
  const[tasks, setTasks] = useState([{}])
  const[newTaskText, setNewTaskText]=useState({})

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault() 
    setTasks([...tasks, newTaskText]);
    setNewTaskText([{}]);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  return(
    <div className={styles.newTask}>
      <form onSubmit={handleCreateNewTask}>
        <input 
          type="text"
          placeholder="Adicione uma nova tarefa" 
          value={newTaskText}
          onChange={handleNewTaskChange}
          required
        />
      </form>
      
      <button className={styles.button} type="submit">
        <img src={ButtonImg} alt="" />
      </button>
    </div>
    
  )
}