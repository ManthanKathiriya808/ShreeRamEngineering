import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Demo from './pages/Demo'

import GeneralEngineeringItems from './pages/GeneralEngineeringItems'
import FabricationItems from './pages/FabricationItems'
import PumpSpares from './pages/PumpSpares'
import PANozzles from './pages/PANozzles'
import FastenersPipeFittings from './pages/FastenersPipeFittings'
import ValveTypes from './pages/ValveTypes'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import Quality from './pages/Quality'
import ContactUs from './pages/ContactUs'
import Facilities from './pages/Facilities'
import BallValves from './pages/BallValves'
import PlugValves from './pages/PlugValves'
import GlobeValves from './pages/GlobeValves'
import SwingCheckValves from './pages/SwingCheckValves'
import SteamValves from './pages/SteamValves'
import StrainerValves from './pages/StrainerValves'
import PPValves from './pages/PPValves'
import DiaphragmValves from './pages/DiaphragmValves'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/'  element={<Home/>} />
          <Route  path='/demo'  element={<Demo/>} />
          <Route  path='/products'  element={<Products/>} />
          <Route  path='/products/industrial-valves'  element={<ValveTypes/>} />
          <Route  path='/products/valve-types'  element={<ValveTypes/>} />
          <Route  path='/products/general-items'  element={<GeneralEngineeringItems/>} />
          <Route  path='/products/fabrication-items'  element={<FabricationItems/>} />
          <Route  path='/products/pump-spares'  element={<PumpSpares/>} />
          <Route  path='/products/pa-nozzels'  element={<PANozzles/>} />
          <Route  path='/products/fasteners-pipe'  element={<FastenersPipeFittings/>} />
          <Route  path='/about'  element={<AboutUs/>} />
          <Route  path='/quality'  element={<Quality/>} />
          <Route  path='/contact'  element={<ContactUs/>} />
          <Route  path='/facilities'  element={<Facilities/>} />
          <Route  path='/products/ball-valves'  element={<BallValves/>} />
          <Route  path='/products/plug-valves'  element={<PlugValves/>} />
          <Route  path='/products/globe-valves'  element={<GlobeValves/>} />
          <Route  path='/products/swing-check-valves'  element={<SwingCheckValves/>} />
          <Route  path='/products/steam-valves'  element={<SteamValves/>} />
          <Route  path='/products/strainer-valves'  element={<StrainerValves/>} />
          <Route  path='/products/pp-valves'  element={<PPValves/>} />
          <Route  path='/products/diaphragm-valves'  element={<DiaphragmValves/>} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  )
}

export default App
