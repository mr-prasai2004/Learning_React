import React, {useState} from 'react'

export default function TextForm3() {
    const[Text, setText]= useState('Enter Your Text Here')
    const OnhandleChange =(event)=>{
        setText(event.target.value)
    }
    const OnhandleClick =()=>{
        let newText = Text.toUpperCase();
        setText(newText);
    }
  return (
    <div>
        <textarea value={Text} onChange={OnhandleChange} row="9"/>
        <button className="btn btn-primary" onClick={OnhandleClick}>UpperCase</button>
      
    </div>
  )
}
