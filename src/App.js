import logo from './logo.svg';
import './App.css';
import { useRef, useEffect } from 'react';

import Works from './components/Works'
import WorksB from './components/WorksB'
import WorksC from './components/WorksC'
import Landing from './components/Landing';
import About from './components/About';

import pfp from './components/instadp.jpeg'
import instagram from './components/logoinstagram.png'
import linkedin from './components/logolinkedin.png'
import twitter from './components/logotwitter.png'
import github from './components/logogithub.png'

function App() {

  const works1 = {}

  return (
    <>
      <div className='landing-container'>
        <Landing></Landing>
      </div >
      <div>
        <Works></Works>
        <WorksB></WorksB>
        <WorksC></WorksC>
      </div >
      <div>
        <About></About>
      </div>
    </>
  );
}

export default App;
