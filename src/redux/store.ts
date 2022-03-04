import {combineReducers, createStore} from "redux";
import {reducer} from "./Reducer";
import {savedState} from "./localstorage";

const commonReducer = combineReducers({
    counterData: reducer
});

export type StateType = ReturnType<typeof commonReducer>
export const store = createStore(commonReducer);

store.subscribe(()=> {
    const { min, max, value } =  store.getState().counterData;
    savedState({ min, max, value })
})
