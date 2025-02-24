import React, { Component } from 'react'

export default class VdmtClassEventState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vdmtName: "Minh Thanh",
            vdmtAge: 2025,
            vdmtAddress: "1234 Main St",
        };
    }

    vdmtEventHandleClick1 = () => {
        alert(`Hello ${this.state.vdmtName}! Your age is ${this.state.vdmtAge}. Your address is ${this.state.vdmtAddress}`);    
    }                                                   
    render() {
    return (
      <div>
        <button className='btn btn-primary' onClick={this.vdmtEventHandleClick1}>Button - Du lieu trong State</button>
      </div>
    )
  }
}
