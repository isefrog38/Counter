import {
    AllActionsTypes,
    ChangeMaxValueType,
    ChangeMinValueType,
    ChangeValueType,
    ResetValueType, SetErrorType, SetValueType
} from "./Actions";


export type InitialStateType = {
    value: number,
    min: number,
    max: number,
    error: boolean,
};
let initialState: InitialStateType = {
    value: 0,
    min: 0,
    max: 0,
    error: false,
};

export const reducer = (state = initialState , action: AllActionsTypes): InitialStateType => {

    switch (action.type) {
        case ChangeMinValueType : {
                return {
                    ...state,
                    min: action.min >= 0 || Number.isInteger(action.min) ? action.min : state.min,
                    error: true
            }
        }
        case ChangeMaxValueType : {
                return {
                    ...state,
                    max: action.max >= 0 || Number.isInteger(action.max) ? action.max : state.max,
                    error: true
                }
        }
        case ChangeValueType : {
                return {
                    ...state,
                    value: state.value + 1
            }
        }
        case ResetValueType : {
            return {
                ...state,
                value: state.min
            }
        }
        case SetValueType : {
            if (state.min < state.max) {
                    return {
                        ...state,
                        value: state.min,
                        error: false
                    }
            } else {
                return {...state}
            }
        }
        case SetErrorType : {
           if ((state.value < state.max) || (state.max < state.min)) {
              return {
                  ...state,
                  error: true,
              }
            } else {
                return state
            }
        }
        default:
            return state
    }
}