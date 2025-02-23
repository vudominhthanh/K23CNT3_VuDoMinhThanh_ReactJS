import React, { Component } from 'react'

class VdmtClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "Minh Thanh",
        age: "2025",
    };
  }
    changeInfo = (ev) => {
        this.setState({
            name: "Thanhvu",
        })
  }
  render() {
    return (    
      <div className='alert alert-success'>
            <h2>trinh bay du lieu tu state</h2>
            <p>Info state (name): {this.state.name}</p>
            <p>Info state (age): {this.state.age}</p>

            <hr/>
            <button className='btn btn=primary' onClick={this.changeInfo}>Channge Info</button>
            <hr/>
            <h3>Lay du lieu tu Props</h3>
            <p>Name: {this.props.renderName}</p>
            <p>Name : {this.props.renderPerson ?this.props.renderPerson.name:""}</p>
            <p>Address : {this.props.renderPerson ?this.props.renderPerson.address:""}</p>
      </div>
    )
  }
}

export default VdmtClassComp;