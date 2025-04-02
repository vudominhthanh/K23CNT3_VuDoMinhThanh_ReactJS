import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function VdmtList() {
    const [list , setList] = useState([])

    const vdmtApiOnl = 'https://67da6af735c87309f52c5809.mockapi.io/mini1/vdmt_user'

    useEffect(() => {
        axios
           .get(vdmtApiOnl)
           .then(response => {
                setList(response.data)
            })
            .catch(error => {
                console.error('Error fetching data: ', error)
            })
    },[])

    const vdmtHandelDelete = (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
          axios
            .delete(`https://67da6af735c87309f52c5809.mockapi.io/mini1/vdmt_user/${id}`)
            .then(() => {
              setList((prevUsers) =>
                prevUsers.filter((user) => user.id !== id)
              );
            })
            .catch((error) => console.log("Lỗi khi xóa:", error));
        }
      };


    const vdmtElement = list.map((vdmt_item) => {
        return (
            <tr>
                <td>{vdmt_item.id}</td>
                <td>{vdmt_item.vdmtname}</td>
                <td>{vdmt_item.vdmtemail}</td>
                <td>{vdmt_item.vdmtphone}</td>
                <td>{vdmt_item.vdmtactive ? "Working" : "Locking"}</td>
                <td>
                    <Link className='btn btn-success' to={`/edit/${vdmt_item.id}`}>Edit</Link> 
                    <button onClick={() => vdmtHandelDelete(vdmt_item.id)} className="btn btn-danger ">Xoa</button>
                </td>
                </tr>
            )
    })
  return (
    <div>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {vdmtElement}
            </tbody>
        </table>
    </div>
  )
}
