import React from 'react'
import styles from './ResultHTML.module.css'

const ResultHTML = () => {
  return (
    <main className={styles.result}>
          <div>Você acertou x</div>
          <button className={styles.button}>Reiniciar</button>
    </main>
  )
}

export default ResultHTML
