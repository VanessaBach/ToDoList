import styles from './NewTask.module.css';
import ButtonImg from '../assets/Button.svg';

export function NewTask() {
  return(
    <div className={styles.newTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button className={styles.button} type="submit">
        <img src={ButtonImg} alt="" />
      </button>
    </div>
    
  )
}