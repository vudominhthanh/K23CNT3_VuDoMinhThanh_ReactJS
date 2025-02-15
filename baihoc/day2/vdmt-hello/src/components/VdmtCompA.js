import React, { Component } from 'react'

export default class VdmtCompA extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "Minh Thanh",
        age: "2025",
    };
}

  render() {
    return (
      <div>
        <h2>VdmtCompA</h2>
        <p>Du lieu trong state : {this.state.name} {this.state.age}</p>
        <p>Name : {this.props.vdmtname}</p>  
        <p>Address : {this.props.vdmtadd}</p>  
      </div>
    )
  }
}
