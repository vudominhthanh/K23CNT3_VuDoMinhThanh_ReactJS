import React, { Component } from 'react'
import Vdmtcontroll from './Components/Vdmtcontroll';
import VdmtStudentt from './Components/VdmtStudentt';
import Vdmtform from './Components/Vdmtform';

export default class VdmtApp
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [
        { id: 1, code: 'SV001', name: 'Nguy��n Văn A', age: 20, gender: 'Nam' },
        { id: 2, code: 'SV002', name: 'Nguy��n Văn B', age: 21, gender: 'Nữ' },
        { id: 3, code: 'SV003', name: 'Lê Văn C', age: 22, gender: 'Nam' },
        { id: 4, code: 'SV004', name: 'Trần Văn D', age: 23, gender: 'Nữ' },
    ],
    };
  }
  render() {
    return (
      <div>
          <h1 className='text-center'>Vu Do Minh Thanh</h1>
          <section className="containter-flue mt-3">
          <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                <Vdmtcontroll/>
                <VdmtStudentt  rederVdmtStudent={this.state.studentList} onVdmtHandleView={this.vdmtHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              <Vdmtform  rederVdmtStudent = {this.state.studentList}/>
            </div>
          </div>
        </section>
        </section>
      </div>
    )
  }
}
