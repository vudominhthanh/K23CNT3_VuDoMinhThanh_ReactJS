
import React, { useState } from 'react'

    const VdmtStudentAdd = ({ VdmtAddMember }) => {
        // State lưu thông tin thành viên mới
        const [newMember, setNewMember] = useState({ Vdmtid: "", Vdmtfullname: "", Vdmtusername: "", Vdmtpassword: "" });
      
        // Hàm xử lý thay đổi giá trị input
        const handleChange = (e) => {
          setNewMember({ ...newMember, [e.target.name]: e.target.value });
        };
      
        // Hàm xử lý khi gửi form thêm thành viên
        const handleSubmit = (e) => {
          e.preventDefault();
          if (newMember.Vdmtid && newMember.Vdmtfullname && newMember.Vdmtusername && newMember.Vdmtpassword) {
            VdmtAddMember(newMember);
            setNewMember({ Vdmtid: "", Vdmtfullname: "", Vdmtusername: "", Vdmtpassword: "" });
          }
        };
    return (
        <div>
        <h2>Thêm thành viên</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="id" placeholder="ID" value={newMember.Vdmtid} onChange={handleChange} required />
          <input type="text" name="fullname" placeholder="Họ và tên" value={newMember.Vdmtfullname} onChange={handleChange} required />
          <input type="text" name="username" placeholder="Username" value={newMember.Vdmtusername} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Mật khẩu" value={newMember.Vdmtpassword} onChange={handleChange} required />
          <button type="submit">Thêm</button>
        </form>
      </div>
    )
  }

export default VdmtStudentAdd;