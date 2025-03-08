import React, { Component } from 'react'

export default class Vdmtstudentinf extends Component {
  constructor(props) {
    super(props);
  }

  vdmtHandleView = (VdmtStudentt) => {
    this.props.onVdmtHandleView(VdmtStudentt);
  }
  render() {
    let { renderVdmtStudent, key } = this.props;
    console.log("Student : ",enderVdmtStudent);
    return (
      <div>
        <tr>
                          <td>{key}</td>
                          <td>{renderVdmtStudent.id}</td>
                          <td>{renderVdmtStudent.name}</td>
                          <td>{renderVdmtStudent.age}</td>
                          <td>{renderVdmtStudent.gender}</td>
                          <td>
                            <div className="template-demo">
                              <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                onClick={() => this.vdmtHandleView(renderVdmtStudent)}
                              >
                                Xem
                              </button>
                              <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                              >
                                Sửa
                              </button>
                              <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                              >
                                Xóa
                              </button>
                            </div>
                          </td>
                        </tr>
      </div>
    )
  }
}
