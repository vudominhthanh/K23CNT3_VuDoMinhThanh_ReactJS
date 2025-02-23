import React from 'react'

export default function VdmtFuncComp1(props) {
  return (
    <div>
     <h2>Props is Objects</h2>
     <p><b>Info :</b></p>
     <p>Name : {props.renderInfo.name}</p>
     <p>Address : {props.renderInfo.address}</p>
     <p>Role : {props.renderInfo.role}</p>
    </div>
  )
}
