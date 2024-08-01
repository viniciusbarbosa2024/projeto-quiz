import React from 'react'
import { useState } from 'react'
import './App.css'
import ResultHTML from "./components/ResultHTML.jsx"
import question from './components/Questions.js'
import { QuestionHTML } from './components/QuestionHTML.jsx'

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
    return (
      <div>
        <QuestionHTML question={question} index={index} saveAlternative={saveAlternative}/>
      </div>
    )
  } else {
    return (
      <div>
        <ResultHTML restart={restart} numberRightAnswers={numberRightAnswers()}/>
      </div>
    )
  }

}

export default App