import styles from './Header.module.css';
import AppLogo from '../assets/Logo.svg';

export function Header () {
  return (
    <header className={styles.header}>
      <img src={AppLogo} alt="Logotipo do Ignite" />
    </header>
  )
}