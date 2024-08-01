import React from "react";

export const QuestionHTML = ({question,index,saveAlternative}) => {
  return (
    <div>
      <h1>Quiz</h1>
      <main>
        <div id="informationsQuestion">
          <span>{question[index - 1].name}</span>
          <span>{index}/4</span>
        </div>
        <ul>
          {question[index - 1].alternative.map((alternative, idx) => {
            return (
              <li onClick={() => saveAlternative(idx)}>{alternative.name}</li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};
