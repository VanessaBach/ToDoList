import styles from './Tasks.module.css';
import ClipboardImg from '../assets/Clipboard.svg';
import CheckSimbol from '../assets/check.svg';
import TrashImg from '../assets/trash.svg';

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
      {title.map(line => {
        if (line.title.length != 0 ) {
          return (
            <div className={styles.list}>
                <div className={styles.task}>
                  <div className={styles.check}>
                    <img src={CheckSimbol} alt="" />
                  </div>
                  <div className={styles.textTask}>
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                  </div>
                  <div className={styles.trash}>
                    <img src={TrashImg} alt="" />
                  </div>
                </div>
              
            </div>
          )  
        } else {
          return (
            <div className={styles.empty}>
              <div className={styles.clipboard}>
                <img src={ClipboardImg} alt="" />
              </div>
              <div className={styles.emptyText}>          
                <p>Você ainda não tem tarefas cadastradas .</p>
                <p>Crie tarefas e organize seus itens a fazer.</p>
              </div>
            </div>
          )
        }
      })}
      
    </div>
  )
}

///adicionei o if e o styles.list e deu ruim.