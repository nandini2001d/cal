import React, { useState } from 'react'

export default function CalInput(props) {

    const {currentBtnfunction,currentBtn}=props;
    const {val1,setVal1}=useState('0');

  return (
    <>
    
     <input type='text' className='p-2 main-input'
    //  style={{width:"980px",boxShadow:"2px 3px 5px gray",outline:"none",border:"none",fontWeight:"bold",fontSize:"1.5rem"}}
      value={currentBtn} readOnly/><br/><br/>
    
    </>
  )
}
