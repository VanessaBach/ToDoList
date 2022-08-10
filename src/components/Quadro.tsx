import styles from './Quadro.module.css';
import ClipboardImg from '../assets/Clipboard.svg';

export function Quadro( ) {
  return (
    <div className={styles.quadro}>      
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