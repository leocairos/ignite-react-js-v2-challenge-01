import { PlusCircle } from 'phosphor-react';

import styles from './CreateTask.module.css';

export function CreateTask(){
  return(
    <form className={styles.createTaskForm}>
      <input 
        placeholder='Adicione uma nova tarefa'
      />
      <button type='submit'>
        Criar
        <PlusCircle size={16}/>
      </button>
    </form>
  )
}