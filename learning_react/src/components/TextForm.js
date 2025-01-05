import React,{useState} from 'react'

export default function TextForm(props) {
    const handelUpClick=()=>{
        console.log("Upper Case Was Clicked")
        setText("You have Click on HandleUpClick");
    }
    const handleOnChange=()=>{
        console.log("On Changed")
    }
    const[text, setText]= useState('Enter Text Here');
    // setText("New Text");
  return (
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary" onClick={handelUpClick}>Convert to Upper Case</button>
</div>
  )
}
