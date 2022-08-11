import './questions.css';
import React, {useEffect, useState, useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

// import {fetchAPI} from './API_Calls.js';

var Q1flag;
function Q1() {

    const [question, setQuestion] = useState()
    const [correctAnswer, setCorrectAnswer] = useState()
    const [incA1, setincA1] = useState()
    const [incA2, setincA2] = useState()
    const [incA3, setincA3] = useState()

    useEffect(() => {
        function fetchQ(){
            axios.get('https://the-trivia-api.com/api/questions?categories=sport_and_leisure&limit=1', {
            }).then(res => {
                console.log(res.data)
                setQuestion(res.data[0].question)
                setCorrectAnswer(res.data[0].correctAnswer)
                setincA1(res.data[0].incorrectAnswers[0])
                setincA2(res.data[0].incorrectAnswers[1])
                setincA3(res.data[0].incorrectAnswers[2])
            })
        }  
        fetchQ()
    }, [])    
    
    var incChoices = [incA1, incA2, incA3];

    const [correct, setAnswer] = useState(0);
    useEffect(() => {
        function setCorrectAnswer() {
            setAnswer(generateCorrectAnswer());
        }

        setCorrectAnswer();
    }, []);

    const [color1, setColor1] = useState('white');
    const [color2, setColor2] = useState('white');
    const [color3, setColor3] = useState('white');
    const [color4, setColor4] = useState('white');

    const changeColor1 = () => {
        setColor1(checkAnswer(1, correct))
    }
    const changeColor2 = () => {
        setColor2(checkAnswer(2, correct))
    }
    const changeColor3 = () => {
        setColor3(checkAnswer(3, correct))
    }
    const changeColor4 = () => {
        setColor4(checkAnswer(4, correct))
    }


    const DelayedLink = ({ delay, replace, state, to, ...props }) => {
        const navigate = useNavigate();
        const timerRef = useRef();
        const clickHandler = (e) => {
            e.preventDefault();
            timerRef.current = setTimeout(navigate, delay, to, { replace, state });
        };

        return <Link to={to} {...props} onClick={clickHandler} />;
    };

    return(
        <div style={{backgroundColor: 'black'}}>
            <motion.div className="App"
                initial = {{opacity: 0}}
                animate = {{opacity: '100%', transition: {duration: 2.2}}}
                exit = {{x: -window.innerWidth, transition: {duration: 0.5}}}
            >
                <header className="topic">
                    Sports
                </header>
                <h2 className="line"> ____________</h2>
                <h3 className="question">
                    {question}
                </h3>
                <DelayedLink delay={500} to='/q2'>
                <button className="answers" onClick={changeColor1} style={{backgroundColor:color1}}>
                    {chooseAnswer(1, correct, correctAnswer, incChoices)}
                </button>
                </DelayedLink>
                <p>
                <DelayedLink delay={500} to='/q2'>
                <button className="answers" onClick={changeColor2} style={{backgroundColor:color2}}>
                    {chooseAnswer(2, correct, correctAnswer, incChoices)}
                </button>
                </DelayedLink>
                </p>
                <p>
                <DelayedLink delay={500} to='/q2'>
                <button className="answers" onClick={changeColor3} style={{backgroundColor:color3}}>
                    {chooseAnswer(3, correct, correctAnswer, incChoices)}
                </button>
                </DelayedLink>
                </p>
                <p>
                <DelayedLink delay={500} to='/q2'>
                <button className="answers" onClick={changeColor4} style={{backgroundColor:color4}}>
                    {chooseAnswer(4, correct, correctAnswer, incChoices)}
                </button>
                </DelayedLink>
                </p>
            </motion.div>
        </div>
    );
}

function chooseAnswer(choice, correct, correctAnswer, incChoices){
    var answer;
    var possibleChoices = [1, 2, 3, 4];
    if(choice === correct){
        answer = correctAnswer;
    }
    else if(choice === possibleChoices[0]){
        answer = incChoices[0]
        incChoices.splice(0, 1)
    }
    else if(choice === possibleChoices[1]){
        answer = incChoices[0]
        incChoices.splice(0, 1)
    }
    else if(choice === possibleChoices[2]){
        answer = incChoices[0]
        incChoices.splice(0, 1)
    }
    else if(choice === possibleChoices[3]){
        answer = incChoices[0]
        incChoices.splice(0, 1)    
    }
    return (answer);
}

function generateCorrectAnswer(){
    return Math.floor(Math.random() * 4) + 1;
}

function checkAnswer(selected, correct){
    if(selected === correct){
        Q1flag = 'correct'
        return('#00F000')
    }
    else{
        Q1flag = 'incorrect'
        return('red');
    }
}

export {Q1flag};
export default Q1;