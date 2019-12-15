import React from 'react';
import {Button, InputNumber} from "antd";
import {flexColumnCenterCenter80, flexRowCenterSpaceAround} from "../../feature-3-styles/styles";
import MentorDiagramContainer from "../mentor-3-diagram/MentorDiagramContainer";

interface IMentorSessionProps {
    taskCount: number,
    link: string
    logout: () => void
}

const MentorSession: React.FC<IMentorSessionProps> = ({taskCount, link, logout}) => {

    return (
        <div style={flexColumnCenterCenter80}>
            {link}

            <div style={{...flexRowCenterSpaceAround, width: '100vw'}}>
                <InputNumber min={0} value={taskCount} style={{margin: '20px'}}/>
                <Button type={'primary'} onClick={logout}>
                    FINISH SESSION
                </Button>
            </div>
            <MentorDiagramContainer/>
        </div>
    );
};

export default MentorSession;
