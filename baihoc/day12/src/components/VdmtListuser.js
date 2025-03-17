import React from 'react'

export default function VdmtListuser({renderVdmtlistuers}) {
    const VdmtElement = renderVdmtlistuers.map((vdmtItem, index)=>{
        return (
            <>
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{vdmtItem.id}</td>
                    <td>{vdmtItem.name}</td>
                    <td>{vdmtItem.age}</td>
                </tr>
            </>
        )
    } )
  return (
    <div>
        <h2>Dnah sach tai khoan</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {VdmtElement}
                </tbody>
            </table>
    </div>
  )
}
