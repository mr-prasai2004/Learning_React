import React,{useState} from 'react'

export default function TextForm(props) {
    const handelUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handelLowClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
  }
    const handleOnChange=(event)=>{
        console.log("On Changed");
        setText(event.target.value)
    }
    const[text, setText]= useState('Enter Text Here');
    // setText("New Text");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handelUpClick} >Convert to Upper Case</button>
<button className="btn btn-primary mx-2" onClick={handelLowClick}>Convert to Lower Case</button>
</div>
<div className="container my-3">
  <h1>Your Text Summery</h1>
  <p>{text.split(" ").length} Words, {text.length} Characters</p>
  <p>In {0.008 * text.split(" ").length} Minutes takes you to Read the paragraph</p>
</div>
<h3>Preview of the Text</h3>
<p>{text}</p>
</>
  )
}