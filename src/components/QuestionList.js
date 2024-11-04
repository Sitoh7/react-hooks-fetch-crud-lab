import React,{useState, useEffect} from "react";
import QuestionItem from './QuestionItem'


function QuestionList() {
  const[quizList,setQuizList] = useState([])

useEffect(()=>{
  fetch(`http://localhost:4000/questions`)
  .then(resp=>resp.json())
  .then(data=>setQuizList(data))
},[])

function onDeleteItem(id){
  console.log(id)
  const updatedItems = quizList.filter((item) => item.id !== id);
  setQuizList(updatedItems)


}

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
      {quizList.map(data=><QuestionItem key={data.id}question={data} onDeleteItem={onDeleteItem}/> )}
    </section>
  );
}

export default QuestionList;
