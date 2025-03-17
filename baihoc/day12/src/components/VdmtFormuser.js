import React, { useState } from 'react'

export default function VdmtFormuser({onVdmtAddNew}) {

    const [id, setVdmtId] = useState('')
    const [name, setVdmtName] = useState('')
    const [age, setVdmtAge] = useState('')

    const vdmtHandleSubmit = (event) => {
        event.preventDefault();
        console.log(id, name , age)
        onVdmtAddNew({id, name , age})
    }
  return (
    <div>
        <form>
            <label>Id:</label>
            <input type="text" name="id" value={id} onChange={(ev) => setVdmtId(ev.target.value)}/>
            <label>Name:</label>
            <input type="text" name="name"  value={name} onChange={(ev) => setVdmtName(ev.target.value)}/>
            <label>Age:</label>
            <input type="text" name="age" value={age} onChange={(ev) => setVdmtAge(ev.target.value)}/>
            <input type="submit" value="Submit" onClick={vdmtHandleSubmit} />
        </form>
    </div>
  )
}
