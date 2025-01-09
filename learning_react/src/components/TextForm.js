import React,{useState} from 'react'

export default function TextForm(props) {
    const handelUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Converted To Upper Case','success');
    }
    const handelLowClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert('Converted To Lower Case','success');
  }
  const handelClearClick=()=>{
    let newText=('');
    setText(newText);
    props.showAlert('Cleared the text','success');
}
const handelColorClick=()=>{
  document.getElementById("myBox").style.color="red";
  props.showAlert('Converted the text Color to Red','success');
}
const FirstLetter=()=>{
  if(!text){
  }
  else{
    let ttext= text.split(" ");
  let a = ttext.map(word => word[0].toUpperCase() + word.slice(1));
  setText(a.join(" "));
  props.showAlert('Converted First Letter To Capital Case','success');}
  
}
const Redo=()=>{
  document.getElementById("myBox").style.color="black";
  props.showAlert('Redo the text Color','success');
}
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const[text, setText]= useState('');
    // setText("New Text");
    const [myStyle,setMyStyle]=useState({
      color:"black",
      backgroundColor:"white",
      
    })
    const [btntext, setBtnText]=useState("Enable Dark Mode");
    const Mode =()=>{
    if(myStyle.color === 'white'){
      setMyStyle({
        color:'black',
        backgroundColor:'white',
        borderRadius: "10px"
      })
      setBtnText("Enable Dark Mode")
    }
    else{
      setMyStyle({
        color:'white',
        backgroundColor:'black',
        borderRadius: "10px"
      })
      setBtnText("Enable Light Mode")

    }
    }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white' : 'black'}}>
        <h1 >{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray' : 'white', color: props.mode==='dark'?'white' : 'black'}} id="myBox" rows="10" placeholder='Enter Your Text Here' />
</div>
<button className="btn btn-primary mx-2" onClick={handelUpClick} >Convert to Upper Case</button>
<button className="btn btn-primary mx-2" onClick={handelLowClick}>Convert to Lower Case</button>
<button className="btn btn-primary mx-2" onClick={handelClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handelColorClick}>Color Change To Red</button>
<button className="btn btn-primary mx-2" onClick={Redo}>Redo Color Change</button>
<button className="btn btn-primary mx-2" onClick={FirstLetter}>Capatilize First Letter</button>
<button className="btn btn-primary mx-2" onClick={Mode}>{btntext}</button>




<div className="container my-3">
  <h1>Your Text Summery</h1>
  <p>{text.split(" ").length} Words, {text.length} Characters</p>
  <p>In {0.008 * text.split(" ").length} Minutes takes you to Read the paragraph</p>
</div>
<h3>Preview of the Text</h3>
<p>{text}</p>
</div>
</>
  )
}