import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function VdmtListTask() {
    const [vdmtTask , setVdmtTask] = useState([])

    const vdmtApiOnl = "https://67ef9fa92a80b06b8895043b.mockapi.io/vdmtApi/2310900099/vdmtTask"

    useEffect(() => {
        axios
            .get(vdmtApiOnl)
            .then(response => {
                setVdmtTask(response.data)
            })
            .catch(error => {
                console.error('Error fetching data: ', error)
            })
    },[])

    const vdmtHandelDelete = (vdmtTaskId) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
          axios
            .delete(`https://67ef9fa92a80b06b8895043b.mockapi.io/vdmtApi/2310900099/vdmtTask/${vdmtTaskId}`)
            .then(() => {
              setVdmtTask((prevUsers) =>
                prevUsers.filter((user) => user.vdmtTaskId !== vdmtTaskId)
              );
            })
            .catch((error) => console.log("Lỗi khi xóa:", error));
        }
      }

    const vmdtElement = vdmtTask.map((vdmt_item) => {
        return (
            <tr>
                <td>{vdmt_item.vdmtTaskId}</td>
                <td>{vdmt_item.vdmtTaskName}</td>
                <td>{vdmt_item.vdmtTasklevel}</td>
                <td>{vdmt_item.vdmtTaskStartDate}</td>
                <td>{vdmt_item.vdmtTaskStatus ? "Done" : "Pending"}</td>
                <td>
                    <Link className='btn btn-success' to={`/vdmt-task-edit/${vdmt_item.vdmtTaskId}`}>Edit</Link> 
                    <button onClick={() => vdmtHandelDelete(vdmt_item.vdmtTaskId)} className="btn btn-danger ">Xoa</button>
                </td>
            </tr>
        )
    })
  return (
    <div>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Level</th>
                    <th>Start Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {vmdtElement}
            </tbody>
        </table>
    </div>
  )
}
