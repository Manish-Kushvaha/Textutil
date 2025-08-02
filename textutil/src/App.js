import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light') //whether enable or not
  const [alert, setAlert] = useState(null)
  const [btn, setId] = useState('flexSwitchCheckDefault');


  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // const removeClasses = () => {
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-info');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-light');
  // }
  const toggleMode = () => {
    // console.log(cls);
    // removeClasses();
    // document.body.classList.add('bg-'+cls);
    if (mode === 'light' && btn === 'flexSwitchCheckDefault') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';

      showAlert("Dark mode has been enabled", "success");

      setId('flexSwitchCheckChecked')

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

      showAlert("Dark mode has been desabled", "success");

      setId('flexSwitchCheckDefault')

    }
  }

  const router = createBrowserRouter([
    {
      path: "/about",
      element: <> <Navbar title="TextUtiles" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <About mode={mode} />
      </>
    },
    {
      path: "/",
      element: <>
        <Navbar title="TextUtiles" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} heading="Try Textutiles - Word Counter, Character Counter, Remove extrac spaces " mode={mode} />

      </>
    }
  ])
  return (
    <>
      {/* <Navbar title="TextUtiles" aboutText="About" mode={mode} toggleMode={toggleMode} /> */}
      <RouterProvider router={router} />
      {/* <Alert alert={alert} /> */}
      {/* <div className="container">
        <TextForm heading="Enter the text below to analyze:" mode={mode} showAlert={showAlert} />
      </div> */}
    </>
  );
}

export default App;
