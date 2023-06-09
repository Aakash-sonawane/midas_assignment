import logo from './logo.svg';
import './App.css';
import CheckBox from './components/checkox';
import FieldSet from './components/fieldSet';
import InputBox from './components/inputBox';
import DiamentionInput from './components/diamentionInput';
import Longitidunal from './components/route/Longitidunal';
import Transverse from './components/route/transeverse/Transverse';
import Load from './components/route/load/Load';
import { useState } from 'react';

function App() {
 const[showPage,setShowPage]=useState('logitudanal')

 const[longiData,setLoongiData]=useState({});
 const[transData,setTransData]=useState({});
 const[loadData,setLoadData]=useState({});

 const handleShopage=(e)=>{
  setShowPage(e.target.id);
 }
  return (

    <div className='container load_page'>
      <div className='page'>
        <div className='page_header'>RC Frame</div>
        <div className='nav'>
          <div id='logitudanal' className='nav_el' onClick={handleShopage}>Longitudinal</div>
          <div id='transeverse' className='nav_el' onClick={handleShopage}>Transverse</div>
          <div id='load' className='nav_el' onClick={handleShopage}>Loads</div>
        </div>

        {
          showPage==="logitudanal" && <Longitidunal formdata={longiData} setFormdata={setLoongiData}/>
        }
        {
          showPage==="transeverse" && <Transverse formdata={transData} setFormdata={setTransData}/>
        }
        {
          showPage==="load" && <Load formdata={loadData} setFormdata={setLoadData}/>
        }
        {/* <Longitidunal/> */}
        {/* <Transverse/> */}
        {/* <Load/> */}


        <div className='footer-container'>
          <input type="file" accept=".json" />
          <button>Save</button>
        </div>

      </div>
    </div>

  );
}

export default App;
