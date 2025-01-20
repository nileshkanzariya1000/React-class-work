import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateExample3 from './lec0601/hookexample3';
import Apisimulation from './lec1801/hookuseeffext';
import Timer from './lec1801/timer';
import List from './lec1801/unorderlist';
import IMAGE_List from './lec2001/image_corosole';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IMAGE_List/>
  </StrictMode>
);
