import React, { Component } from 'react'
import VdmtFuncCompEvent1 from './Components/VdmtFuncCompEvent1'
import VdmtClassCompEvent1 from './Components/VdmtClassCompEvent1'
import VdmtFuncEventProps from './Components/VdmtFuncEventProps'
import VdmtClassEventProps from './Components/VdmtClassEventProps'
import VdmtClassEventState from './Components/VdmtClassEventState'

export default class VdmtApp extends Component {
  render() {
    return (
      <div className='container border mt-3'>
        <h1 className='text-center alert alert-info'>K23cnt3 - Vu Do Minh Thanh - Even and props</h1>
        <hr/>
        <div className='alert alert-danger'>
          <h2>Function Component Event</h2>
          <VdmtFuncCompEvent1/>
        </div>
        <hr/>
        <div className='alert alert-info'>
          <h2>Class Component Event</h2>
          <VdmtClassCompEvent1/>
        </div>
        <hr/>
        <div className='alert alert-danger'>
          <h2>Function Component Event, Props</h2>
          <VdmtFuncEventProps vdmtRenderName='Minh Thanh'/>
        </div>
        <hr/>
        <div className='alert alert-info'>
          <h2>Class Component Event, Props</h2>
          <VdmtClassEventProps/>                                                                    
        </div>
        <div className='alert alert-dangerdanger'>
          <h2>Class Component Event, State</h2>
          <VdmtClassEventState/>                                                                 
        </div>
      </div>
    )
  }
}

