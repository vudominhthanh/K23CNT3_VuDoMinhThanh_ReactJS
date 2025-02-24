import React from 'react'

export default function VdmtFuncCompEvent1() {
    const vdmtEventButton1Click = () => {
        alert('Button 1 - Clicked');
    }
    const vdmtEventButton2Click = () => {
        alert('Button 2 - Clicked');
    }

    const vdmtEventButton3Click = (name) => {
        alert('Name : ' + name);
    }

  return (
    <div className=''>
        {/* <button className='btn btn-primary' onClick={vdmtEventButton1Click()}>Button 1</button> */}
        <button className='btn btn-success' onClick={vdmtEventButton2Click}>Button 2</button>
        {/* <button className='btn btn-success' onClick={vdmtEventButton3Click('Me and my friend')}>Button 3</button> */}
        <button className='btn btn-success' onClick={()=>vdmtEventButton3Click('Me and my friend both')}>Button 4</button>
    </div>
  ) 
}
