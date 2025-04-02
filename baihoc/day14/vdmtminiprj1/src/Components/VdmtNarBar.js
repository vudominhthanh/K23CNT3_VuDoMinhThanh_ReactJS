import React from 'react'
import {Link} from 'react-router-dom'

export default function VdmtNarBar() {
  return (
    <div className='table table-bordered table-striped' >
        <ul>
            <Link to={"/"}>Home</Link> |
            <Link to={"/List"}>List user</Link> |
            <Link to={"/Create"}>Create user</Link>
        </ul>
    </div>
  )
}
