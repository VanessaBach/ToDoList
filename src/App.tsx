import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <header>

      </header>

      <div className={styles.wrapper}>
        <input type="text" />
        <div className={tasks}>
          <div className={newTasks}>

          </div>
          <div className={doneTasks}>
            
          </div>
        </div>

      </div>      
    </div>
  )
}
