import React, { useState } from 'react'

export default function CalButton(props) {


    // const {btn}=props;

     //const [currentBtn , setCurrentBtn]=useState("");

    const {btnName}=props
    const {currentBtnfunction,currentBtn,clearbtn}=props;

    const bgColor=btnName==='Clear'?'main-btn-red':btnName==='='?'main-btn-green'
    :btnName==="/"||btnName==="."||btnName==="*"||btnName==="+"||btnName==="-"?'main-btn-op':'main-btn';
   // const hover=btnName==='Clear'?'':'lightgreen';

  return (


   <>
       
       
       {/* <input type='text' value={currentBtn} readOnly /><br/><br/>
       {
       
       btn.map((value)=>
       
       <button key={value}
        onClick={()=>{setCurrentBtn(value)}}>{value}</button>
       
       )

       } */}
      
       <button className={`my-1 btn btn-lg ${bgColor}`}
      
       onClick={()=>{
           
           
            btnName==='Clear'?clearbtn():currentBtnfunction(btnName)
           
       }}
        >{btnName}</button> 
    

   </>
  )
}
