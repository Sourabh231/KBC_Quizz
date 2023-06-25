import React, { useEffect, useState } from 'react';
import '../Components/quizz.css';
import useSound from 'use-sound';
import play from '../sounds/play.mp3';
import correct from '../sounds/correct.mp3';
import wrong from '../sounds/wrong.mp3';
import wait from '../sounds/wait.mp3';

function Quizz({
  data,
  setStop,
  setQuestionNo,
  questionNo
}) {
  const [question, setQuestion] = useState(null);
  const [selectAnswer,setSelectedAnswer] = useState(null);
  const [className,setClassName] = useState('answer');
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong)

 useEffect(()=>{
    letsPlay();
 },[letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNo - 1]);
  }, [data, questionNo]);

  const delay = (duration,callback)=>{
       setTimeout(()=>{
          callback();
       },duration)
  }

  const handleClick= (ans)=>{
      setSelectedAnswer(ans);
      setClassName('answer active');
      delay(3000,()=>
      setClassName(ans.correct ? "answer correct" : "answer wrong")
      );

      delay(6000,()=>
         {
            if(ans.correct){
                correctAnswer();
                delay(1000,()=>{
                    setQuestionNo(prev=>prev+1);
                    setSelectedAnswer(null);
                });
                
            }
            else{
                wrongAnswer()
                delay(1000,()=>{ 
                    setStop(true);
                })
            }
         }
      );
  };

  return (
    <div className='quizz'>
          <div className='questions'>{question?.question}</div>
          <div className='answers'>
            {question?.answers.map((ans) => (
              <div className={selectAnswer===ans ? className:'answer'} 
              onClick={()=>handleClick(ans)}>{ans.text}</div>
            ))}
          </div>
    </div>
  );
}

export default Quizz;


