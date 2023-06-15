import React, { useState } from 'react'
import Main from '../../parts/Main'
import InputBox from '../../inputBox'
import './transeverse.css'
import FieldSet from '../../fieldSet'
import DiamentionInput from '../../diamentionInput'
import Body from '../../parts/body'
import Footer from '../../parts/footer'

export default function Transverse({setShowPage}) {
    const[formdata,setFormdata]=useState({"file":"transverse"});
    const handleChange=(e)=>{
        console.log(e.target.name)
        
        formdata[e.target.name]=e.target.value;
        console.log(formdata);
      
        setFormdata({...formdata})
        
      }

    return (
        <Body setShowPage={setShowPage}>
        <Main imgsrc={formdata.type==='type1'?'type1.png':"type2.png"}>
            <div className='type-container'>
                <div className='type-select-container'>
                    <div className='label type-label'>Type</div>
                    {/* <InputBox label={"Type"} class1={"label type-label"}> */}
                    <select className='type-select' name='type' value={formdata['type'] || 'type1'} onChange={handleChange}>
                        <option value={"type1"}>Type1</option>
                        <option value={"type2"}>Type2</option>
                    </select>
                </div>
                {/* </InputBox> */}
                <InputBox label={"Size of plate element"} class1={"label inp-long-label"}>
                    <input type='text' name='size-of-plate' className='inp-short inp' value={formdata['size-of-plate'] || ''} onChange={handleChange}/> m
                </InputBox>
            </div>
            <div className='d-grid4 transevere-d'>
                <DiamentionInput label={"b1"} measure={'m'} val={'1.00584'} disable={true}/>
                <DiamentionInput label={"b2"} measure={'m'} val={'1.88976'} disable={true}/>
                <DiamentionInput label={"b3"} measure={'m'} val={formdata.b3||''} onChange={handleChange}/>
                <DiamentionInput label={"b4"} measure={'m'} val={formdata.b4||''} onChange={handleChange}/>
                <DiamentionInput label={"b5"} measure={'m'} val={formdata.b5||''} onChange={handleChange}/>
                <DiamentionInput label={"b6"} measure={'m'} val={formdata.type==='type2'?'2.01168':formdata.b6||''} disable={formdata.type==='type2'?true:false} onChange={handleChange}/>
                <DiamentionInput label={"b7"} measure={'m'} val={formdata.b7||''} onChange={handleChange}/>
                <DiamentionInput label={"D"} measure={'m'} val={'6.96'} disable={true}/>
                <DiamentionInput label={"n"} val={'3'} disable={true}/>
            </div>

            <div className='support-frame'>
                <FieldSet legend={'Supports oF Pi Frame'}>
                    <InputBox label={'Transverse Fixed Support'} class1={'label'}>
                        <select className='supports-select1' name='fixed-support' value={formdata['fixed-support'] || ''} onChange={handleChange}>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select> <span>from left side</span>
                    </InputBox>
                </FieldSet>
            </div>
            <div className='support-frame'>
                <FieldSet legend={'Supports oF Culvert'}>
                    <div className='support-frame_inpbox'>
                        <InputBox label={'Spring Type'} class1={'label'}>
                            <input name='spring' type='radio'/> General
                            <input name='spring' type='radio'/> Compression only
                        </InputBox>
                    </div>
                    <div className='support-frame_inpbox d-flex'>
                        <div className='label label-div'>Modulus of Subgrade Reaction</div>
                        {/* <InputBox label={'Modulus of Subgrade Reaction'} class1={'label'}> */}
                        <div>
                            <div className='support-frame_inpbox_el'>
                                <InputBox label={'lower'} class1={'rmr10'}>
                                    <input className='inp-short inp' name='lower' value={formdata['lower'] || '19635.9'} onChange={handleChange}/> <span>kN/m^3</span>
                                </InputBox>
                            </div>
                            <div className='support-frame_inpbox_el'>
                                <InputBox label={'lateral'} class1={'rmr10'}>
                                    <input className='inp-short inp' name='lateral' value={'19635.9'} disabled/> <span>kN/m^3</span>
                                </InputBox>
                            </div>
                            <div className='support-frame_inpbox_el'>
                                <InputBox label={'upper'} class1={'rmr10'}>
                                    <input className='inp-short inp' name='upper' value={'19635.9'} disabled/> <span>kN/m^3</span>
                                </InputBox>
                            </div>
                        </div>
                        {/* </InputBox> */}

                    </div>
                    <div className='support-frame_inpbox'>
                        <InputBox label={'Length Of Elastic'} class1={'label'}>
                            <input className='inp-short inp' name='length-of-elastic' value={formdata['length-of-elastic'] || '1.00584'} onChange={handleChange}/> <span>m</span>
                        </InputBox>

                    </div>
                </FieldSet>

            </div>

            <div className='length-unit fieldset length-unit-tarnseverse'>
            <InputBox label={'Length-Unit'} class1={"label"}>
              <select>
                <option>M,mm.in</option>
                <option></option>
              </select>
            </InputBox>
          </div>

        </Main>
        <Footer formData={formdata} setFormData={setFormdata}/>
        </Body>
    )
}
