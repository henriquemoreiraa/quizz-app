import React from "react" 
import easy from "../data/easy"
import medium from "../data/medium"
import hard from "../data/hard"
import "../style.css"

export default function Difficulty(props) {
    return (
        <div>
                {
                    props.displayDifficulty.isEasy &&
                    <div>
                        {props.showScore ? (
                        <div className="quest--answers--div">
                            <div className="num--quest--select-diff">
                                
                                <h1></h1>
                                
                                <button className="button-select--diff" onClick={props.backToSelectLevel}>Select difficult
                                </button>
                                
                            </div>
                                <div className="only--quest--answer-div">
                                    <h2 className="score--text">You scored {props.score}/{easy.length} correct answers on easy level
                                    </h2>
                                
                                    <div className="button-score--div">
                                
                                        <button className="button--score--screen" onClick={props.handleDifficultEasy}>Restart level
                                        </button>
                                        
                                        <button className="button--score--screen" onClick={props.handleDifficultMedium}>Medium level
                                        </button>                                  
                                    </div>
                            </div>
                        </div> 
                    ) : (
                        <div className="quest--answers--div">
                            <div className="num--quest--select-diff">
                            
                                <h2 className="num--quest">Question {props.currentQuestion + 1}/{easy.length}
                                </h2>
                                
                                <button className="button-select--diff" onClick={props.backToSelectLevel}>Select difficult
                                </button>
                                
                            </div>
                            <div className="only--quest--answer-div">
                                <h3>{easy[props.currentQuestion].questionText}</h3> 
                                
                                <div className="button--answers--div">
                                
                                    {easy[props.currentQuestion].answersOptions.map(answer => (
                                    <button className="button--answers" onClick={() => props.handleAnswerButton(answer.isCorrect)}>{answer.answerText}</button>         
                                    ))}
                                    
                                </div>
                            </div>
                                
                        </div>
                        )}
                    </div>
                }
                
                {
                    props.displayDifficulty.isMedium &&
                    <div>
                        {props.showScore ? (
                            <div className="quest--answers--div">
                                <div className="num--quest--select-diff">
                                
                                    <h1></h1>
                                    
                                    <button className="button-select--diff" onClick={props.backToSelectLevel}>Select difficult</button>
                                    
                                </div>
                                <div className="only--quest--answer-div">

                                    <h2 className="score--text">You scored {props.score}/{easy.length} correct answers on medium level
                                    </h2>
                                    
                                    <div className="button-score--div">
                                    
                                        <button className="button--score--screen" onClick={props.handleDifficultEasy}>Easy level
                                        </button>
                                        
                                        <button className="button--score--screen" onClick={props.handleDifficultMedium}>Restart level
                                        </button>
                                        
                                        <button className="button--score--screen" onClick={props.handleDifficultHard}>Hard level
                                        </button>
                                        
                                    </div>
                                </div>
                            </div> 
                        ) : (
                        <div className="quest--answers--div">
                            <div className="num--quest--select-diff">
                            
                                <h2 className="num--quest">Question {props.currentQuestion + 1}/{medium.length}
                                </h2>
                                
                                <button className="button-select--diff" onClick={props.backToSelectLevel}>Select difficult
                                </button>
                                
                            </div>
                            <div className="only--quest--answer-div">
                            <h3>{medium[props.currentQuestion].questionText}</h3>        
                            <div className="button--answers--div">
                            
                                {medium[props.currentQuestion].answersOptions.map(answer => (
                                <button className="button--answers" onClick={() => props.handleAnswerButton(answer.isCorrect)}>{answer.answerText}</button>         
                            ))}   
                              
                            </div>
                            </div>
                            
                        </div>
                        )}  
                    </div>
                }  
                {
                    props.displayDifficulty.isHard &&
                    <div>
                        {props.showScore ? (
                            <div className="quest--answers--div">
                                <div className="num--quest--select-diff">
                                
                                    <h1></h1>
                                    
                                    <button className="button-select--diff" onClick={props.backToSelectLevel}>Select difficult</button>
                                    
                                </div>
                                <div className="only--quest--answer-div">
                                    <h2 className="score--text">You scored {props.score}/{easy.length} correct answers on hard level
                                    </h2>
                                    
                                    <div className="button-score--div">
                                    
                                        <button className="button--score--screen" onClick={props.handleDifficultMedium}>Medium level</button>
                                        
                                        <button className="button--score--screen" onClick={props.handleDifficultHard}>Restart level</button>
                                        
                                    </div>

                                </div>
                            </div> 
                        ) : (
                        <div className="quest--answers--div">
                            <div className="num--quest--select-diff">
                            
                                <h2 className="num--quest">Question {props.currentQuestion + 1}/{hard.length}
                                </h2>
                                
                                <button className="button-select--diff" onClick={props.backToSelectLevel}>Select difficult
                                </button>
                                
                            </div>
                            <div className="only--quest--answer-div">
                            <h3>{hard[props.currentQuestion].questionText}</h3>
                             
                            <div className="button--answers--div">
                            
                                {hard[props.currentQuestion].answersOptions.map(answer => (
                                <button className="button--answers" onClick={() => props.handleAnswerButton(answer.isCorrect)}>{answer.answerText}</button>         
                                ))}                                   
                            </div>       

                            </div>
                        </div>
                        )} 
                    </div>
                }                        
        </div>
    )
}