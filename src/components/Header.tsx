import styles from './Header.module.css';

import toDoListIcon from '../assets/logo.svg';

export function Header(){
  return(
    <header className={styles.header}>
      <img src={toDoListIcon} alt='Logotipo do ToDo List'/>
      <span className={styles.to}>to</span>
      <span className={styles.do}>do</span>
    </header>
  )
}