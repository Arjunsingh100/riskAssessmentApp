import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Assessment from './components/Assessment'
import Library from './components/Library'
import RiskSnario from './components/RiskSnario'
import Reports from './components/Reports'
import AddRiskScenario from './Forms/AddRiskScenario'
import RiskScenariosList from './components/RiskScenariosList'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/library' element={<Library />} />
        <Route path='/risksnario' element={<RiskSnario />}>
          <Route path='addRiskScenario' element={<AddRiskScenario />} />
          <Route path='riskscenariolists' element={<RiskScenariosList />}/>
        </Route>
        <Route path='/assessment' element={<Assessment />} />
        <Route path='/reports' element={<Reports />} />
      </Routes>
    </>
  )
}

export default App
