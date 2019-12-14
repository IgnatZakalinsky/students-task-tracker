import React from 'react';
import MentorStart from "./MentorStart";
import {connect} from "react-redux";
import {IState, setTasksCountAC} from "../mentor-4-redux/mentorReducer";

interface IProps{
    tasksCount: number,
    setCount: Function
}

const MentorStartContainer: React.FC<IProps> = (props) => {

    const startSession = () => {
    };
    const setCount = (count: number) => {
        props.setCount(count)
    };
    return (
        <MentorStart tasksCount={props.tasksCount} setCount={setCount}
                     startSession={startSession}/>
    );
};

let mapStateToProps = (state: IState) => {
    return {
        tasksCount: state.tasksCount
    }
};

export default connect(mapStateToProps, {setCount: setTasksCountAC})(MentorStartContainer);
