import React from 'react';
import {Button, TextField} from "@mui/material";


const Form = (themes) => {

    return (
        <div className={`${themes.themes?"bg-gray-100":"bg-gray-700"}` + ' mt-5 p-10 border-none rounded-lg'}>
            <h1 className={`${themes.themes?"text-black":"text-white"}` + ' text-3xl text-center mb-10'}>Add Student</h1>
            <form className={'grid lg:grid-cols-2 gap-10'}>
                <TextField
                    id="outlined-textarea"
                    label="Name"
                    color={'primary'}
                />
                <TextField
                    id="outlined-textarea"
                    label="Age"
                    type={'number'}
                    color={'primary'}
                />
                <TextField
                    id="outlined-textarea"
                    label="Phone Number"
                    type={'number'}
                    color={'primary'}
                />
                <TextField
                    id="outlined-textarea"
                    label="Email"
                    color={'primary'}
                />
                <TextField
                    id="outlined-textarea"
                    label="Address"
                    color={'primary'}
                />
                <TextField
                    id="outlined-textarea"
                    label="Image-Url"
                    color={'primary'}
                />
                <Button
                    className={'grid col-span-2 w-40 bg-blue-600 m-auto'}
                    variant={'contained'}
                >Submit</Button>
            </form>

        </div>
    );
};

export default Form;