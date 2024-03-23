import React, { useState } from 'react'

export default function CalInput(props) {

    const {currentBtnfunction,currentBtn}=props;
    const {val1,setVal1}=useState('0');

  return (
    <>
    
     <input type='text' className='p-2 main-input'
      value={currentBtn} readOnly/><br/><br/>
    
    </>
  )
}
