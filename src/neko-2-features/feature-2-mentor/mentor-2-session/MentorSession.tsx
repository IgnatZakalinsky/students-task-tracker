import React from 'react';
import {Button, InputNumber} from "antd";
import {flexColumnCenterCenter80, flexRowCenterSpaceAround} from "../../feature-3-styles/styles";
import MentorDiagramContainer from "../mentor-3-diagram/MentorDiagramContainer";

interface IMentorSessionProps {
    taskCount: number;
    link: string;
    finishSession: () => void;
    updateSessionCallback: (taskCount: number) => void;
}

const MentorSession: React.FC<IMentorSessionProps> = ({taskCount, link, finishSession, updateSessionCallback}) => {

    return (
        <div style={flexColumnCenterCenter80}>
            {link}

            <div style={{...flexRowCenterSpaceAround, width: '100vw'}}>
                <InputNumber
                    min={1}
                    value={taskCount}
                    style={{margin: '20px'}}
                    onChange={e => updateSessionCallback(e || 1)}
                />
                <Button type={'primary'} onClick={finishSession}>
                    FINISH SESSION
                </Button>
            </div>
            <MentorDiagramContainer/>
        </div>
    );
};

export default MentorSession;
