import React, { useState } from 'react'
import Main from '../../parts/Main'
import InputBox from '../../inputBox'
import './load.css'
import Body from '../../parts/body'
import Footer from '../../parts/footer'

export default function Load({setShowPage}) {
    const[formdata,setFormdata]=useState({"file":"load"});

    const handleChange=(e)=>{
        console.log(e.target.name)
        
        formdata[e.target.name]=e.target.value;
        console.log(formdata);
      
        setFormdata({...formdata})
        
      }
    return (
        <Body setShowPage={setShowPage}>
        <Main load={true}>

            <div className='load-combinators-inner'>
                <div className='load-combinators transevere-d d-flex gap20 '>
                    <span>Load combinations :</span>
                    <div className='d-flex-colum'>

                        <div className='d-flex gap20'>
                            <select>
                                <option>AASHTO-Std2k</option>
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                            <input type='checkbox' checked /> Factored
                            <input type='checkbox' checked /> unfactored
                        </div>
                        <button>
                            Difine Moving Load Code
                        </button>
                    </div>
                </div>
           

            <div className='load_density transevere-d'>

                <input type='checkbox' checked/> self Weight

                <div className='d-flex gap20 mrb10'>
                    <div>
                        <input type='checkbox' checked/> pavement  :
                    </div>
                    <InputBox label={'Weight Density'} class1={'label'}>
                        <input type='text' className='inp-short inp' name='pavment-WD' value={formdata['pavment-WD'] || ''} onChange={handleChange} /> kN/m^3
                    </InputBox>
                    <InputBox label={'ThickNess'} class1={'label'}>
                        <input type='text' className='inp-short inp' name='pavment-thickness' value={formdata['pavment-thickness'] || ''} onChange={handleChange} /> m
                    </InputBox>
                </div>

                <div className='d-flex gap20 mrb10'>
                    <div className='soll-container'>
                        <input type='checkbox' checked /> Soll  :
                    </div>
                    <div>
                        <div className='d-grid2 mrb10'>

                            <div>
                                <InputBox label={'Weight Density'} class1={'label'}>
                                    <input type='text' className='inp-short inp' name='soll-WD' value={formdata['soll-WD'] || ''} onChange={handleChange} /> kN/m^3
                                </InputBox>
                            </div>
                            <div>
                                <InputBox label={'Phi'} class1={'label'}>
                                    <input type='text' className='inp-short inp' name='soll-phi' value={formdata['soll-phi'] || ''} onChange={handleChange} /> kN/m^3
                                </InputBox>
                            </div>
                            <div>
                                <InputBox label={'Surcharge'} class1={'label'}>
                                    <input type='text' className='inp-short inp' name='soll-sucharge' value={formdata['soll-sucharge'] || ''} onChange={handleChange} /> kN/m^3
                                </InputBox>
                            </div>
                        </div>
                        <div>
                            <div className='mrb10'>
                                <InputBox label={'Submerged Weight Density'} class1={'label'}>
                                    <input type='text' className='inp-short inp' name='soll-subWD' value={formdata['soll-subWD'] || ''} onChange={handleChange} /> kN/m^3
                                </InputBox>
                            </div>
                        </div>
                        <div>
                            <InputBox label={'Load Slope'} class1={'label'}>
                                <span>(L) 1 :</span>
                                <input type='text' className='inp-short inp' value={'1.5'} disabled />
                                <span>(R) 1 :</span>
                                <input type='text' className='inp-short inp' value={'1.5'} disabled /> 
                            </InputBox>
                        </div>
                    </div>
                </div>

                <div className='d-flex gap20 mrb10'>
                    <div>
                        <input type='checkbox' checked/> Underground Water  :
                    </div>
                    <span>GL -</span>
                    <input type='text' className='inp-short inp' name='GL' value={formdata['GL'] || ''} onChange={handleChange} /> m
                </div>


                <div className='d-flex gap20 mrb10'>
                    <div>
                        <input type='checkbox' checked/> Barrier  :
                    </div>
                    <InputBox label={'self weight'} class1={'label'}>
                        <input type='text' className='inp-short inp' name='self-weight' value={formdata['self-weight'] || ''} onChange={handleChange}/> kN/m
                    </InputBox>
                    <InputBox label={'Additional Load'} class1={'label'}>
                        <input type='text' className='inp-short inp' name='add-load' value={formdata['add-load'] || ''} onChange={handleChange}/> kN/m
                    </InputBox>

                </div>

                <div className='d-flex gap20 mrb10'>
                    <div>
                        <input type='checkbox' checked/> Median Strip  :
                    </div>
                    <div>
                        <input type='text' className='inp-short inp' name='median-strip' value={formdata['median-strip'] || ''} onChange={handleChange} /> kN/m
                    </div>
                </div>

                <div className='d-flex gap20'>
                    <div>
                        <input type='checkbox' checked /> SideWalk  :
                    </div>
                    <InputBox label={'weight Density'} class1={'label'}>
                        <input type='text' className='inp-short inp' name='sideWalk-wd' value={formdata['sideWalk-wd'] || ''} onChange={handleChange}/> kN/m^3
                    </InputBox>
                    <InputBox label={'Thickness'} class1={'label'}>
                        <input type='text' className='inp-short inp' name='sideWalk-thickness' value={formdata['sideWalk-thickness'] || ''} onChange={handleChange} /> m
                    </InputBox>
                    <InputBox label={'Crowd Load'}>
                        <input type='text' className='inp-short inp' name='crowd-load' value={formdata['crowd-load'] || ''} onChange={handleChange} /> kN/m^3
                    </InputBox>

                </div>
            </div>
            <div className='d-flex gap20 transevere-d'>
                <div>
                    <input type='checkbox' checked disabled /> Live Load  :
                </div>
                <div className='d-flex-col gap10'>
                <InputBox label={'Class of Loading'} class1={'label'}>
                    <select value={"H15-44"} disabled>
                        <option>H15-44</option>
                    </select>
                </InputBox>

                <InputBox label={'Eccentricity'} class1={'label'}>
                    <input type='radio' checked disabled/>left
                    <input type='radio' disabled/>right
                </InputBox>
                </div>
            </div>

            <div className='d-flex gap20 transevere-d disable'>
                <div>
                    <input type='checkbox' disabled /> Settlement  :
                </div>
                <div>
                    <input type='text' disabled className='inp-short inp' value='-0.009144' /> m
                </div>

            </div>

            <div className='transevere-d'>
                <div className='d-flex gap20 mrb10'>
                    <div>
                        <input type='checkbox' checked /> System Temperature  :
                    </div>
                    <InputBox label={'T[+/-]'}>
                        <input type='text' className='inp-short inp' name='system-temp' value={formdata['system-temp'] || ''} onChange={handleChange}/> [T]
                    </InputBox>
                </div>

                <div className='d-flex gap20 mrb10'>
                    <div>
                        <input type='checkbox' checked/> : Temperature Gradient
                    </div>
                    <InputBox label={' Delta T '}>
                        <input type='text' className='inp-short inp' name='delta-t' value={formdata['delta-t'] || ''} onChange={handleChange} /> [T]
                    </InputBox>

                </div>
            </div>

            <div className='d-flex gap20 transevere-d disable'>
                <div className='d-flex'>
                    <div>
                        <input type='checkbox' checked/> Shrinkage Strain  :
                    </div>
                    <div>
                        <input type='text' className='inp-short inp'  name='shrink-strain' value={formdata['shrink-strain'] || '0.00015'} onChange={handleChange}/>
                    </div>
                </div>
                <div className='d-flex'>
                    <div>
                        Thermal Coefficent  :
                    </div>
                    <div>
                        <input type='text' className='inp-short inp' name='COEP' value={formdata['COEP'] || '1e-05'} onChange={handleChange}/> 1/[T]
                    </div>
                </div>

            </div>

            <div className='d-flex'>
                <div className='length-unit fieldset length-unit-tarnseverse'>
                    <InputBox label={'Length-Unit'} class1={"label"}>
                        <select>
                            <option>M,mm.in</option>
                            <option></option>
                        </select>
                    </InputBox>
                </div>
                <div className='length-unit fieldset length-unit-tarnseverse'>
                    <InputBox label={'Length-Unit'} class1={"label"}>
                        <select>
                            <option>M,mm.in</option>
                            <option></option>
                        </select>
                    </InputBox>
                </div>
            </div>
            </div>
        </Main>
        <Footer formData={formdata} setFormData={setFormdata}/>
        
        </Body>
    )
}
