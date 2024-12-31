import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyButton3 from './lec3112/purefunc2';
import FuncComp1 from './lec3112/hookcomp1';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FuncComp1/>

  </StrictMode>
);
