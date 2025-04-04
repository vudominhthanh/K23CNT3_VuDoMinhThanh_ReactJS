import React from 'react'
import {Link} from 'react-router-dom'

export default function VdmtNavBar() {
  return (
    <div>
        <ul className='table table-bordered table-striped'>
            <Link to={"/"}>Home</Link> |
            <Link to={"/vdmt-task"}>vdmt-task</Link> |
            <Link to={"/vdmt-task-add"}>vdmt-task-add</Link>
        </ul>
    </div>
  )
}
