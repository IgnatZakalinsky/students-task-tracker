// import {forgotInitialState} from "./forgotInitialState";
// import {FORGOT_LOADING, FORGOT_SUCCESS, IForgotActions, FORGOT_ERROR} from "./forgotActions";
//
// export const forgotReducer = (state = forgotInitialState, action: IForgotActions) => {
//     switch (action.type) {
//         case FORGOT_LOADING: {
//             return {
//                 ...state,
//                 loading: action.loading,
//                 error: '',
//                 success: false,
//             }
//         }
//         case FORGOT_SUCCESS: {
//             return {
//                 ...state,
//                 loading: false,
//                 success: action.success,
//                 error: '',
//             }
//         }
//         case FORGOT_ERROR: {
//             return {
//                 ...state,
//                 loading: false,
//                 success: false,
//                 error: action.error,
//             }
//         }
//
//         default: {
//             return state;
//         }
//     }
// };
