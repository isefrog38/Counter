export const ChangeMaxValueType = "CHANGE_MAX_VALUE";
export const ChangeMinValueType = "CHANGE_MIN_VALUE";
export const ChangeValueType = "CHANGE_VALUE";
export const SetValueType = "SET_VALUE";
export const SetErrorType = "SET_ERROR";
export const ResetValueType = "RESET_VALUE";


export type ChangeValueACType = ReturnType<typeof changeValueAC>;
export type ChangeMinValueACType = ReturnType<typeof changeMinValueAC>;
export type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>;
export type SetValueACType = ReturnType<typeof setValueAC>;
export type SetErrorACType = ReturnType<typeof setErrorAC>;
export type ResetValueACType = ReturnType<typeof resetValueAC>;
export type AllActionsTypes = ChangeValueACType | ChangeMinValueACType | ChangeMaxValueACType | SetValueACType | SetErrorACType | ResetValueACType;

export const changeValueAC = () => {
    return { type: ChangeValueType,
    } as const
}
export const changeMinValueAC = (min: number) => {
    return { type: ChangeMinValueType, min
    } as const
}
export const changeMaxValueAC = (max: number) => {
    return { type: ChangeMaxValueType, max
    } as const
}
export const setValueAC = () => {
    return { type: SetValueType
    } as const
}
export const resetValueAC = () => {
    return { type: ResetValueType,
    } as const
}
export const setErrorAC = () => {
    return { type: SetErrorType,
    } as const
}