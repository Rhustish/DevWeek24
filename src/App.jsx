import "./App.css";
import { useState } from "react";

function App() {
  const [file, setfile] = useState('');
  const handleFileRead = (e)=>{
    setfile(e);
  }

  return (
    <div className="outer">
      <div className="nav">Welcome to LearnLoom</div>
      <div className="main">
        Hi, Get Ready Fot Your Upcoming Exams
        <br /> Give Us Your Material and Test Your Knowledge <br />
        <input type="file" id="box"onChange={e=>handleFileRead(e.target.files[0])}/>

        
      </div>
    </div>
  );
}

export default App;
