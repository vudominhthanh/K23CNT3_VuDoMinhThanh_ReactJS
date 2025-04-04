import React from 'react'
import { useState } from 'react'    
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function VdmtFormTaskEdit() {
    const { vdmtTaskId } = useParams()
    const navigate = useNavigate()
    const [vdmtTask, setVdmtTask] = useState({
        vdmtTaskName: '',
        vdmtTasklevel: '',
        vdmtTaskStartDate: '',
        vdmtTaskStatus: true,
    })

    useEffect(() => {
        axios
            .get(`https://67ef9fa92a80b06b8895043b.mockapi.io/vdmtApi/2310900099/vdmtTask/${vdmtTaskId}`)
            .then(res => {
                setVdmtTask(res.data)
            })
            .catch(err => {
                console.error('Error fetching or parsing data', err)
            })
    }, [vdmtTaskId])
    
    const vdmtHandleSubmit = (e) => {
        const { name, value, type, checked } = e.target
        setVdmtTask({
            ...vdmtTask,
            [name]: type === "checkbox" ? checked : value,
        })
    }

    const vdmtHandleUpdate = (e) => {
        e.preventDefault()
        console.log("Dữ liệu gửi lên:", vdmtTask)

        axios
            .put(`https://67ef9fa92a80b06b8895043b.mockapi.io/vdmtApi/2310900099/vdmtTask/${vdmtTaskId}`, vdmtTask)
            .then(res => {
                console.log('Updated task:', res.data)
                alert("Cập nhật thành công!")
                navigate('/vdmt-task')
            })
            .catch(err => {
                console.error('Error updating task:', err)
            })
    }
      
  return (
    <div style={{
            margin: '20px auto',
            padding: '20px',
            maxWidth: '600px',
            backgroundColor: '#f9f9f9',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
            <form onSubmit={vdmtHandleUpdate}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Name :</label>
                    <input 
                        type="text" 
                        name="vdmtTaskName" 
                        value={vdmtTask.vdmtTaskName} 
                        onChange={vdmtHandleSubmit} 
                        required 
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Level :</label>
                    <input 
                        type="text" 
                        name="vdmtTaskLevel"
                        value={vdmtTask.vdmtTasklevel}
                        onChange={vdmtHandleSubmit} 
                        required 
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Start Date :</label>
                    <input 
                        type="date" 
                        name="vdmtTaskStartDate"
                        value={vdmtTask.vdmtTaskStartDate} 
                        onChange={vdmtHandleSubmit} 
                        required 
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Active :</label>
                    <select 
                        name="vdmtTaskStatus"
                        value={vdmtTask.vdmtTaskStatus} 
                        onChange={vdmtHandleSubmit} 
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                    >
                        <option value={true}>Done</option>
                        <option value={false}>Pending</option>
                    </select>
                </div>
                <button 
                    type="submit" 
                    onClick={() => navigate("/vdmt-task")} 
                    style={{
                        backgroundColor: '#007BFF',
                        color: 'white',
                        padding: '10px 15px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}> Updated </button>
            </form>
        </div>
  )
}
