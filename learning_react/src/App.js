import "./App.css";
import img from "./Image/219983.png";
let name = "Aayush";
function App() {
  return (
    <>
      <nav className="hi">
        <li>About</li>
        <li>Home</li>
        <li>Contact US</li>
      </nav>
      <div className="container">
        <h1>Hello {name} <img src={img} width="50px" height="50px"/></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          adipisci fuga, vero iste voluptatibus excepturi exercitationem quos
          distinctio non itaque dolore. Maiores a sint voluptatibus odit quaerat
          nesciunt, praesentium laborum, aut inventore deserunt corporis.
        </p>
      </div>
    </>
  );
}

export default App;
