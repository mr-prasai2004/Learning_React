import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Testt from "./components/Testt";
import { useState } from "react";
// import TextFrom from "./components/TextFrom";
import Alertt from "./components/Alertt";
// import Alert from "./components/Alert";
// import TextForm from "./components/TextForm";
// import Textform2 from "./components/Textform2";
// import TextForm3 from "./components/TextForm3";
function App() {
  const[mode,setMode]=useState('light');
 const  toggleMode = ()=>{
    if(mode ==='dark'){
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlertt("Light Mode hass been enable","success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
      showAlertt("Dark Mode hass been enable","success")
    }

    
  }
  // const [alert, setAlert]=useState(null);
  // const showAlert=(message, type)=>{
  //     setAlert({
  //         msg: message,
  //         type: type
  //     })
  //     setTimeout(()=>{
  //       setAlert(null)
  //     },1500);
      
  // }
  const [alertt,setAlertt]=useState(null);
  const showAlertt=(message, type)=>{
    setAlertt({
      msg: message,
      type: type
    })
  }
  
  return (
    <>
<Navbar title='Aayush' mode={mode} toggleMode={toggleMode}/>
<Alertt alertt={alertt} />
{/* <Alert alert={alert} /> */}
{/* {/* // <div className="container my-3 "> */}
  
{/* <TextForm showAlert={showAlert} heading="Enter your text to analyze below"mode={mode}/>  */}
<TextForm showAlertt={showAlertt} heading="Enter your text to analyze below"mode={mode}/> 

{/* <About />  */}
{/* <Testt /> */}
 {/* </div> */}
{/* <Textform2 />
<TextForm3 /> */}
{/* <TextFrom heading="Enter your text to Analysis Below"/> */}

    </>
  );
}

export default App;
