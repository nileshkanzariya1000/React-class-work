import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateExample3 from './lec0601/hookexample3';
import Apisimulation from './lec1801/hookuseeffext';
import Timer from './lec1801/timer';
import List from './lec1801/unorderlist';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List/>
  </StrictMode>
);
