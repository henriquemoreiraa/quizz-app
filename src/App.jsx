import React from "react" 
import { useState} from "react"
import easy from "./data/easy"
import "./style.css"
import Difficulty from "./components/Difficulty.jsx"


export default function App() {
    
    const [displayDifficulty, setDisplayDifficult] = useState({isEasy: false, isHard: false, isMedium: false})
    
    const [currentQuestion, setCurrentQuestion] = useState(0)
    
    const [showScore, setShowScore] = useState(false)
    
    const [score, setScore] = useState(0)
    
    function handleDifficultEasy() {
        if (displayDifficulty.isMedium === true) {
            setDisplayDifficult(prevDifficult => {
                return {...prevDifficult, isMedium: !prevDifficult.isMedium}
            })
        }
        
        if (displayDifficulty.isEasy === true) {
            setDisplayDifficult(prevDifficult => {
                return {...prevDifficult, isEasy: !prevDifficult.isEasy}
            })
        }
        
        setScore(0)
        setShowScore(false)
        setCurrentQuestion(0)
        
        setDisplayDifficult(prevDifficult => {
            return {...prevDifficult, isEasy: !prevDifficult.isEasy}
        })
    }
    
    function handleDifficultMedium() {
        if (displayDifficulty.isEasy === true) {
            setDisplayDifficult(prevDifficult => {
                return {...prevDifficult, isEasy: !prevDifficult.isEasy}
            })
        }
        
        if (displayDifficulty.isHard === true) {
            setDisplayDifficult(prevDifficult => {
                return {...prevDifficult, isHard: !prevDifficult.isHard}
            })
        }
        
        if (displayDifficulty.isMedium === true) {
            setDisplayDifficult(prevDifficult => {
                return {...prevDifficult, isMedium: !prevDifficult.isMedium}
            })
        }
        
        setScore(0)
        setShowScore(false)
        setCurrentQuestion(0)
        
        setDisplayDifficult(prevDifficult => {
            return {...prevDifficult, isMedium: !prevDifficult.isMedium}
        })
    }
    
    function handleDifficultHard() {
        if (displayDifficulty.isMedium === true) {
            setDisplayDifficult(prevDifficult => {
                return {...prevDifficult, isMedium: !prevDifficult.isMedium}
            })
        }
        
        if (displayDifficulty.isHard === true) {
            setDisplayDifficult(prevDifficult => {
                return {...prevDifficult, isHard: !prevDifficult.isHard}
            })
        }    
        
        setScore(0)
        setShowScore(false)
        setCurrentQuestion(0)
        
        setDisplayDifficult(prevDifficult => {
            return {...prevDifficult, isHard: !prevDifficult.isHard}
        }) 
    }
    
    function backToSelectLevel() {
        setScore(0)
        setShowScore(false)
        setCurrentQuestion(0)
        
        setDisplayDifficult(prevDifficult => {
            return {...prevDifficult, isHard: false, isMedium: false, isEasy: false}
        })
        
        
    }
    
    function handleAnswerButton(isCorrect) {
        if (isCorrect === true) {
            setScore(score + 1)
        }
        
        const nextQuestion = currentQuestion + 1
        if (nextQuestion < easy.length) {           
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
            
        }
    }
    
    return (
        <main>
            {
                !displayDifficulty.isEasy && !displayDifficulty.isMedium && !displayDifficulty.isHard
                ?
                    <div className="select--level">
                    
                        <h1 className="select--level--title">Computer science quizz!</h1>
                        
                        <p className="sele-one-diff-level">Select one difficulty level</p>
                        
                        <div className="button-level-div">
                        
                            <button className="button--level"  onClick={handleDifficultEasy}>Easy
                            </button>
                            
                            <button className="button--level"  onClick={handleDifficultMedium}>Medium
                            </button>
                            
                            <button className="button--level"  onClick={handleDifficultHard}>Hard
                            </button>
                            
                        </div>
                    </div> 
                :
                    <div>
                        <Difficulty 
                        displayDifficulty={displayDifficulty}
                         currentQuestion={currentQuestion}
                          handleAnswerButton={handleAnswerButton}
                           handleDifficultEasy={handleDifficultEasy}
                            handleDifficultMedium={handleDifficultMedium}
                             handleDifficultHard={handleDifficultHard}
                              backToSelectLevel={backToSelectLevel}
                              showScore={showScore}
                               score={score} 
                               /> 
                    </div> 
                        
            } 
            
        </main>
    )
}
