import React,{useState} from 'react'

export default function TextFrom(props) {
    const [text,setText] =useState('');
    const onHandleClick=()=>{
        console.log("UpperCase")
        let a = text.toUpperCase();
        setText(a);
        // props.showAlert('Converted To Upper Case','success');
    }
    const onHandleLowerClick=()=>{
        console.log("LowerCase")
        let a = text.toLowerCase();
        setText(a);
        // props.showAlert('Converted To Lower Case','success');
    }
    const OnhandleChange=(event)=>{
        console.log("onChange")
        setText(event.target.value)
    }
    const [style,setMyStyle]=useState({
        color:'Black',
        backgroundColor:'White'
    })
    const [btntext, setBtnText]=useState("Enable Dark Mode");
    const Mode =()=>{
   if(style.color ==='white'){
    setMyStyle({color:'black', backgroundColor:'white'})
    setBtnText("Enable Dark Mode");
   }
   else{
    setMyStyle({color:'white',backgroundColor:'black'});
    setBtnText("Enable Light Mode")
   }
    }

    
  return (
    <div style={style}>
    <div style={style}>
        <h1>{props.heading}</h1>
        <textarea value={text} style={style} placeholder='Enter Your Text' onChange={OnhandleChange} />
    </div>
    <button className="btn btn-success mx-3" onClick={onHandleClick} >UpperCase</button>
    <button className="btn btn-primary my-3" onClick={onHandleLowerClick}>LowerCase</button>
    <h2>Preview Your Text</h2>
    <p>{text}</p>
    <p>{text.split(' ').length}Words, {text.length} Characters</p>
    <button className="btn btn-primary mx-3" onClick={Mode}>{btntext}</button>
    </div>
    
  )
}
