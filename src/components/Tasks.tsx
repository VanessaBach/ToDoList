import styles from './Tasks.module.css';

interface IsComplete {
  type: boolean;
}

interface Title {
  type: 'text';
  title: Title[];
}

interface TasksProps {
  title: string;
  isComplete: boolean;
}

export function Tasks({title, isComplete}:TasksProps) {
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <div className={styles.createdTasks}>Tarefas Criadas</div>
          <div className={styles.createdTasksCounter}>            
            <div className={styles.createdTasksCounterText}>0</div>
          </div>
        </div>
        <div className={styles.done}>
          <div className={styles.doneTasks}>Concluídas</div>
          <div className={styles.doneTasksCounter}>
            <div className={styles.doneTasksCounterText}>0</div>
          </div>
        </div>
      </div>      
    </div>
  )
}
