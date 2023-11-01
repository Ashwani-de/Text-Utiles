import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether Dark mode is enable or not
  const [alert, setAlert] = useState(null); //whether Dark mode is enable or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success");
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = '#080808';
      showAlert("Dark Mode is enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="Text-Utiles" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element = {<About />}> */}
            {/* </Route> */}
            {/* <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Welcome to Text-Utiles" mode={mode} />}> */}
            <TextForm showAlert={showAlert} heading="Welcome to Text-Utiles" mode={mode} />
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
