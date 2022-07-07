import styles from './Tasks.module.css';
import CheckImg from '../assets/check.svg';
import TrashImg from '../assets/trash.svg';
import { TaskProps } from '../App';


export function Tasks({ title, isComplete, id, onDeleteTask}:TaskProps) {
  
  function handleDelete() {
    onDeleteTask(title);
  }

  return (
    <div>
      <div className={styles.list}>
        <div className={styles.task}>
          <div className={styles.check}>
            <img src={CheckImg} alt="" />
          </div>
          <div className={styles.taskText}> 
           {title}
          </div>
          <div className={styles.trash} onClick={handleDelete}>
            <img src={TrashImg} alt="" />
          </div>
        </div>
      </div>  
    </div>
  )
}       
