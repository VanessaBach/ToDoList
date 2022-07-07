import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { Quadro } from './components/Quadro';
import ButtonImg from './assets/Button.svg';

import styles from './App.module.css';
import './global.css';
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, useState } from 'react';

export interface TaskProps {
  title: string,
  isComplete: boolean,
  id?: string,  
  onDeleteTask?: (task: object) => void;
}

export function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newTask, setNewTask ] = useState<TaskProps>({} as TaskProps)

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    
    setNewTask(
      {
        title: event.target.value,
        isComplete: false,
        id: uuidv4(),        
      }
    )
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()      
    setTasks(state => [...state, newTask])
  }

  function onDeleteTask(taskToDelete: object) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task != taskToDelete;
    })
    setTasks(tasksWithoutDeletedOne);
  }
  
  

  return (
      <div className={styles.wrapper}>
        <Header/>      
        <div className={styles.newTask}>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Adicione uma nova tarefa"           
            onChange={handleNewTask}
            value={newTask.title}
            required
          />       
          <button type="submit">
            <img src={ButtonImg} alt="" />
          </button>
        </form>
      </div>    
      {tasks.length == 0 && <Quadro/>}
      {tasks.map(task => {
        return (        
          <Tasks  
            key={task.id}
            title={task.title}
            isComplete={task.isComplete}
            onDeleteTask={onDeleteTask}                   
          />
        )
      })}        
    </div>
  )
}