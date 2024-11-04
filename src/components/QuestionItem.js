import React,{useState} from "react";

function QuestionItem({ question,onDeleteItem }) {
  const { id, prompt, answers, correctIndex } = question;

  const[index,setIndex] = useState(correctIndex)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(){
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE",
    })
    .then(() => onDeleteItem(id));
   
  }
function updateAnswer(e){
  //console.log(id)
  fetch(`http://localhost:4000/questions/${id}`,{
    method:"PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      correctIndex: e.target.value
    })
  })
  //console.log(options[correctIndex])
  setIndex(e.target.value)
//console.log(e.target.value)

}

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={index} onChange={updateAnswer}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
