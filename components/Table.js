import React, {useEffect} from 'react';
import {useQuery} from "react-query";
import {getStudents} from "../lib/helper";

const Table = (themes) => {
    const {data} = useQuery("students", getStudents)
    console.log(data)
    return (
        <div className={`${themes.themes?"bg-gray-200":"bg-gray-800"}` + ' mt-5 mb-10 p-10 border-none rounded-lg'}>
            {data.map((student)=>{
                return (
                    <div key={student._id}>{student.name}</div>
                )
            })}
        </div>
    );
};

export default Table;