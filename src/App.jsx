import { readPdfText } from "pdf-text-reader";
import "./App.css";
import { useState } from "react";

function App() {

  const reader = async (e)=>{
    alert(e)
    
    // const text = await readPdfText({data:e.file})
    // console.log(text);
    
  }

  const [file, setfile] = useState('');
  const handleFileRead = (e)=>{
    setfile(e);
  }
  const fire = ()=>{
    if(file === ''){
      alert("Upload a file please")
    }
    else{reader(file);}
  }

  return (
    <div className="outer">
      <div className="nav">Welcome to LearnLoom</div>
      <div className="main">
        Hi, Get Ready Fot Your Upcoming Exams
        <br /> Give Us Your Material and Test Your Knowledge <br />
        <input type="file" id="box"onChange={e=>handleFileRead(e.target.files[0])}/>
        <div className="button" onClick={()=>fire()}>
        GO!
      </div>
      </div>

      
    </div>
  );
}

export default App;
