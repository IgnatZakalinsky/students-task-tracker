import React from 'react'
import {Button, InputNumber} from "antd";

interface IProps {
    tasksCount: number,
    setCount: any,
    startSession: Function,
    error: string
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
            <Button type={'primary'} onClick={() => {props.startSession(props.tasksCount)}}
                    style={{
                        width: '100px',
                        height: '50px',
                        borderRadius: '20px',
                    }}
            >START</Button>
            <InputNumber min={1} defaultValue={props.tasksCount} onChange={props.setCount}
                         style={{
                             display: 'flex',
                             width: '100px',
                             height: '50px',
                             fontSize: '18px',
                             alignItems: 'center',
                         }}/>
            {!!props.error && <div style={{
                display: 'flex',
                height: '50px',
                border: '2px red solid',
                borderRadius: '20px',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '16px',
                color: 'red',
                width: '400px',
            }}>{props.error}</div> }
        </div>
    )
};

export default MentorStart