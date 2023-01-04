import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    client : { toggleForm : false, updateFormVisible: false, formId: undefined, deleteId : null, stateInfo: {}}
}

export const ReducerSlice = createSlice({
    name: 'studentapp',
    initialState,
    reducers : {
        toggleChangeAction : (state) => {
            state.client.toggleForm = !state.client.toggleForm
        },
        changeUpdateForm: (state)=>{
            state.client.updateFormVisible = !state.client.updateFormVisible
        },
        updateAction : (state, action) => {
            state.client.formId = action.payload
        },
        deleteAction : (state, action) => {
            state.client.deleteId = action.payload
        },
        getInfo : (state, action)=>{
            state.client.studentInfo = action.payload
        }
    }
})

export const { toggleChangeAction, changeUpdateForm, getInfo,  updateAction, deleteAction } = ReducerSlice.actions

export default ReducerSlice.reducer;