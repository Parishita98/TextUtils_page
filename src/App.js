import './App.css';
import React,{useState} from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   //Switch,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type) =>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = () => {
    if(mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
      }
  }

  return (
    <>     
    {/* <Router> */}
<Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode}/> 
<Alert alert={alert}/>
<div className="container my-3">
{/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> 
          <Route path="/">
          <Textform showAlert= {showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>*/}
{/* </Switch> */}
{/* <Routes> */}
      {/* <Route exact path="/" /> */}
        <Textform showAlert= {showAlert} heading="Enter the text to analyze below" mode={mode}/>
      {/* <Route exact path="/about" element={<About />} />
    </Routes> */}

</div>
    {/* </Router>  */}
    </>
  );
}

export default App;
