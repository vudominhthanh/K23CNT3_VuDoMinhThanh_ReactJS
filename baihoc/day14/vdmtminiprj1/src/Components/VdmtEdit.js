import React from 'react'
import axios from 'axios'
import { useState , useEffect } from'react';
import { useParams , useNavigate } from 'react-router-dom';

export default function VdmtEdit() {
    const{id} = useParams();
    const navigate = useNavigate();
    const [vdmtUser, setEditUser] = useState({
        vdmtname: '',
        vdmtemail: '',
        vdmtphone: '',
        vdmtactive: false,
    });

    useEffect(() => {
        axios
            .get(`https://67da6af735c87309f52c5809.mockapi.io/mini1/vdmt_user/${id}`)
            .then(res => {
                setEditUser(res.data);
        })
        .catch(err => {
            console.error('Error fetching or parsing data', err)
        })
    }, [id]);

    const vdmtHandleSubmit = (e) => {
        const { name, value, type, checked } = e.target;
        setEditUser({
            ...vdmtUser,
            [name]: type ==="checkbox" ? checked : value,
        });
    }    

    const vdmtHandleUpdate = (e) => {
        e.preventDefault();
        console.log("Dữ liệu gửi lên:", vdmtUser);

        axios
        .put(`https://67da6af735c87309f52c5809.mockapi.io/mini1/vdmt_user/${id}`, vdmtUser)
        .then(res => {
            console.log('Updated user:', res.data);
            alert("Người dùng đã được cập nhật thành công!");
            navigate('/List');
        })
        .catch(err => {
            console.error('Error updating user:', err);
        });
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
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Tên:</label>
                    <input 
                        type="text" 
                        name="vdmtname" 
                        value={vdmtUser.vdmtname} 
                        onChange={vdmtHandleSubmit} 
                        required 
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email:</label>
                    <input 
                        type="email" 
                        name="vdmtemail" 
                        value={vdmtUser.vdmtemail} 
                        onChange={vdmtHandleSubmit} 
                        required 
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Số điện thoại:</label>
                    <input 
                        type="text" 
                        name="vdmtphone" 
                        value={vdmtUser.vdmtphone} 
                        onChange={vdmtHandleSubmit} 
                        required 
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Hoạt động:</label>
                    <select 
                        name="vmdtvmdtactive" 
                        value={vdmtUser.active} 
                        onChange={(e) => setEditUser({ ...vdmtUser, active: e.target.value === 'true' })} 
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                    >
                        <option value={true}>Working</option>
                        <option value={false}>Locking</option>
                    </select>
                </div>
                <button 
                    type="submit" 
                    onClick={() => navigate("/List")} 
                    style={{
                        backgroundColor: '#007BFF',
                        color: 'white',
                        padding: '10px 15px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Cập nhật
                </button>
            </form>
        </div>
    )
}

