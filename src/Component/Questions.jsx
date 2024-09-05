import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './index.css';


const Questions = () => {

    // store the fetch data
    const navigate = useNavigate();
    const [question, setQuestion] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);

    // Effect the data when component is mount
    useEffect(() => {
        fetchData()
    }, []) //empty dependency array ensures that effect runs once a mount

    // functio to fetch the data
    const fetchData = async () => {

        try {
            // make a GET api request
            const response = await fetch(
                `https://opentdb.com/api.php?amount=20`
            )

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            // parse json data from the response
            const result = await response.json();
            // console.log(result.results)

            // update the state with the fetched data
            setQuestion(result.results);
            setTotalQuestions(result.results.length);

        } catch (error) {
            console.error("Error Fetch Message", error.message);
        }

    }

    const handleAnswer = (answer) => {
        if (answer === question[currentQuestion].correct_answer) {
            setScore(score + 1);
        }

        if (currentQuestion < question.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // You can add a message or a redirect here when the quiz is completed
            return navigate("/complete")
        }
        if (setCurrentQuestion == 20) {
            setCurrentQuestion(currentQuestion);
        }
    }
    // render the component
    return (
        <>
            <div className="text-black flex flex-col bg-gradient-to-r from-neutral-300 to-stone-400 items-center w-full h-lvh">
                <div className="flex flex-col justify-center text-center items-center w-full">
                    <h1 id="quiz" className='bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent items-center text-center text-3xl border-b border-stone-500 font-semibold'>Quiz Game</h1>
                </div>
                <div id="heading" className="min-w-min flex flex-col justify-center mb-10 items-center gap-5">
                    {question.length > 0 && (
                        <div className="w-full flex flex-col justify-center items-center text-center h-lvh mt-3 gap-14 ">
                            <div className="flex flex-col w-full gap-7 justify-center items-center">
                                <div className="flex flex-row min-w-min justify-center items-center text-center">
                                    <div className="min-w-min flex flex-start justify-center items-center text-white text-2xl">
                                        <h1>Score: {score}</h1>
                                    </div>
                                </div>
                                <div className="flex flex-row min-w-min justify-center gap-10">
                                    {/* <p className="text-orange-600">Question {currentQuestion + 1} of {totalQuestions}</p> */}
                                    <h2 className="font-semibold text-zinc-900 text-2xl sm:text-xl sm:font-normal md:text-xl md:font-normal"> {currentQuestion + 1}. {question[currentQuestion].question}</h2>
                                </div>
                            </div>

                            <div className="w-full flex flex-row justify-center items-center">
                                <ul className=" min-w-min text-zinc-900 text-xl">
                                    {question[currentQuestion].incorrect_answers.map((answer, index) => (
                                        <li key={index} className="mb-3 border-2 border-amber-100 hover:bg-amber-100" >
                                            <button onClick={() => handleAnswer(answer)}>{answer}</button>
                                        </li>))}
                                    <li className="mb-3 border-2 border-amber-100" >
                                        <button onClick={() => handleAnswer(question[currentQuestion].correct_answer)}>
                                            {question[currentQuestion].correct_answer}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    <div className='w-full h-lvh flex flex-row justify-center items-center text-center text-2xl text-amber-100'>
                        {!question || question.length === 0 && (
                            <p>Loading questions...</p>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Questions;