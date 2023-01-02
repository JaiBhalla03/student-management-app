import React from 'react';

const Form = (themes) => {
    return (
        <div className={`${themes.themes?"bg-gray-100":"bg-gray-700"}` + ' mt-5 p-10 border-none rounded-lg'}>
            This is the form portion
        </div>
    );
};

export default Form;