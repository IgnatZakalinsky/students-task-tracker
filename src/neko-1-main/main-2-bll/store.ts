import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {studentReducer} from "../../neko-2-features/feature-1-student/student-3-redux/studentReducer";
import {mentorReducer} from "../../neko-2-features/feature-2-mentor/mentor-4-redux/mentorReducer";

const reducers = combineReducers({
    student: studentReducer,
    session: mentorReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type IAppStore = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;
