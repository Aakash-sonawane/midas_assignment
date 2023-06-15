// import logo from './logo.svg';
import './App.css';
// import CheckBox from './components/checkox';
// import FieldSet from './components/fieldSet';
// import InputBox from './components/inputBox';
// import DiamentionInput from './components/diamentionInput';
import Longitidunal from './components/pages/longitidunal/Longitidunal';
import Transverse from './components/pages/transeverse/Transverse';
import Load from './components/pages/load/Load';
import { useState } from 'react';

function App() {
  const [showPage, setShowPage] = useState('logitudanal')

  return (
    <>
      {
        showPage === "logitudanal" && <Longitidunal setShowPage={setShowPage} />
      }
      {
        showPage === "transeverse" && <Transverse setShowPage={setShowPage} />
      }
      {
        showPage === "load" && <Load setShowPage={setShowPage} />
      }
    </>
  );
}

export default App;
