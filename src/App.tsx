import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';

import styles from './App.module.css';
import './global.css';



export function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <div > 
        <NewTask/> 
        <Tasks/>     
      </div>      
    </div>
  )
}
