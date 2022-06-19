import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './services/quiz_service';
import { QuestionType } from './types/Quiz_types';
import QuestionCard from './components/QuestionCard';
import loading from './images/loading-buffering.gif'

function App() {

  let [quiz, setQuiz] = useState<QuestionType[]>([])
  let [currentStep, setCurrentStep] = useState(0)
  let [score, setScore] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const questions = await getQuizDetails(10, 'easy');
      console.log(questions)
      setQuiz(questions)
    }
    fetchData();
  }, []);

  const handleSubmit = (e:React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    const currentQuestion:QuestionType = quiz[currentStep]

    if(userAns === currentQuestion.correct_answer) {
      setScore(++score)
    }
    
    if(currentStep !== quiz.length-1){
      setCurrentStep(++currentStep)
    }else {
      alert(`Your final score is ${score} out of ${quiz.length}`)
      setCurrentStep(0)
      setScore(0)
    }
  } 

  if(!quiz.length) return <h3 className='loading' >
     <img src={loading} alt='Loading...' />
  </h3>

  return (
    <div className="App">
      <h2>Quiz App</h2>
      <QuestionCard 
        options={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
 