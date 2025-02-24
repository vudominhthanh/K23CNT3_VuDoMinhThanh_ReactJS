import React, { Component } from 'react'

export default class VdmtClassCompEvent1 extends Component {
    VdmtClassCompEvent1Click = () => {
        alert('Button 1 - Clicked');
    }
    VdmtClassCompEvent2Click = (name) => {
        alert('Button 2 - Clicked, '+ name);
    }
  render() {
    return (
      <div>
            <button className='btn btn-primary mx-1' onClick={this.VdmtClassCompEvent1Click} >Button 1</button>
            <button className='btn btn-primary mx-1' onClick={()=>this.VdmtClassCompEvent2Click('Minh Thanh')}>Button 2</button>
      </div>
    )
  }
}
