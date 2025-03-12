import React, { useState } from 'react'
import VdmtStudentList from './Components/VdmtStudentList'
import VdmtStudentAdd from './Components/VdmtStudentAdd'  

export default function VdmtApp() {
  const [members, setMembers] = useState([
    { id: "2310900099", fullname: "Vũ Đỗ Minh Thành", username: "vudominhthanh", password: "123456" },
    { id: "54321", fullname: "Member a", username: "membera", password: "123456" },
    { id: "98765", fullname: "Member b", username: "memberb", password: "123456" },
  ]);

  const VdmtAddMember = (member) => {
    setMembers([...members, member]);
  };
  return (
    <div className="card p-3 mt-3">
        <h1>Danh sách thành viên</h1>
        <VdmtStudentList members={members}/>
        <VdmtStudentAdd VdmtAddMember={VdmtAddMember} />
      </div>
  )
}

