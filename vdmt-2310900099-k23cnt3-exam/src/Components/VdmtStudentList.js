import React, { Component } from 'react'

export default class VdmtStudentList extends Component {
    return (
      <div>
              <div className="card-body">
                        <h3 className="card-title">Danh sách sinh viên</h3>
                        <div className="table-responsive pt-3">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>username</th>
                                <th>password</th>
                              </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{key}</td>
                                <td>{members.Vdmtid}</td>
                                <td>{members.Vdmtfullname}</td>
                                <td>{members.Vdmtusername}</td>
                                <td>{members.Vdmtpassword}</td>
                                <td>
                                    <div className="template-demo">
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-icon-text"
                                        onClick={() => this.vdmtHandleView(members)}
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
                            </tbody>
                          </table>
                        </div>
                      </div>
            </div>
    )
  }
}
