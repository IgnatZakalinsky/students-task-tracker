import React from 'react';
import {Button, Input} from "antd";
import {flexColumnCenterCenter80} from "../../feature-3-styles/styles";

interface IStudentLoginProps {
    name: string;
    error: string;
    loading: boolean;
    studentSetNameCallback: (name: string) => void;
    goToSessionCallback: () => void;
}

const StudentLogin: React.FC<IStudentLoginProps> =
    ({name, studentSetNameCallback, goToSessionCallback, error, loading}) => {

        return (
            <div style={flexColumnCenterCenter80}>
                {!!error && <div style={{color: 'red'}}>{error}</div>}
                {loading && <div style={{color: 'orange'}}>Loading...</div>}

                <Input
                    placeholder={'Name Surname'}
                    value={name}
                    onChange={e => studentSetNameCallback(e.currentTarget.value)}
                    style={{width: '250px', margin: '20px'}}
                    disabled={loading}
                />
                <Button onClick={goToSessionCallback} disabled={loading} type={'primary'}>
                    Go to session
                </Button>
            </div>
        );
    };

export default StudentLogin;
