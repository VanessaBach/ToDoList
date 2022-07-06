import styles from './Quadro.module.css';
import ClipboardImg from '../assets/Clipboard.svg';

export function Quadro( ) {
  return (
    <div className={styles.quadro}>
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