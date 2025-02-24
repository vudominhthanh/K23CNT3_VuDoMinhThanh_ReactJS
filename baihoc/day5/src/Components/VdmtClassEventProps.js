import React, { Component } from 'react'

export default class VdmtClassEventProps extends Component {
    vdmtEventHandleClick1 = () => {
        alert('Hello......' + this.props.vdmtRenderTitle);
    }
  render() {
    return (
      <div className='alert alert-info'>
            <button className='btn btn-primary' onClick={this.vdmtEventHandleClick1}>Button 1</button>
      </div>
    )   
  }
}
