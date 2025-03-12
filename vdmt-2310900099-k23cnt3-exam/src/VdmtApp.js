import React, { useState } from 'react'
import VdmtStudentList from './Components/VdmtStudentList'
import VdmtStudentAdd from './Components/VdmtStudentAdd'  

export default function VdmtApp() {
  const [members, setMembers] = useState([
    { Vdmtid: "2310900099", Vdmtfullname: "Vũ Đỗ Minh Thành", Vdmtusername: "vudominhthanh", Vdmtpassword: "123456" },
    { Vdmtid: "54321", Vdmtfullname: "Member a", Vdmtusername: "membera", Vdmtpassword: "123456" },
    { Vdmtid: "98765", Vdmtfullname: "Member b", Vdmtusername: "memberb", Vdmtpassword: "123456" },
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

