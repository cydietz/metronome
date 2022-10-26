import React from 'react';
import {createRoot} from 'react-dom/client';
import { App } from './components/App';
import { Checkbox } from './components/Checkbox';

const nameObj = {
  firstname: "Christian",
  lastname: "Dietz"
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App title='title' nameObj={nameObj}/>
    <Checkbox/>
  </React.StrictMode>
)