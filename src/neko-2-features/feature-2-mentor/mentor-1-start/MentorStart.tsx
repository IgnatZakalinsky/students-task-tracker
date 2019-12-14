import React from 'react'
import Button from 'antd/es/button'
import {InputNumber} from "antd";

interface IProps{
    defaultValue: number,
    setDefaultValue: any,
    startSession: Function
}

const MentorStart: React.FC<IProps> = (props) => {
    return(
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
        >
            <Button type={'primary'}>START</Button>
            <InputNumber min={1} max={20} defaultValue={props.defaultValue} onChange={props.setDefaultValue}/>
        </div>
    )
};

export default MentorStart