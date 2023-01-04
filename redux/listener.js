import {createListenerMiddleware, getDefaultMiddleware} from "@reduxjs/toolkit";
import {toggleChangeAction, changeUpdateForm,  updateAction} from "./reducer";


const listenerMiddleware = createListenerMiddleware();


listenerMiddleware.startListening({
    actionCreator: changeUpdateForm,
    effect: async(action, listenerApi)=>{
        listenerApi.dispatch(updateAction(action.payload))
    }
})

export default listenerMiddleware;
