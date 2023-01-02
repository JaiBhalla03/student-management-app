import React from 'react';

const Form = (themes) => {
    return (
        <div className={`${themes.themes?"bg-gray-200":"bg-gray-800"}` + ' mt-5 mb-10 p-10 border-none rounded-lg'}>
            This is the form portion
        </div>
    );
};

export default Form;