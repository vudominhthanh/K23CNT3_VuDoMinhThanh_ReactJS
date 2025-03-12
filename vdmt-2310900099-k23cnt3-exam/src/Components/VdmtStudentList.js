import React, { Component } from 'react'

export default class VdmtStudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            { id: "2310900099", fullname: "Vũ Đỗ Minh Thành", username: "vudominhthanh", password: "123456" },
            { id: "54321", fullname: "Member a", username: "membera", password: "123456" },
            { id: "98765", fullname: "Member b", username: "memberb", password: "123456" },
    }
    }
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
                                <td>{this.state.id}</td>
                                <td>{this.state.fullname}</td>
                                <td>{this.state.username}</td>
                                <td>{this.state.password}</td>
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
