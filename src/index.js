import React from 'react';
import {createRoot} from 'react-dom/client';
import { App } from './components/App';
import { Checkbox } from './components/Checkbox';
import { Metronome } from './components/Metronome';
import {Clock} from './components/Clock';

const nameObj = {
  name: "MetronomeApp"
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App title='title' nameObj={nameObj}/>
    <Clock/>
    <Checkbox/>
    <Metronome/>
  </React.StrictMode>
)