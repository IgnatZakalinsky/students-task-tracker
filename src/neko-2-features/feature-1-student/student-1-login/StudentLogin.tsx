import React from 'react';
import {Button, Input} from "antd";

interface IProps{

}
const StudentLogin: React.FC<IProps> = () => {

    return (
        <div style={{
            height: '80vh',
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Input placeholder={'Name Surname'} style={{
                width: '400px',
                margin: '25px'
            }}/>
            <Button>Log In</Button>
        </div>
    );
};

export default StudentLogin;