import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Jason from './jason.tsx'
import MyProps from './jonathan.tsx'
import MyCard from './daisyui.tsx'
import Navbar from './navbar.tsx'
import OpenApp from './mystate.tsx'
import HeroFunction from './Hero.tsx'
import Counter from './myapp.tsx'
import Car from './propsand.tsx'
// import LogicExpress from './logic.tsx'

// condition ? true : false 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <HeroFunction/>
    {/* <App /> */}
    {/* <Jason/>
    <OpenApp/> */}
    <Counter/>
    {/* <LogicExpress/> */}
    <Car brand='Ford' isGoal={true}/>
    <MyCard/>

    
    
    
    
 
  </StrictMode>,
)
