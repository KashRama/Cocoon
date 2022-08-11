import React from 'react';
import Home from './home';
import Q1 from './q1';
import Q2 from './q2';
import Q3 from './q3';
import Q4 from './q4';
import Q5 from './q5';
import End from './end';
import Example from './example';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Home/>}></Route>
            <Route path='/example' element={<Example/>}></Route>
            <Route path='/q1' element={<Q1/>}></Route>
            <Route path='/q2' element={<Q2/>}></Route>
            <Route path='/q3' element={<Q3/>}></Route>
            <Route path='/q4' element={<Q4/>}></Route>
            <Route path='/q5' element={<Q5/>}></Route>
            <Route path='/end' element={<End/>}></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
