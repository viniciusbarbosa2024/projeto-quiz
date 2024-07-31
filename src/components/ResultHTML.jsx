import React from 'react'
import styles from './ResultHTML.module.css'

const ResultHTML = ({restart}) => {
  return (
    <main className={styles.result}>
          <div>Você acertou x</div>
          <button className={styles.button} onClick={restart}>Reiniciar</button>
    </main>
  )
}

export default ResultHTML
