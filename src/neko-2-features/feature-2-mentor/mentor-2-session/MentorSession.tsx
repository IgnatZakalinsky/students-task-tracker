import React from 'react';
import {Button, InputNumber} from "antd";

interface IProps{
    tasksCount: number,
    setCount: any,
    link: string
}

const MentorSession: React.FC<IProps> = (props) => {

    return (
        <div style={{
            height: '80vh',
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                width: '400px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {props.link}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <InputNumber min={1} defaultValue={props.tasksCount} size={'large'} onChange={props.setCount}
                             style={{
                                 display: 'flex',
                                 fontSize: '18px',
                                 alignItems: 'center',
                                 marginRight: '10px'
                             }}/>
                             <Button type={'primary'} size={'large'}>FINISH SESSION</Button>
            </div>
        </div>
    );
};

export default MentorSession;