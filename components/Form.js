import React, {useReducer} from 'react';
import {Button, TextField} from "@mui/material";
import {useMutation, useQueryClient} from "react-query";
import {getStudents, postStudent} from "../lib/helper";
import {log} from "util";

const reducer = (state, event)=>{
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const Form = (themes) => {
    const [formData, setFormData] = useReducer(reducer, {})
    const queryClient = useQueryClient()
    const addMutation = useMutation(postStudent, {
        onSuccess:()=>{
            queryClient.prefetchQuery('students', getStudents)
        }
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(Object.keys(formData).length === 0){
            return console.log('Form does not data')
        }
        let {name, age, email, phoneNumber, address, imageUrl} = formData
        const model = {
            name, age, phoneNumber, email, address, imageUrl
        }
        addMutation.mutate(model)
        console.log(formData)
    }
    if(addMutation.isLoading){
        return <div>Loading.....</div>
    }
    if(addMutation.isSuccess){
        return <div>Student added!!</div>
    }
    if(addMutation.isError){
        return <div>{addMutation.error}</div>
    }
    return (
        <div className={`${themes.themes?"bg-gray-100":"bg-gray-700"}` + ' mt-5 p-10 border-none rounded-lg'}>
            <h1 className={`${themes.themes?"text-black":"text-white"}` + ' text-3xl text-center mb-10'}>Add Student</h1>
            <form className={'grid lg:grid-cols-2 gap-10'} onSubmit={handleSubmit}>
                <TextField
                    id="outlined-textarea"
                    label="Name"
                    color={'primary'}
                    name={'name'}
                    onChange={setFormData}
                />
                <TextField
                    id="outlined-textarea"
                    label="Age"
                    type={'number'}
                    color={'primary'}
                    name={'age'}
                    onChange={setFormData}
                />
                <TextField
                    id="outlined-textarea"
                    label="Phone Number"
                    type={'number'}
                    color={'primary'}
                    name={'phoneNumber'}
                    onChange={setFormData}
                />
                <TextField
                    id="outlined-textarea"
                    label="Email"
                    color={'primary'}
                    name={'email'}
                    onChange={setFormData}
                />
                <TextField
                    id="outlined-textarea"
                    label="Address"
                    color={'primary'}
                    name={'address'}
                    onChange={setFormData}
                />
                <TextField
                    id="outlined-textarea"
                    label="Image-Url"
                    color={'primary'}
                    name={'imageUrl'}
                    onChange={setFormData}
                />
                <Button
                    className={'grid lg:col-span-2 w-40 bg-blue-600 m-auto'}
                    variant={'contained'}
                    type={'submit'}
                >Submit</Button>
            </form>
        </div>
    );
};

export default Form;