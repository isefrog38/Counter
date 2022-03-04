import {StateType} from "./store";

export type LocalStorageStateType = { min: number; max: number; value: number }

export const loadState = (): LocalStorageStateType | undefined => {
        const stateLocalStorage = localStorage.getItem('state');
        if (stateLocalStorage) {
            return JSON.parse(stateLocalStorage);
        }
};


export const savedState = (state: LocalStorageStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};