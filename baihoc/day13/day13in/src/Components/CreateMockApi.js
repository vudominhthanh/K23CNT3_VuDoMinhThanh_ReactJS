import React from 'react'
import axios from 'axios'

export default function CreateMockApi() {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [active, setActive] = useState(true)

    const vdmtCreateuser = "https://67d9a4be35c87309f529a0d8.mockapi.io/vdmt1"

    const VdmtHandleSubmit = (ev) => {
        event.preventDefault();
        console.log('active', active);
        let vdmtNewuser = {name,age,active};
        console.log('newuser', vdmtNewuser);

        axios
            .post(vdmtCreateuser, vdmtNewuser)
            .then(res => {
                console.log('Created user:', res.data)
            })
    }

  return (
    <div className='alert alert-info'>
        <h2>Them moi user</h2>
        <hr/>
        <form>
            <div className='row mb-1'>
                <label htmlFor='name' className='col-sm-2 col-form-label' >Name :</label>
                <div className='col-sm-10'>
                    <input type='text' className='form-control' id='name' placeholder='Name' value={name} onChange={(ev)=>setName(ev.target.value)}/>
                </div>
            </div>
            <div className='row mb-1'>
                <label htmlFor='age' className='col-sm-2 col-form-label' >Age :</label>
                <div className='col-sm-10'>
                    <input type='number' className='form-control' id='Age' placeholder='Age' value={age} onChange={(ev)=>setAge(ev.target.value)}/>
                </div>
            </div>
            <div className='row mb-1'>
                <label htmlFor='active' className='col-sm-2 col-form-label'>Active</label>
                <div className='col-sm-10'>
                    <input type='radio' className='form-control' id='active'value={'true'} />
                    <label htmlFor='active'>Working</label>
                </div>
                <div className='col-sm-10'>
                    <input type='radio' className='form-control' id='active'value={'false'} />
                    <label htmlFor='active'>Locking</label>
                </div>
            </div>
            <button className='btn btn-success' onClick={vdmtHandleSubmit}>Save</button>
        </form>
    </div>
  )
}   
