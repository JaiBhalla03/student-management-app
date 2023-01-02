import React from 'react';

const Table = (themes) => {
    return (
        <div className={`${themes.themes?"bg-gray-200":"bg-gray-800"}` + ' mt-5 mb-10 p-10 border-none rounded-lg'}>
            This is the table part
        </div>
    );
};

export default Table;