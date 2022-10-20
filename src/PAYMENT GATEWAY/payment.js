import React, { useState } from 'react'
export default function Payment() {
const [tit,setTit] = useState("Pay Here")

  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 style={{textAlign:'center', fontFamily:'Manrope', color:'black'}}> {tit} </h1>
       <br/>
    </div>
  )
}
