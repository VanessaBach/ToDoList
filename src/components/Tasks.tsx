import styles from './Tasks.module.css';
import CheckImg from '../assets/check.svg';
import TrashImg from '../assets/trash.svg';
import { TaskProps} from '../App';

interface TaskComponentProps extends TaskProps {
  onDeleteTask: (taskToDeleteId: string) => void;
}

export function Tasks({ title, isComplete, id, onDeleteTask}:TaskComponentProps) {
  
  function handleDelete() {
    onDeleteTask(id);
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
