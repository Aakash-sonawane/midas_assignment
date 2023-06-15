import React, {useState } from 'react'
import FieldSet from '../../fieldSet';
import InputBox from '../../inputBox';
import DiamentionInput from '../../diamentionInput';
import Main from '../../parts/Main';
import Body from '../../parts/body';
import Footer from '../../parts/footer';

export default function Longitidunal(props) {

  const [formdata, setFormdata] = useState({"file":"longitidunal","bridge":"option1"});

  const handleChange = (e) => {
    // console.log(e.target.name)
    formdata[e.target.name] = e.target.value;
    // console.log(formdata);
    setFormdata({ ...formdata })
  }

  return (
    <Body setShowPage={props.setShowPage}>
      <Main imgsrc={formdata.bridge==="option1"?"normal.png":"box-culvert.png"}>
        <div>
          <div className='check-box d-flex'>
           
            <InputBox label={'Structure Type'} class1={'label'}>
              <span className='mr30'>
              <input type='radio' name='structure-type' value={'2D'} checked={formdata['structure-type']==='2D'} onChange={handleChange}/>2-Dimensional
              <input type='radio' className='mr30' name='structure-type' value={'3D'} checked={formdata['structure-type']==='3D'} onChange={handleChange}/>3-Dimensional
              </span>
            </InputBox>
          </div>
          <div className='fieldset'>
            <FieldSet legend={'Type of Bridge'}>
              <div className='d-flex bridetypeContainer'>
              <div>
              <input id='bridge-rd1' type='radio'
                name='bridge' value='option1' checked={formdata.bridge === 'option1'} onChange={handleChange} />
              <label htmlFor='bridge-rd1'>Normal Type Frame</label>
              </div>
              <div>
              <input id='bridge-rd2' type='radio' name='bridge'
                value='option2' checked={formdata.bridge === 'option2'} onChange={handleChange} />
              <label htmlFor='bridge-rd2'>Box Culvert</label>
              </div>
              </div>
            </FieldSet>
          </div>
          <div className='input-box'>
            <div>
              <InputBox label={'Material'} id={'material-inp1'} class1={'label inp-short-label'}>
                <input type='text' id='material-inp1' name='material-inp1' className='input inp-short inp' value={formdata['material-inp1'] || ''} onChange={handleChange}></input>
                <select name='material-select1'>
                  <option></option>
                  <option>fe</option>
                  <option>cs</option>
                  <option>hcs</option>
                </select>
                <input className='extra-dot'></input>
              </InputBox>
            </div>
            <div>
              <InputBox label={'Size of Plate Element'} id={'plate-inp1'} class1={'label inp-long-label'}>
                <input type='text' id='plate-inp1' name='plate-inp1' className='inp-short inp' value={formdata['plate-inp1'] || ''} onChange={handleChange} />m
              </InputBox>
            </div>
            <div>
              <InputBox label={'Span'} id={'span-inp1'} class1={'label inp-long-label'}>
                <input type='text' id='span-inp1' name='span-inp1' className='inp-long inp' value={formdata['span-inp1'] || ''} onChange={handleChange} />m
                <p style={{ "margin": "2px 72px" }}>(ex:3,4,5@5.5)</p>
              </InputBox>
            </div>
            <div className='d-flex'>
              <div>

                <input type='checkbox' />Wing Wall
              </div>


              <InputBox label={'Thickness'} id={'thickness-inp1'} class1={'label inp-short-label'}>
                <input type='text' id='thickness-inp1' name='thickness-inp1' className='inp-short inp' value={formdata['thickness-inp1'] || ''} onChange={handleChange} />m
              </InputBox>
            </div>
            <div>
              <InputBox label={'Skew Angle'} id={'span-inp1'} class1={'label inp-short-label'}>
                <input type='number' id='skew-inp1' name='skew-inp1' className='inp inp-short' value={formdata['skew-inp1'] || ' '} onChange={handleChange} /> <span>[deg]</span>
              </InputBox>
            </div>

          </div>
          <div className='length-unit fieldset'>
            <InputBox label={'Length-Unit'} class1={"label length-uni-bor"}>
              <select className='length-uni-bor'>
                <option >M,mm.in</option>
                <option></option>
              </select>
            </InputBox>

          </div>

          <div className='fieldset-diamension '>
            <FieldSet legend={"Dimensions"}>
              <div className='d-grid5'>
                <DiamentionInput label={'t1'} measure={' m'} val={formdata.t1 || ''} onChange={handleChange} />
                <DiamentionInput label={'t2'} measure={' m'} val={'0.48768'} disable={true} />
                <DiamentionInput label={'t3'} measure={' m'} val={formdata.t3 || ''}  onChange={handleChange} />
                <DiamentionInput label={'t4'} measure={' m'} val={formdata.bridge==='option1'?"0.762":formdata.t4 || ''} disable={formdata.bridge==='option1'?true:false} onChange={handleChange} />
                <DiamentionInput label={'a1'} measure={' m'} val={formdata.a1 || ''} onChange={handleChange} />
                <DiamentionInput label={'a2'} measure={' m'} val={'0.3048'} disable={true} />
                <DiamentionInput label={'a3'} measure={' m'} val={formdata.bridge==='option1'?"0.6096":formdata.a3 || ''} disable={formdata.bridge==='option1'?true:false} onChange={handleChange} />
                <DiamentionInput label={'a4'} measure={' m'} val={'0.54864'} disable={true} />
                <DiamentionInput label={'b1'} measure={' m'} val={formdata.b1 || ''} onChange={handleChange} />
                <DiamentionInput label={'b2'} measure={' m'} val={'0.9144'} disable={true} />
                <DiamentionInput label={'b3'} measure={' m'} val={'1.524'} disable={formdata.bridge==='option2'?true:false} />
                <DiamentionInput label={'b4'} measure={' m'} val={formdata.b4 || ''} onChange={handleChange} />
                <DiamentionInput label={'b5'} measure={' m'} val={formdata.bridge==='option1'?"0.3048":formdata.b5 || ''} disable={formdata.bridge==='option1'?true:false} onChange={handleChange} />
                <DiamentionInput label={'b6'} measure={' m'} val={'0.03048'} disable={true} />
                <DiamentionInput label={'h1'} measure={' m'} val={formdata.h1 || ''} onChange={handleChange} />
                <DiamentionInput label={'h2'} measure={' m'} val={formdata.h2 || ''} onChange={handleChange} />
                <DiamentionInput label={'h3'} measure={' m'} val={formdata.h3 || ''} onChange={handleChange} />
                <DiamentionInput label={'A'} measure={' [deg]'} val={'60'} disable={true} />
                <DiamentionInput label={'C'} measure={' m'} val={'0.4572'} disable={true} />
                <DiamentionInput label={'p'} measure={' m'} val={formdata.p || ''} onChange={handleChange} />
              </div>
            </FieldSet>
          </div>
        </div>
      </Main>

      <Footer formData={formdata} setFormData={setFormdata}/>

    </Body>
  )
}
