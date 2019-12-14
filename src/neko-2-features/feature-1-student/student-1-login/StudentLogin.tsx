import React from 'react';
import {Button, Input} from "antd";

interface IProps{
    loginStudent: any,
    name: string,
    changeName: any
}
const StudentLogin: React.FC<IProps> = (props) => {

    return (
        <div style={{
            height: '80vh',
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Input placeholder={'Name Surname'} value={props.name} onChange={(e) => {props.changeName(e)}} style={{
                width: '400px',
                margin: '25px'
            }}/>
            <Button onClick={()=>{props.loginStudent(props.name)}}>Log In</Button>
        </div>
    );
};

export default StudentLogin;