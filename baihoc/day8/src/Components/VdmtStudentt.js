import React, { Component } from 'react'
import Vdmtstudentinf from './Vdmtstudentinf'

export default class VdmtStudentt extends Component {
  constructor(props) {
    super(props);
  }

  vdmtHanleView = (Vdmtstudentinf) => {
    this.props.onVdmtHandleView(Vdmtstudentinf);
  }

  ;
  render() {
    let  (renderVdmtStudent) = this.props;
    console.log("List:",renderVdmtStudent);

    let vdmtElementsStudent = renderVdmtStudent.map((VdmtItem,index)=>{
      return <Vdmtstudentinf key={index} renderVdmtStudent={VdmtItem} onVdmtHandleView={this.vdmtHanleView} />
    })
    return (
      <div>
        <div className="card-body">
                  <h3 className="card-title">Danh sách sinh viên</h3>
                  <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Mã sinh viên</th>
                          <th>Tên sinh viên</th>
                          <th>Tuổi</th>
                          <th>Giới tính</th>
                          <th>Hành động</th>
                        </tr>
                      </thead>
                      <tbody>
                        <Vdmtstudentinf/>
                      </tbody>
                    </table>
                  </div>
                </div>
      </div>
    )
  }
}
