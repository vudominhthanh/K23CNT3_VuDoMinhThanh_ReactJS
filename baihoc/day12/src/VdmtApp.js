import React, { useState } from 'react'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import VdmtNavNar from './components/VdmtNavNar'
import VdmtHome from './components/VdmtHome'
import VdmtAbout from './components/VdmtAbout'
import VdmtContact from './components/VdmtContact'
import VdmtListuser from './components/VdmtListuser'
import VdmtFormuser from './components/VdmtFormuser'

export default function VdmtApp() {

  const listusers = [
    {id: 1, name: 'User 1', age: 25},
    {id: 2, name: 'User 2', age: 30},
    {id: 3, name: 'User 3', age: 28},
    {id: 4, name: 'User 4', age: 29}, 
  ]

  const [Vdmtuser , setVdmtuser]  = useState(listusers)

  const vdmtHandleAdd = (vdmtParam) => {
    console.log('check :', vdmtParam)
    setVdmtuser(prev => {
      return [
        ...prev,
        vdmtParam
      ]
    })
  }

  return (
    <div className='container border my-3'>
      <h1>React router dom demo - [Vdmt]</h1>
      <hr/>
      <Router>
        <VdmtNavNar/>
        <Routes>
          <Route path='/' element = {<VdmtHome/> } />
          <Route path='/about' element = {<VdmtAbout/> } />
          <Route path='/contact' element = {<VdmtContact/> } />
          <Route path='/List-user' element = {<VdmtListuser renderVdmtlistuers = {Vdmtuser}/> } />
          <Route path='/Create-user' element = {<VdmtFormuser onVdmtAddNew={vdmtHandleAdd}/> } />
        </Routes>
      </Router>
    </div>
  )
}

