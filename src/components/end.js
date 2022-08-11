import './end.css';
import React from 'react'
import {Link} from 'react-router-dom';
import {Q1flag} from './q1.js';
import {Q2flag} from './q2.js';
import {Q3flag} from './q3.js';
import {Q4flag} from './q4.js';
import {Q5flag} from './q5.js';
import { motion } from 'framer-motion';
import arrow from './arrow.jpeg'

let score = 0;
function End(){
    return(
        <div style={{backgroundColor: 'black'}}>
            <motion.div className="end"
                initial = {{opacity: 0}}
                animate = {{opacity: '100%', transition: {duration: 2.2}}}
                exit = {{x: -window.innerWidth, transition: {duration: 0.5}}}
            >
                <header className='end-message'>
                    Congratulations! Your score is:
                </header>
                <header>
                    <Link to='/'>
                        <button className='return-home'><img src={arrow} alt="mine" /></button>
                    </Link>
                </header>
                <p className='score'>{calcScore(score, Q1flag, Q2flag, Q3flag, Q4flag, Q5flag)}</p>
            </motion.div>
        </div>
    );
}

function calcScore(score, Q1flag, Q2flag, Q3flag, Q4flag, Q5flag){
    if(Q1flag === 'correct'){
        score = score + 5
    }
    if(Q2flag === 'correct'){
        score = score + 5
    }
    if(Q3flag === 'correct'){
        score = score + 5
    }
    if(Q4flag === 'correct'){
        score = score + 5
    }
    if(Q5flag === 'correct'){
        score = score + 5
    }

    return score
}

export default End;