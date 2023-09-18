
import './App.css';
import Alarts from './components/Alarts';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import { Route ,Routes
 
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(()=>(
      setAlert(null)
    ),3000);
  }
  const togglemode=()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.background='#042743';
      showAlert("dark mode has been enabled","success")
      document.title="Textutils- dark mode"
      setInterval(()=>{
        document.title="TextUtils is Amazing";
      },2000)
      setInterval(()=>{
        document.title=" Install TextUtils";
      },1500)
    }
    else{
      setMode('light')
      document.body.style.bsckground='white';
      showAlert("light mode has been enabled",'success')
      document.title="TextUtils- light mode";
  
    }
  }

  return (
   <> 
  <Navbar title="Textutils" Aboutus="About" Mode={mode} toggle={togglemode}/>
  <Alarts alert={alert}/>
  <div className='container my-3' >
      
         <Routes>
           <Route path='/About' element={<About />}/>
           <Route path='/TextUtils' element={<TextForm showAlert={showAlert} heading="Enter  text for  analyze" Mode={mode}/>}/>
         </Routes> 
        
  </div>
  </>
 
  );
}

export default App;
