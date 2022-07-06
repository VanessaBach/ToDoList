import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';
import { Quadro } from './components/Quadro';

import styles from './App.module.css';
import './global.css';
import { v4 as uuidv4 } from 'uuid';


const tasks = [
  {
    id: uuidv4(),
    title: [
      { type: 'paragraph', text: 'Faça o café da manhã' },  
    ],  
    isComplete: false,   
  },
  {
    id: uuidv4(),
    title: [
      {type: 'paragraph', text: 'lave a louça'},
    ],
    isComplete: false,  
  },    
];

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>      
      <NewTask/> 
      <Quadro/>
      {tasks.map(task => {
        return (        
          <Tasks  
            key={task.id}
            title={task.title}
            isComplete={task.isComplete}
          />
        )
      })}        
    </div>
  )
}