import React from 'react';
import {Button, Input} from "antd";
import {flexColumnCenterCenter80} from "../../feature-3-styles/styles";

interface IStudentLoginProps {
    name: string;
    studentSetNameCallback: (name: string) => void;
}

const StudentLogin: React.FC<IStudentLoginProps> = ({name, studentSetNameCallback}) => {

    return (
        <div style={flexColumnCenterCenter80}>
            <Input
                placeholder={'Name Surname'}
                value={name}
                onChange={e => studentSetNameCallback(e.currentTarget.value)}
                style={{width: '400px', margin: '20px'}}
            />
            <Button>Go to session</Button>
        </div>
    );
};

export default StudentLogin;
