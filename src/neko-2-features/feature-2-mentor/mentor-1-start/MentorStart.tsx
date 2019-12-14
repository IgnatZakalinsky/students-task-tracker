import React from 'react'
import Button from 'antd/es/button'
import {InputNumber} from "antd";

interface IProps{
    tasksCount: number,
    setCount: any,
    startSession: Function
}

const MentorStart: React.FC<IProps> = (props) => {

    return(
        <div
            style={{
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Button type={'primary'}>START</Button>
            <InputNumber min={1} max={20} defaultValue={props.tasksCount} onChange={props.setCount}/>
        </div>
    )
};

export default MentorStart