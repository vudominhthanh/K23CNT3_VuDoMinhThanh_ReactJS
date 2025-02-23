import React from 'react'

export default function VdmtFuncComp(props) {
  return (
    <div>
        <h2>Demo : Function Components Props</h2>
        <p>Lay du lieu tu props de hien thi</p>
        <p>Name : {props.name}</p>
        <p>Address : {props.address}</p>
        <p>Role : {props.role}</p>
        <p>Note : {props.note}</p>
    </div>
  )
}
