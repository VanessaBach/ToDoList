import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';
import ClipboardImg from './assets/Clipboard.svg';

import styles from './App.module.css';
import './global.css';
import { v4 as uuidv4 } from 'uuid';

const tasks = [
  {
    title: "Faça tudo",
    isComplete: true,
    id: uuidv4()
  }  
];

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>      
      <NewTask/> 
      {tasks.map((task) =>(
        <Tasks  
          key={task.id}
          title={task.title}
          isComplete={task.isComplete}
        />
      ))}
      <div className={styles.empty}>
        <div className={styles.clipboard}>
          <img src={ClipboardImg} alt="" />
        </div>
        <div className={styles.emptyText}>          
          <p>Você ainda não tem tarefas cadastradas .</p>
          <p>Crie tarefas e organize seus itens a fazer.</p>
        </div>
      </div>           
    </div>
  )
}