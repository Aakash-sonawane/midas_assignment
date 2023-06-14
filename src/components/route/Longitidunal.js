import React, { useEffect, useState } from 'react'
// import CheckBox from '../checkox';
import FieldSet from '../fieldSet';
import InputBox from '../inputBox';
import DiamentionInput from '../diamentionInput';
import Main from '../Main';
import Body from '../body';
import Footer from '../footer';


import handleFileChange from '../../utility/handleFileChange';
import handleSubmit from '../../utility/handleSubmit';

export default function Longitidunal(props) {
 
  const[formdata,setFormdata]=useState({"bridge":"option1"});
  const[typeOfBridge,setTypeOfBridge]=useState('normal')

  const handleChange=(e)=>{
    console.log(e.target.name)
    
    formdata[e.target.name]=e.target.value;
    console.log(formdata);
  
    setFormdata({...formdata})
    
  }
  let img='';

  useEffect(()=>{
    if(formdata.bridge==='option1'){
      img='longitude1.png'
    }
    else{
      img='box-culvert.png'
    }
  },[formdata.bridge])


  
  
 
  

  
  return (
    <Body setShowPage={props.setShowPage}>
    <Main imgsrc={img}>
    <div>
          <div className='check-box'>
            <span className='label' >Structure Type</span>
          </div>
          <div className='fieldset'>
            <FieldSet legend={'Type of Bridge'}>
              <input id='bridge-rd1' type='radio' 
              name='bridge' value='option1' checked={formdata.bridge==='option1'} onChange={handleChange}/>
              <label htmlFor='bridge-rd1'>Normal Type Frame</label>
              <input id='bridge-rd2' type='radio' name='bridge'
              value='option2' checked={formdata.bridge==='option2'} onChange={handleChange}/>
              <label htmlFor='bridge-rd2'>Box Culvert</label>
            </FieldSet>
          </div>
          <div className='input-box'>
            <div>
              <InputBox label={'Material'} id={'material-inp1'} class1={'label inp-short-label'}>
                <input type='text' id='material-inp1' name='material-inp1' className='input inp-short inp' value={formdata['material-inp1'] || ''} onChange={handleChange}></input>
                <select name='material-select1'>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
                <input className='extra-dot'></input>
              </InputBox>
            </div>
            <div>
              <InputBox label={'Size of Plate Element'} id={'plate-inp1'} class1={'label inp-long-label'}>
                <input type='text' id='plate-inp1' name='plate-inp1' className='inp-short inp' value={formdata['plate-inp1'] || '' } onChange={handleChange}/>m
              </InputBox>
            </div>
            <div>
              <InputBox label={'Span'} id={'span-inp1'} class1={'label inp-long-label'}>
                <input type='text' id='span-inp1' name='span-inp1' className='inp-long inp' value={formdata['span-inp1'] || ''} onChange={handleChange}/>m
                <p style={{ "margin": "2px 72px" }}>(ex:3,4,5@5.5)</p>
              </InputBox>
            </div>
            <div className='d-flex'>
              <div>

                <input type='checkbox'/>Wing Wall
              </div>


              <InputBox label={'Thickness'} id={'thickness-inp1'} class1={'label inp-short-label'}>
                <input type='text' id='thickness-inp1' name='thickness-inp1' className='inp-short inp' value={formdata['thickness-inp1'] || ''} onChange={handleChange}/>m
              </InputBox>
            </div>
            <div>
              <InputBox label={'Skew Angle'} id={'span-inp1'} class1={'label inp-short-label'}>
                <input type='number' id='skew-inp1' name='skew-inp1' className='inp inp-long' value={formdata['skew-inp1'] || ' '} onChange={handleChange}/>[deg]
              </InputBox>
            </div>

          </div>
          <div className='length-unit fieldset'>
            <InputBox label={'Length-Unit'} class1={"label"}>
              <select>
                <option>M,mm.in</option>
                <option></option>
              </select>
            </InputBox>

          </div>

          <div className='fieldset-diamension '>
            <FieldSet legend={"Dimensions"}>
              <div className='d-grid5'>
                <DiamentionInput label={'t1'} val={formdata.t1||''} onChange={handleChange}/>
                <DiamentionInput label={'t2'} val={'0.48768'} disable={true}/>
                <DiamentionInput label={'t3'} val={formdata.t3||''} onChange={handleChange}/>
                <DiamentionInput label={'t4'} val={formdata.t4||''} onChange={handleChange}/>
                <DiamentionInput label={'a1'} val={formdata.a1||''} onChange={handleChange}/>
                <DiamentionInput label={'a2'} val={'0.3048'} disable={true} />
                <DiamentionInput label={'a3'} val={formdata.a3||''} onChange={handleChange}/>
                <DiamentionInput label={'a4'} val={'0.54864'} disable={true}/>
                <DiamentionInput label={'b1'} val={formdata.b1||''} onChange={handleChange}/>
                <DiamentionInput label={'b2'} val={'0.9144'} disable={true}/>
                <DiamentionInput label={'b3'} val={'1.524'} disable={true}/>
                <DiamentionInput label={'b4'} val={formdata.b4||''} onChange={handleChange}/>
                <DiamentionInput label={'b5'} val={formdata.b5||''} onChange={handleChange}/>
                <DiamentionInput label={'b6'} val={'0.03048'} disable={true}/>
                <DiamentionInput label={'h1'} val={formdata.h1||''} onChange={handleChange}/>
                <DiamentionInput label={'h2'} val={formdata.h2||''} onChange={handleChange}/>
                <DiamentionInput label={'h3'} val={formdata.h3||''} onChange={handleChange}/>
                <DiamentionInput label={'A'} val={'60'} disable={true}/>
                <DiamentionInput label={'C'} val={'0.4572'} disable={true}/>
                <DiamentionInput label={'p'} val={formdata.p||''} onChange={handleChange}/>
              </div>
            </FieldSet>
          </div>
        </div>
        </Main>

        <Footer handleFileChange={handleFileChange} handleSubmit={handleSubmit} formData={formdata} setFormData={setFormdata}/>

        </Body>
  )
}
