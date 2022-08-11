import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import { motion } from 'framer-motion';

function Home() {
  return (

    <div style={{backgroundColor: 'black'}}>
        <motion.div className="App"
            initial = {{opacity: 0}}
            animate = {{opacity: '100%', transition: {duration: 2.2}}}
            exit = {{x: -window.innerWidth, transition: {duration: 0.5}}}
        >
        <header className="App-home-header">
            Cocoon
        </header>
        <h2 className="line"> ____________</h2>
        <header className="App-home-instructions">
            <p>
            {instructionString(1)}
            </p>
            <p>
            {instructionString(2)}
            </p>
            <p>
            {instructionString(3)}
            </p>
            <p>
            {instructionString(4)}
            </p>
            <Link to='/example'>
            <button className="App-home-homeButtons">Example</button> 
            </Link>
            <Link to='/q1'>
            <button className="App-home-homeButtons">Start!</button>
            </Link>
        </header>
        </motion.div>
    </div>
  );
}

function instructionString(num){
  if(num === 1){
    // eslint-disable-next-line
    return  "This game will test your knowledge on 5 topics: \
      math, science, geography, world history, and one miscellaneous question. \
      There will be a new set of questions everyday and at the end of the quiz you \
      will be able to view your total score."
  }
  
  if(num === 2){
    // eslint-disable-next-line
    return "You will have one attempt per question. \
      When you click an answer, the answer will turn green if you are correct and red if you are incorrect. \
      You will be awarded 5 points for every correct answer."
  }

  if(num === 3){
    return "After answering, you will move on to the next question."
  }
   
  if(num === 4){
    // eslint-disable-next-line
    return  "To view an example of a question screen, press the 'example' buttom. Click on the 'start' button below to begin the game."
  }
}

export default Home;