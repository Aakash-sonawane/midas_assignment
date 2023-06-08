import logo from './logo.svg';
import './App.css';
import CheckBox from './components/checkox';
import FieldSet from './components/fieldSet';

function App() {
  return (

    <div className='container'>
      <div className='page'>
        <div className='page_header'>RC Frame</div>
        <div className='nav'>
          <div className='nav_el'>Longitudinal</div>
          <div className='nav_el'>Transverse</div>
          <div className='nav_el'>Loads</div>
        </div>
        <div className='page-main-body'>
          <div className='img_container'>
          <img src='transeverse.png'></img>
          </div>
          <div className='check-box'>
            <CheckBox label={'Structure Type'}/>
          </div>
          <div className='fieldset'>
            <FieldSet legend={'Type of Bridge'}>
              <input id='bridge-rd1' type='radio'/>
              <label htmlFor='bridge-rd1'>Normal Type Frame</label>
              <input id='bridge-rd2' type='radio'/>
              <label htmlFor='bridge-rd2'>Box Culvert</label>
            </FieldSet>

          </div>

        </div>

      </div>
    </div>

  );
}

export default App;
