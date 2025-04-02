import React, {useState} from 'react'
import axios from 'axios'

export default function VdmtCreate() {
    const [vdmtname, setName] = useState('');
    const [vdmtemail, setEmail] = useState('');
    const [vdmtphone, setPhone] = useState('');
    const [vdmtactive, setActive] = useState(true);

    const vdmtCreate = 'https://67da6af735c87309f52c5809.mockapi.io/mini1/vdmt_user'

    const vdmtHandleSubmit = (ev) => {
        ev.preventDefault();
        let vdmtNewuser = {vdmtname,vdmtemail,vdmtphone,vdmtactive};
        console.log('newuser', vdmtNewuser);

        axios
           .post(vdmtCreate, vdmtNewuser)
           .then(res => {
                console.log('Created user:', res.data)
            })
    }

  return (
    <div className='alert alert-info'>
        <h2>Them moi user</h2>
        <hr/>
        <form>
            <div className='row mb-5 '>
                <label htmlFor='name' className='col-sm-2 col-form-label' >Name :</label>
                <div className='col-sm-10'>
                    <input type='text' className='form-control' id='name' placeholder='Name...' value={vdmtname} onChange={(ev)=>setName(ev.target.value)}/>
                </div>
            </div>
            <div className='row mb-5'>
                <label htmlFor='email' className='col-sm-2 col-form-label' >Email :</label>
                <div className='col-sm-10'>
                    <input type='email' className='form-control' id='email' placeholder='example@gmail.com' value={vdmtemail} onChange={(ev)=>setEmail(ev.target.value)}/>
                </div>
            </div>
            <div className='row mb-5'>
                <label htmlFor='phone' className='col-sm-2 col-form-label' >Phone :</label>
                <div className='col-sm-10'>
                    <input type='phone' className='form-control' id='phone' placeholder='Phone...' value={vdmtphone} onChange={(ev)=>setPhone(ev.target.value)}/>
                </div>
            </div>
            <div className='row mb-5'>
                <label htmlFor='active' className='col-sm-2 col-form-label'>Active</label>
                <div className='col-sm-1'>
                    <input type='radio' name='active' className='' id='active' value={'true'} defaultChecked/>
                    <label htmlFor='active'>Working</label>
                </div>
                <div className='col-sm-1'>
                    <input type='radio' name='active' className='' id='active' value={'false'} />
                    <label htmlFor='active'>Locking</label>
                </div>
            </div>
            <button className='btn btn-success' onClick={vdmtHandleSubmit}>Save</button>
        </form>
    </div>
  )
}
