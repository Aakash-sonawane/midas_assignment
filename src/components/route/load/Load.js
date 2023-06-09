import React from 'react'
import Main from '../../Main'
import InputBox from '../../inputBox'
import './load.css'

export default function Load() {
    return (
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
                            <input type='checkbox' /> Factored
                            <input type='checkbox' /> unfactored
                        </div>
                        <button>
                            Difine Moving Load Code
                        </button>
                    </div>
                </div>
           

            <div className='load_density transevere-d'>

                <input type='checkbox' /> self Weight

                <div className='d-flex gap20 mrb10'>
                    <div>
                        <input type='checkbox' /> pavement  :
                    </div>
                    <InputBox label={'Weight Density'}>
                        <input type='text' className='inp-short inp' /> kN/m^3
                    </InputBox>
                    <InputBox label={'ThickNess'}>
                        <input type='text' className='inp-short inp' /> m
                    </InputBox>
                </div>

                <div className='d-flex gap20 mrb10'>
                    <div>
                        <input type='checkbox' /> Soll  :
                    </div>
                    <div>
                        <div className='d-grid2 mrb10'>

                            <div>
                                <InputBox label={'Weight Density'}>
                                    <input type='text' className='inp-short inp' /> kN/m^3
                                </InputBox>
                            </div>
                            <div>
                                <InputBox label={'Phi'}>
                                    <input type='text' className='inp-short inp' /> kN/m^3
                                </InputBox>
                            </div>
                            <div>
                                <InputBox label={'Surcharge'}>
                                    <input type='text' className='inp-short inp' /> kN/m^3
                                </InputBox>
                            </div>
                        </div>
                        <div>
                            <div className='mrb10'>
                                <InputBox label={'Submerged Weight Density'}>
                                    <input type='text' className='inp-short inp' /> kN/m^3
                                </InputBox>
                            </div>
                        </div>
                        <div>
                            <InputBox label={'Load Slope'}>
                                <span>(L) 1 :</span>
                                <input type='text' className='inp-short inp' /> kN/m^3
                                <span>(R) 1 :</span>
                                <input type='text' className='inp-short inp' /> kN/m^3
                            </InputBox>
                        </div>
                    </div>
                </div>

                <div className='d-flex gap20 mrb10'>
                    <div>
                        <input type='checkbox' /> Underground Water  :
                    </div>
                    <span>GL -</span>
                    <input type='text' className='inp-short inp' /> m
                </div>


                <div className='d-flex gap20 mrb10'>
                    <div>
                        <input type='checkbox' /> Barrier  :
                    </div>
                    <InputBox label={'self weight'}>
                        <input type='text' className='inp-short inp' /> kN/m
                    </InputBox>
                    <InputBox label={'Additional Load'}>
                        <input type='text' className='inp-short inp' /> kN/m
                    </InputBox>

                </div>

                <div className='d-flex gap20 mrb10'>
                    <div>
                        <input type='checkbox' /> Median Strip  :
                    </div>
                    <div>
                        <input type='text' className='inp-short inp' /> kN/m
                    </div>
                </div>

                <div className='d-flex gap20'>
                    <div>
                        <input type='checkbox' /> SideWalk  :
                    </div>
                    <InputBox label={'weight Density'}>
                        <input type='text' className='inp-short inp' /> kN/m^3
                    </InputBox>
                    <InputBox label={'Thickness'}>
                        <input type='text' className='inp-short inp' /> m
                    </InputBox>
                    <InputBox label={'Crowd Load'}>
                        <input type='text' className='inp-short inp' /> kN/m^3
                    </InputBox>

                </div>
            </div>
            <div className='d-flex gap20 transevere-d'>
                <div>
                    <input type='checkbox' /> Live Load  :
                </div>
                <InputBox label={'Class of Loading'}>
                    <input type='text' className='inp-short inp' /> kN/m^3
                </InputBox>
                <InputBox label={'Eccentricity'}>
                    <input type='radio' />
                    <input type='radio' />
                </InputBox>
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
                        <input type='checkbox' /> System Temperature  :
                    </div>
                    <InputBox label={'T[+/-]'}>
                        <input type='text' className='inp-short inp' /> [T]
                    </InputBox>
                </div>

                <div className='d-flex gap20 mrb10'>
                    <div>
                        <input type='checkbox' /> : Temperature Gradient
                    </div>
                    <InputBox label={' Delta T '}>
                        <input type='text' className='inp-short inp' /> [T]
                    </InputBox>

                </div>
            </div>

            <div className='d-flex gap20 transevere-d disable'>
                <div className='d-flex'>
                    <div>
                        <input type='checkbox' disabled /> Shrinkage Strain  :
                    </div>
                    <div>
                        <input type='text' disabled className='inp-short inp' />
                    </div>
                </div>
                <div className='d-flex'>
                    <div>
                        <input type='checkbox' disabled /> Thermal Coefficent  :
                    </div>
                    <div>
                        <input type='text' disabled className='inp-short inp' /> 1/[T]
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
    )
}
