import React from 'react'
import styles from './ResultHTML.module.css'

const ResultHTML = ({restart,numberRightAnswers}) => {
  return (
    <main className={styles.result}>
          <div>Você acertou {numberRightAnswers}/4</div>
          <button className={styles.button} onClick={restart}>Reiniciar</button>
    </main>
  )
}

export default ResultHTML
