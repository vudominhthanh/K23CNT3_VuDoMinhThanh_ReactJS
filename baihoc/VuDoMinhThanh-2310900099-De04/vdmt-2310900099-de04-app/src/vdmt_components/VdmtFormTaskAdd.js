import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function VdmtFormTaskAdd() {
    const navigate = useNavigate();
    const [vdmtTaskName, setVdmtTaskName] = useState('');
    const [vdmtTasklevel, setVdmtTasklevel] = useState('');
    const [vdmtTaskStartDate, setVdmtTaskStartDate] = useState('');
    const [vdmtTaskStatus, setVdmtTaskStatus] = useState(false);

    const vdmtTaskEdit = 'https://67ef9fa92a80b06b8895043b.mockapi.io/vdmtApi/2310900099/vdmtTask'

    const vdmtHandleSubmit = (ev) => {
        ev.preventDefault();
        let vdmtNewTask = {vdmtTaskName, vdmtTasklevel, vdmtTaskStartDate, vdmtTaskStatus};
        console.log('newtask', vdmtNewTask);

        axios
            .post(vdmtTaskEdit, vdmtNewTask)
            .then(res => {
                console.log('Created task:', res.data)
                alert("Task đã được thêm thành công!");
                navigate('/vdmt-task')
            })
    }

  return (
    <div className='alert alert-info'>
        <h2>Add new task</h2>
        <hr/>
        <form>
            <div className='row mb-5 '>
                <label htmlFor='vdmtTaskName' className='col-sm-2 col-form-label' >Name :</label>
                <div className='col-sm-10'>
                    <input type='text' className='form-control' id='vdmtTaskName' placeholder='Name...' value={vdmtTaskName} onChange={(ev)=>setVdmtTaskName(ev.target.value)}/>
                </div>
            </div>
            <div className='row mb-5'>
                <label htmlFor='vdmtTasklevel' className='col-sm-2 col-form-label' >Level :</label>
                <div className='col-sm-10'>
                    <input type='text' className='form-control' id='vdmtTasklevel' placeholder='Basic/Senior/...' value={vdmtTasklevel} onChange={(ev)=>setVdmtTasklevel(ev.target.value)}/>
                </div>
            </div>
            <div className='row mb-5'>
                <label htmlFor='vdmtTaskStartDate' className='col-sm-2 col-form-label' >Start Date :</label>
                <div className='col-sm-10'>
                    <input type='date' className='form-control' id='vdmtTaskStartDate' placeholder='dd/mm/yyyy' value={vdmtTaskStartDate} onChange={(ev)=>setVdmtTaskStartDate(ev.target.value)}/>
                </div>
            </div>
            <div className='row mb-5'>
                <label htmlFor='active' className='col-sm-2 col-form-label'>Active</label>
                <div className='col-sm-1'>
                    <input type='radio' name='active' className='' id='active' value={'true'} defaultChecked/>
                    <label htmlFor='active'>Done</label>
                </div>
                <div className='col-sm-1'>
                    <input type='radio' name='active' className='' id='active' value={'false'} />
                    <label htmlFor='active'>Pending</label>
                </div>
            </div>
            <button className='btn btn-success' onClick={vdmtHandleSubmit}>Save</button>
        </form>
    </div>
  )
}
