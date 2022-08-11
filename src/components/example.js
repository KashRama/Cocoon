import './questions.css';
import './end.css';
import React from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import arrow from './arrow.jpeg'

function Example(){
    return(
        <div style={{backgroundColor: 'black'}}>
            <motion.div className="App"
                initial = {{opacity: 0}}
                animate = {{opacity: '100%', transition: {duration: 2.2}}}
                exit = {{x: -window.innerWidth, transition: {duration: 0.5}}}
            >
                <header className="topic">
                    Example
                </header>
                <header>
                    <Link to='/'>
                        <button className='return-home'><img src={arrow} alt="mine" /></button>
                    </Link>
                </header>
                <h2 className="line-2"> ____________</h2>
                <h3 className="question">
                    Sample Question - Correct Answer
                </h3>
                <button className="answers">
                    Answer #1
                </button>
                <p>
                <button className="answers">
                    Answer #2
                </button>
                </p>
                <p>
                <button className="answers">
                    Answer #3
                </button>
                </p>
                <p>
                <button className="answer-correct">
                    Correct Answer
                </button>
                </p>
                <p>
                <button className="answers">
                    Answer #4
                </button>
                </p>
                <p className='line'>___________________________________________________</p>
                <h3 className="question">
                    Sample Question - Incorrect Answer
                </h3>
                <button className="answers">
                    Answer #1
                </button>
                <p>
                <button className="answers">
                    Answer #2
                </button>
                </p>
                <p>
                <button className="answer-incorrect">
                    Incorrect Answer
                </button>
                </p>
                <p>
                <button className="answers">
                    Answer #3
                </button>
                </p>
                <p>
                <button className="answers">
                    Answer #4
                </button>
                </p>
                <p className='line'>___________________________________________________</p>
            </motion.div>
        </div>
    );

}

export default Example;