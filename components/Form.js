import React, {useReducer} from 'react';
import {Button, TextField} from "@mui/material";

const reducer = (state, event)=>{
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

const Form = (themes) => {
    const [formData, setFormData] = useReducer(reducer, {})

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
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
                    name={'phone-number'}
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
                    name={'image-url'}
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