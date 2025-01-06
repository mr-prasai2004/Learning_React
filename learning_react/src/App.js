import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Textform2 from "./components/Textform2";
// import TextForm3 from "./components/TextForm3";
function App() {
  return (
    <>
<Navbar title={"Aayush"}/>
<div className="container my-3 ">
  
<TextForm heading="Enter your text to analyze below"/>
<About />
</div>
{/* <Textform2 />
<TextForm3 /> */}

    </>
  );
}

export default App;
