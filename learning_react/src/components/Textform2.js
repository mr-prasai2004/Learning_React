import React,{useState} from 'react'


export default function Textform2() {
    const [Text, setText]=useState("Enter Your Text")
    const onHandleChange =(event)=>{
        console.log("Hello Aayush")
        setText(event.target.value);
    }
    const onHandleClick =()=>{
        let newText2= Text.toUpperCase();
        console.log("UpperCase Converted")
        setText(newText2)
        
    }
  return (
    <div>
      <h1>Enter The Text Below to make upper case</h1>
      <textarea row='9'value={Text} onChange={onHandleChange}/>
      <button className="btn btn-primary" onClick={onHandleClick}>Upper Case</button>
    </div>
  )
}

