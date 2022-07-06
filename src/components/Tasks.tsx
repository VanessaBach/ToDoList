import styles from './Tasks.module.css';
import CheckImg from '../assets/check.svg';
import TrashImg from '../assets/trash.svg';

export function Tasks({ title }) {
  return (
    <div>
      <div className={styles.list}>
        <div className={styles.task}>
          <div className={styles.check}>
            <img src={CheckImg} alt="" />
          </div>
          <div className={styles.taskText}> 
            {title.map(line => {
              return <p key={line.text}>{line.text} </p>
            })}
          </div>
          <div className={styles.trash}>
            <img src={TrashImg} alt="" />
          </div>
        </div>
      </div>  
    </div>
  )
}       
