import React, { useState,useEffect } from 'react'
import axios from 'axios'

export function VdmtReadMockApi () {
    const [vdmtListuser , setVdmtListuser] = useState([])

    const vdmtApiOnl = "https://67d9a4be35c87309f529a0d8.mockapi.io/vdmt1"

    useEffect(() =>{
        axios
            .get(vdmtApiOnl)
            .then(vdmt_res => {
                setVdmtListuser(vdmt_res.data)
            })
            .catch(err => {
                console.error('Error fetching or parsing data', err)
            })
    },[]);

    const vdmtElement = vdmtListuser.map((vdmt_item, index) => {
        return (
            <tr>
                <td>{vdmt_item.id}</td>
                <td>{vdmt_item.name}</td>
                <td>{vdmt_item.age}</td>
                <td>{vdmt_item.active ? "Working" : "Locking"}</td>
                <td>
                    <button onClick={() => this.vdmtHandleDelete(vdmt_item.id)}>Delete</button>
                    <button onClick={() => this.vdmtHandleDelete(vdmt_item.id)}>Sua</button>
                </td>
            </tr>
        )
    })
    return (
      <div>

      </div>
    )
  }
