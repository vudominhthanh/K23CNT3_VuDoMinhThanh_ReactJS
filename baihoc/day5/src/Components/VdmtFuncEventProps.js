import React from 'react'

export default function VdmtFuncEventProps(props) {
    const vdmtHandleButtonClick1 = () => {
        alert('Du lieu tu props :' + props.vdmtRenderName); 
        console.log('Xin caho :' ,props.vdmtRenderName);
    }
    const vdmtHandleButtonClick2 = (param) => {
        alert('Du lieu tu props :' + param); 
        console.log('Xin caho :' ,param);
    }
  return (
    <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1' onClick={vdmtHandleButtonClick1}>Button 1</button>
        <button className='btn btn-success mx-1' onClick={()=>vdmtHandleButtonClick2('Thanh Vu')}>Button 2</button>
    </div>
  )
}
