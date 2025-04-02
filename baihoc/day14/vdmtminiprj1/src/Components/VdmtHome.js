import React from 'react'

export default function VdmtHome() {
  return (
    <div>
        <h2>This is Home page!</h2>
        <img src="https://picsum.photos/id/200/600/400" alt="Home Page"/>
        <p>Welcome to VDMT Home Page!</p>
        <button onClick={() => alert('This is a button on Home page!')}>Click me</button>
    </div>
  )
}
