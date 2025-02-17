import React from 'react'

export default function VdmtJsxExpression() {
    const name = 'Vu Do Minh Thanh';
    const user = {
        firstName: 'Vu',
        lastName: 'Thanh'
    }
    const fullName =(user)=>{
        return user.firstName + ' ' + user.lastName;    
    }
    const element = (
        <div>
            <h2>{fullName(user)}</h2>
            <hr/>
            <h1>Hello, {name}!</h1>
        </div>
    );
    const sayWelcome = (name) => {
        if(name) {
            return <h1>Welcome, {name}!</h1>;
        } else { 
            return <h1>Welcome, NTU-Stu !</h1>;
        }
    }
  return (
    <div>
        <h2>Welcome to ReactJs</h2>
        {element}
        
        <hr/>

        {sayWelcome()}
        <hr/>
        {sayWelcome("Vu Thanh")}  
    </div>
  )
}
