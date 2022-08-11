import styles from './Tasks.module.css';
import TrashImg from '../assets/trash.svg';
import { TaskProps} from '../App';

interface TaskComponentProps extends TaskProps {
  onDeleteTask: (taskToDeleteId: string) => void;
  onChangeIsComplete:(changeIsCompleted: boolean) => void;
}

export function Tasks({ title, id, onDeleteTask,  onChangeIsComplete}:TaskComponentProps) {
  
  function handleDelete() {
    onDeleteTask(id);
  }

  function changeIsComplete() {
    onChangeIsComplete(false);
  }

  return (
    <div>
      <div className={styles.list}>
        <div className={styles.task}>
          <div className={styles.check}onClick={changeIsComplete}>
            <label className="checkboxContainer">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
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
