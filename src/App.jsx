import React from 'react'
import { useState } from 'react'
import './App.css'
import ResultHTML from "./components/ResultHTML.jsx"

const App = () => {
  const [index,setIndex] = useState(1)
  
  const question = [
    {
    name: 'Quanto é 1+1?',
    alternative: [
      {
        name: 5,
        status: false
      },

      {
        name: 2,
        status: true
      },

      {
        name: 6,
        status: false
      },

    ]
  },

  {
    name: 'Quanto é 10/2?',
    alternative: [
      {
        name: 5,
        status: true
      },

      {
        name: 4,
        status: false
      },

      {
        name: 6,
        status: false
      },

    ]
  },

  {
    name: 'Quanto é 6 x 6?',
    alternative: [
      {
        name: 36,
        status: true
      },

      {
        name: 64,
        status: false
      },

      {
        name: 42,
        status: false
      },

    ]
  },

  {
    name: 'Quanto é 8^2?',
    alternative: [
      {
        name: 81,
        status: false
      },

      {
        name: 49,
        status: false
      },

      {
        name: 64,
        status: true
      },

    ]
  },


  ]

  function nextQuestion() {
    setIndex(index+1)   
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
          <li onClick={nextQuestion}>

            {question[index-1].alternative[0].name}

          </li>

          <li onClick={nextQuestion}>

            {question[index-1].alternative[1].name}

          </li>

          <li onClick={nextQuestion}>

            {question[index-1].alternative[2].name}

          </li>

        </ul>
      </main>
      </div>
    )
  }

  function restart() {
    setIndex(1)
  }
  
  if (index<=4) {
    return questionHTML()
  } else {
    return (
      <div>
        <ResultHTML restart={restart}/>
      </div>
    )
  }

}

export default App