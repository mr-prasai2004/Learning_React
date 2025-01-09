import React,{useState} from 'react'

export default function Testt() {
    const [text,setText]=useState('');
    const onhandelChange=(event)=>{
      setText(event.target.value)
    }
    const onhandelclick=()=>{
      let a=text.toUpperCase();
      setText(a);
    }
    const [myStyle, setMyStyle]=useState({
      color:'black',
      backgroundColor: "white",
    })
    const [mode,setMode]=useState('Enable Dark Mode')
    const onhandelmode=()=>{
      if(myStyle.color ==='white'){
        setMyStyle({
          color:'black',
          backgroundColor: "white",
          })
          setMode('Enable Dark Mode')
      }
      else{
        setMyStyle({
          color:'white',
          backgroundColor: "black",
          })
          setMode('Enable Light Mode')
          }
    }
  return (
    <>
    <div className='Container' style={myStyle}>
      <h1>Enter Your Text To Analyze Below</h1>
      <textarea className="form-control" id="myBox" rows="10" placeholder='Enter Your Text' style={myStyle}value={text} onChange={onhandelChange}/>
      </div>
      <button className="btn btn-primary" onClick={onhandelclick}>UpperCase</button>
      <div className="container">
        <h2>Your Text Summery</h2>
        <p>{text.split(' ').length} Word, {text.length} Characters</p>
        <p>in {0.08*text.split(' ').length} minute you can read the text</p>
        <button className="btn btn-success" onClick={onhandelmode}>{mode}</button>
      </div>
      <div>
        <h1>Preview of text</h1>
        <p>{text}</p>
      </div>

    </>
  )

}