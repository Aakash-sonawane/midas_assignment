import React from 'react'
import Main from '../../Main'
import InputBox from '../../inputBox'
import './transeverse.css'
import FieldSet from '../../fieldSet'
import DiamentionInput from '../../diamentionInput'

export default function Transverse() {
    return (
        <Main imgsrc={'transeverse1.png'}>
            <div className='type-container'>
                <div className='type-select-container'>
                    <div className='label type-label'>Type</div>
                    {/* <InputBox label={"Type"} class1={"label type-label"}> */}
                    <select className='type-select'>
                        <option>Type1</option>
                        <option>Type2</option>
                        <option>Type3</option>
                    </select>
                </div>
                {/* </InputBox> */}
                <InputBox label={"Size of plate element"} class1={"label inp-long-label"}>
                    <input type='text' className='inp-short inp' /> m
                </InputBox>
            </div>
            <div className='d-grid4 transevere-d'>
                <DiamentionInput label={"b1"} measure={'m'} />
                <DiamentionInput label={"b2"} measure={'m'} />
                <DiamentionInput label={"b3"} measure={'m'} />
                <DiamentionInput label={"b4"} measure={'m'} />
                <DiamentionInput label={"b5"} measure={'m'} />
                <DiamentionInput label={"b6"} measure={'m'} />
                <DiamentionInput label={"b7"} measure={'m'} />
                <DiamentionInput label={"D"} measure={'m'} />
                <DiamentionInput label={"n"} />
            </div>

            <div className='support-frame'>
                <FieldSet legend={'Supports oF Pi Frame'}>
                    <InputBox label={'Transverse Fixed Support'} class1={'label'}>
                        <select class='supports-select1'>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                        </select> <span>from left side</span>
                    </InputBox>
                </FieldSet>
            </div>
            <div className='support-frame'>
                <FieldSet legend={'Supports oF Pi Frame'}>
                    <div className='support-frame_inpbox'>
                        <InputBox label={'Spring Type'} class1={'label'}>
                            <input className='inp-long inp' />
                        </InputBox>

                    </div>
                    <div className='support-frame_inpbox d-flex'>
                        <div className='label label-div'>Modulus of Subgrade Reaction</div>
                        {/* <InputBox label={'Modulus of Subgrade Reaction'} class1={'label'}> */}
                        <div>
                            <div className='support-frame_inpbox_el'>

                                <InputBox label={'lower'} class1={'rmr10'}>
                                    <input className='inp-short inp' /> <span>kN/m^3</span>
                                </InputBox>
                            </div>
                            <div className='support-frame_inpbox_el'>

                                <InputBox label={'lateral'} class1={'rmr10'}>
                                    <input className='inp-short inp' /> <span>kN/m^3</span>
                                </InputBox>
                            </div>
                            <div className='support-frame_inpbox_el'>

                                <InputBox label={'upper'} class1={'rmr10'}>
                                    <input className='inp-short inp' /> <span>kN/m^3</span>
                                </InputBox>
                            </div>
                        </div>
                        {/* </InputBox> */}

                    </div>
                    <div className='support-frame_inpbox'>
                        <InputBox label={'Length Of Elastic'} class1={'label'}>
                            <input className='inp-short inp' /> <span>m</span>
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
    )
}
