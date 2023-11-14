import { useState, useEffect } from "react";
import Explanation from "./explanationModal";
import AnswerModal from "./answerModal";
import answers from "./constants";

function Options(props) {
  const [showExplanationModal, setShowExplanationModal] = useState(false);

  const handleOnExplanationModalClose = () => {
    setShowExplanationModal(false);
  };

  const [showAnswerModal, setShowAnswerModal, ] = useState(false);

  const [responseText, setResponseText] = useState("Try again")

  const handleOnAnswerModalClose = () => {    
    setShowAnswerModal(false);
  };

  const [quizAnswers, setQuizAnswers] = useState(null);

  const handleChange = (event) => {
    // console.log(event.target.value)
    setQuizAnswers(event.target.value);
  };

  const verifyAnswer = (event) => {
    
    if (!quizAnswers){
        setResponseText("SELECT AN OPTION")
    }
    
    if (quizAnswers === answers[props.question_id].Correct) {
        setResponseText("Correct Answer")        
    }else{
        setResponseText("Try Again")        
    }

  }

  const refreshPage = () =>  {
    window.location.reload(false);
  }

  return (
    <>            
      <div className="flex flex-col mx-96 my-6 space-y-8 text-white ">
          <div className="text-lg dark:bg-gray-500 bg-black rounded-md  px-80 py-2  pl-2">
            <input type="radio" id={answers[props.question_id].A} value={answers[props.question_id].A}  onChange={handleChange} checked={quizAnswers === answers[props.question_id].A} /> {answers[props.question_id].A}
          </div>
          <div className=" text-lg dark:bg-gray-500  bg-black rounded-md px-80 py-2 pl-2">
            <input type="radio" id={answers[props.question_id].B} value={answers[props.question_id].B}  onChange={handleChange}  checked={quizAnswers === answers[props.question_id].B} /> {answers[props.question_id].B}
          </div>
          <div className=" text-lg dark:bg-gray-500  bg-black rounded-md px-80 py-2 pl-2">
            <input type="radio" id={answers[props.question_id].C} value={answers[props.question_id].C}  onChange={handleChange}  checked={quizAnswers === answers[props.question_id].C} /> {answers[props.question_id].C}
          </div>
          <div className=" text-lg dark:bg-gray-500  bg-black rounded-md px-80 py-2 pl-2">
            <input type="radio" id={answers[props.question_id].D} value={answers[props.question_id].D} onChange={handleChange} checked={quizAnswers === answers[props.question_id].D} /> {answers[props.question_id].D}
          </div>
        </div> 
                            
        <div className="flex flex-row space-x-8 mx-96 my-6 justify-center ">
          <div className="font-bold text-lg dark:bg-green-500 bg-green-500  rounded-md py-2 px-2 w-32 text-center dark:shadow-white/30 shadow-lg hover:scale-125 transition">
            <button onClick={() => { verifyAnswer(); setShowAnswerModal(true); }} > Submit </button>
          </div>
          <div className="font-bold text-lg dark:bg-blue-200 bg-blue-500 rounded-md py-2 px-2  w-32 text-center hover:scale-125 transition  dark:shadow-white/30 shadow-lg">
            <button onClick={() => refreshPage()}>Skip</button>
          </div>
          <div className="font-bold text-lg dark:bg-red-200 bg-red-400 rounded-md py-2 px-2  w-32 text-center hover:scale-125 transition  dark:shadow-white/30 shadow-lg">
            <button onClick={() => setShowExplanationModal(true)}>Explanation</button>
          </div>
          
        </div>
        <Explanation onClose={handleOnExplanationModalClose} visible={showExplanationModal} textToDisplay={answers[props.question_id].Explanation}/>      
        <AnswerModal  onClose={handleOnAnswerModalClose} visible={showAnswerModal} textToDisplay={responseText}/>      

    </>
  );
}

export default Options;

