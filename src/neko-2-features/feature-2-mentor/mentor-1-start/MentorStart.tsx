import React from 'react'
import {Button, InputNumber} from "antd";

interface IProps {
    tasksCount: number,
    setCount: any,
    startSession: Function
}

const MentorStart: React.FC<IProps> = (props) => {
    return (
        <div
            style={{
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Button type={'primary'}
                    style={{
                        width: '100px',
                        height: '50px',
                        borderRadius: '20px',
                    }}
            >START</Button>
            <InputNumber min={1} max={20} defaultValue={props.tasksCount} onChange={props.setCount}
                         style={{
                             display: 'flex',
                             width: '100px',
                             height: '50px',
                             fontSize: '18px',
                             alignItems: 'center',
                         }}/>
        </div>
    )
};

export default MentorStart