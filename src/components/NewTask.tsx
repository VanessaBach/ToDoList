import styles from './NewTask.module.css';
import ButtonImg from '../assets/Button.svg';
import { FormEvent, ChangeEvent, useState } from 'react';

export function NewTask() {

  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask ] = useState('')

  function handleNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTask]);  
    setNewTask('');  
  }

  function handleNewTaskChange() {
    setNewTask(event.target.value);
  }

  return (
    <div className={styles.newTask}>
      <form onSubmit={handleNewTask}>
        <input 
          type="text"
          placeholder="Adicione uma nova tarefa" 
          value={newTask}
          onChange={handleNewTaskChange}
          required
        />       
        <button type="submit">
          <img src={ButtonImg} alt="" />
        </button>
      </form>
    </div>    
  )
}