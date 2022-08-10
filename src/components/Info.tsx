import styles from './Info.module.css';

export function Info( ) {
  return (
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
  )
}       