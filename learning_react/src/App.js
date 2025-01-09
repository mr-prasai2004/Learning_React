import "./App.css";
// import About from "./components/About";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import Testt from "./components/Testt";
import { useState } from "react";
import TextFrom from "./components/TextFrom";
// import TextForm from "./components/TextForm";
// import Textform2 from "./components/Textform2";
// import TextForm3 from "./components/TextForm3";
function App() {
//   const[mode,setMode]=useState('light');
//  const  toggleMode = ()=>{
//     if(mode ==='dark'){
//     setMode('light')
//     document.body.style.backgroundColor = 'white'
//     }
//     else{
//       setMode('dark')
//       document.body.style.backgroundColor = 'gray'
//     }

    
  // }
  return (
    <>
{/* // <Navbar title='Aayush' mode={mode} toggleMode={toggleMode}/> */}
{/* // <div className="container my-3 ">
  
//  <TextForm heading="Enter your text to analyze below"mode={mode}/> */}
{/* <About />  */}
{/* <Testt /> */}
 {/* </div> */}
{/* <Textform2 />
<TextForm3 /> */}
<TextFrom heading="Enter your text to Analysis Below"/>
    </>
  );
}

export default App;
