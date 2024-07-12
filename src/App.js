import logo from './logo.svg';
import './App.css';
import { useRef, useEffect } from 'react';

import Works from './components/Works'
import Works1 from './components/Works1'
import Works2 from './components/Works2';
import WorksB from './components/WorksB'
import WorksC from './components/WorksC'
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';

import pfp from './components/instadp.jpeg'
import instagram from './components/logoinstagram.png'
import linkedin from './components/logolinkedin.png'
import twitter from './components/logotwitter.png'
import github from './components/logogithub.png'

function App() {
  return (
    <>
      <Landing></Landing>
      <div>
        <Works></Works>
        <Works1></Works1>
        <Works2></Works2>
        <WorksB></WorksB>
        <WorksC></WorksC>
      </div >
      <div>
        <About></About>
      </div>
      <div className='contact-container'>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
