import React from 'react'
import { useState } from 'react'
import './App.css'
import ResultHTML from "./components/ResultHTML.jsx"
import question from './components/Questions.js'

const App = () => {
  const [index,setIndex] = useState(1)

  const [alternativeStatus,setAlternativeStatus] = useState([])
  

  function nextQuestion() {
    setIndex(index+1)  
  }

  function saveAlternative(idx) {
    setAlternativeStatus([...alternativeStatus,question[index-1].alternative[idx].status])  
    
    nextQuestion()
  }

  function questionHTML() {
    return (
      <div>
        <h1>Quiz</h1>
      <main>
        <div id="informationsQuestion">
          <span>{question[index-1].name}</span>
          <span>{index}/4</span>
        </div>
        <ul>
          {question[index-1].alternative.map((alternative,idx) => {
            return(
            <li onClick={() => saveAlternative(idx)}>
              {alternative.name}  
            </li>)
          })}
          

        </ul>
      </main>
      </div>
    )
  }

  function restart() {
    setIndex(1)

    setAlternativeStatus([])
  }

  function numberRightAnswers() {
    const rightAnswers = alternativeStatus.filter((status)=>{
      if (status == true) {
        return status
      }
    }).length

    return rightAnswers
  }
  
  if (index<=4) {
    return questionHTML()
  } else {
    return (
      <div>
        <ResultHTML restart={restart} numberRightAnswers={numberRightAnswers()}/>
      </div>
    )
  }

}

export default App