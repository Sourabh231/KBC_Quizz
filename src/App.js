import React, { useEffect, useState } from 'react';
import './App.css';
import Quizz from './Components/Quizz';
import Timer from './Components/Timer';
import Start from './Components/Start';

function App() {
  const [username, setUsername] = useState(null);
  const [questionNo, setQuestionNo] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who is the Father of Indian Navy??",
      answers: [
        {
          text: "Dr.Jagdishchandra Bose",
          correct: false,
        },
        {
          text: "Rabindranath Tagore",
          correct: false,
        },
        {
          text: "Cha.Shivaji Maharaj",
          correct: true,
        },
        {
          text: "Shahu Maharaj",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who is the Father of Biology?",
      answers: [
        {
          text: "Linnaeus",
          correct: false,
        },
        {
          text: "Aristotal",
          correct: true,
        },
        {
          text: "Theophratus",
          correct: false,
        },
        {
          text: "Mendel",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the pH value of the human body?",
      answers: [
        {
          text: "9.2 to 9.8",
          correct: false,
        },
        {
          text: "7.0 to 7.8",
          correct: true,
        },
        {
          text: "6.1 to 6.3",
          correct: false,
        },
        {
          text: "5.4 to 5.6",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which of the given amendments made it compulsory for the president to consent to the constitutional Amendment bills?",
      answers: [
        {
          text: "27th",
          correct: false,
        },
        {
          text: "29th",
          correct: false,
        },
        {
          text: "24th",
          correct: true,
        },
        {
          text: "22th",
          correct: false,
        },
      ],
    },{
      id: 8,
      question: "Which of the following Himalayan regions is called Shivaliks?",
      answers: [
        {
          text: "Outer Himalayas",
          correct: true,
        },
        {
          text: "Upper Himalayas",
          correct: false,
        },
        {
          text: "Lower Himalayas",
          correct: false,
        },
        {
          text: "Inner Himalayas",
          correct: false,
        },
      ],
    },{
      id: 9,
      question: "Forming of Association in India is",
      answers: [
        {
          text: "Legal Right",
          correct: false,
        },
        {
          text: "Illegal Right",
          correct: false,
        },
        {
          text: "Natural Right",
          correct: false,
        },
        {
          text: "Fundamental Right.",
          correct: true,
        },
      ],
    },{
      id: 10,
      question: "Right to emergency medical aid is a",
      answers: [
        {
          text: "Legal Right",
          correct: false,
        },
        {
          text: "Fundamental Right",
          correct: true,
        },
        {
          text: "Constitutional Right",
          correct: false,
        },
        {
          text: "Illegal Right",
          correct: false,
        },
      ],
    },{
      id: 11,
      question: " Chelaiya Samiti is related to which of the following?",
      answers: [
        {
          text: "Banking sector",
          correct: false,
        },
        {
          text: "Insurance sector",
          correct: false,
        },
        {
          text: "Health Sector",
          correct: false,
        },
        {
          text: "Tax reforms",
          correct: true,
        },
      ],
    },{
      id: 12,
      question: "Which of the given devices is used for counting blood cells?",
      answers: [
        {
          text: "Hmelethometer",
          correct: false,
        },
        {
          text: "Spyscometer",
          correct: false,
        },
        {
          text: "Hemocytometer",
          correct: true,
        },
        {
          text: "Hamosytometer",
          correct: false,
        },
      ],
    },{
      id: 13,
      question: "Which of the given compounds is used to make fireproof clothing?",
      answers: [
        {
          text: "Aluminum chloride",
          correct: false,
        },
        {
          text: "Aluminum Sulphate",
          correct: true,
        },
        {
          text: "Magnesium Chloride",
          correct: false,
        },
        {
          text: "Magnesium Sulphate",
          correct: false,
        },
      ],
    },{
      id: 14,
      question: "Which of the given cities is located on the bank of river Ganga?",
      answers: [
        {
          text: "Patna",
          correct: true,
        },
        {
          text: "Gwalior",
          correct: false,
        },
        {
          text: "Bhopal",
          correct: false,
        },
        {
          text: "Mathura",
          correct: false,
        },
      ],
    },{
      id: 15,
      question: "The driving force of an ecosystem is?",
      answers: [
        {
          text: "Carbon Mono oxide",
          correct: false,
        },
        {
          text: "Biogas",
          correct: false,
        },
        {
          text: "Solar Energy",
          correct: true,
        },
        {
          text: "Carbon dioxide",
          correct: false,
        },
      ],
    },{
      id: 16,
      question: "Which of the given coins was known as 'Karshapana' in ancient literature?",
      answers: [
        {
          text: "Gold coins",
          correct: false,
        },
        {
          text: "Bronze coins",
          correct: false,
        },
        {
          text: "Punch marked coins",
          correct: true,
        },
        {
          text: "Iron coins",
          correct: false,
        },
      ],
    }
  ];

  const moneyPyramid = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 400" },
    { id: 5, amount: "$ 500" },
    { id: 6, amount: "$ 1000" },
    { id: 7, amount: "$ 2000" },
    { id: 8, amount: "$ 4000" },
    { id: 9, amount: "$ 8000" },
    { id: 10, amount: "$ 16000" },
    { id: 11, amount: "$ 35000" },
    { id: 12, amount: "$ 75000" },
    { id: 13, amount: "$ 125000" },
    { id: 14, amount: "$ 250000" },
    { id: 15, amount: "$ 500000" },
    { id: 16, amount: "$ 1000000" },
  ].reverse();

  useEffect(() => {
    questionNo > 1 && setEarned(moneyPyramid.find((prevmo) => prevmo.id === questionNo - 1).amount)
  }, [moneyPyramid, questionNo])
  return (
    <div className="app">
      {username ? (
        <>
          <div className='main'>
            {stop ? <h1 className='popUp'>You Earned:{earned}</h1> : (
              <>
                <div className='top'>
                  <div className='timer'><Timer setStop={setStop} questionNo={questionNo} /></div>
                </div>
                <div className='bottom'>
                  <Quizz data={data}
                    setStop={setStop}
                    setQuestionNo={setQuestionNo}
                    questionNo={questionNo}
                  />
                </div>
              </>
            )}
          </div>
          <div className='pyramid'>
            <ul className='moneyList'>
              {moneyPyramid.map((price) => (
                <li className={questionNo === price.id ? 'active' : 'moneyListItem'}>
                  <span className="moneyListItemNumber">{price.id}</span>
                  <span className="moneyListItemAmount">{price.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : <Start setUsername={setUsername} />}

    </div>
  );
}

export default App;
