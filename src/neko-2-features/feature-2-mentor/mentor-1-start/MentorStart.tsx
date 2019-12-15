import React from 'react'
import {Button, InputNumber} from "antd";
import {Redirect} from "react-router-dom"
import {MENTOR_SESSION_PATH} from "../../../neko-1-main/main-1-ui/Routes";
import {flexColumnCenterCenter80, flexRowCenterCenter} from "../../feature-3-styles/styles";

interface IMentorStartProps {
    taskCount: number;
    error: string;
    sessionToken: string;
    mentorSetTaskCountCallback: (taskCount: number) => void;
    startSessionCallback: () => void;
}

const MentorStart: React.FC<IMentorStartProps> =
    ({taskCount, error, sessionToken, mentorSetTaskCountCallback, startSessionCallback}) => {
        if (!!sessionToken) {
            return <Redirect to={MENTOR_SESSION_PATH}/>
        }

        return (
            <div style={flexColumnCenterCenter80}>
                {!!error && <div style={{color: 'red'}}>{error}</div>}

                <div style={flexRowCenterCenter}>
                    <InputNumber
                        min={0}
                        value={taskCount}
                        onChange={e => mentorSetTaskCountCallback(e || 0)}
                        style={{margin: '20px'}}
                    />
                    <Button type={'primary'} onClick={startSessionCallback}>
                        START
                    </Button>
                </div>
            </div>
        )
    };

export default MentorStart
