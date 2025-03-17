import React from 'react'
import {Link} from 'react-router-dom'

export default function VdmtNavNar() {
  return (
    <div>
        <ul>
            <Link to={"/"}>Home</Link>|
            <Link to={"/about"}>About</Link>|
            <Link to={"/contact"}>Contact</Link>|
            <Link to={"/List-user"}>List user</Link>|
            <Link to={"/Create-user"}>Create user</Link>
        </ul>
    </div>
  )
}
