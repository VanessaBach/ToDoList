import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';

import styles from './App.module.css';
import './global.css';
import { v4 as uuidv4 } from 'uuid';

const tasks = [
  {
    title: "Faça tudo",
    isComplete: true,
    id: uuidv4()
  },
  {
    title: "Estude",
    isComplete: false,
    id: uuidv4()
  }
];

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <div > 
        <NewTask/> 
        <Tasks
          key={tasks.id}
          title={tasks.title}
        />     
      </div>      
    </div>
  )
}
