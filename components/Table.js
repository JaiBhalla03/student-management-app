import React, {useEffect} from 'react';
import {useQuery} from "react-query";
import {getStudents} from "../lib/helper";
import {createTheme} from "@mui/material";
import {AiFillInfoCircle, AiTwotoneDelete, AiTwotoneEdit} from "react-icons/ai";

const Table = (themes) => {
    const {data, isLoading, isError, error} = useQuery("students", getStudents)
    console.log(data)
    if(isLoading){
        return <div>Students are loading</div>
    }
    if(isError){
        return <div>Error: {error}</div>
    }
    return (
        <div className={`${themes.themes?"bg-gray-200":"bg-gray-800"}` + ' mt-5 mb-10 p-10 border-none rounded-lg'}>
            <h1 className={`${themes.themes?"":"text-white"}` + ' text-center mb-5 text-3xl font-bold'}>Students</h1>
            <div className={'flex justify-center'}>
                <table className={`${themes.themes?"":"text-white"}` + ' w-3/4 rounded-t-2xl'}>
                    <thead className={'rounded-t-2xl'}>
                    <tr className={`${themes.themes?"bg-gray-400":"bg-gray-700 text-white"}` + ' rounded-t-2xl'}>
                        <th className={'p-2 rounded-tl-2xl'}>
                        <span>
                            Profile
                        </span>
                        </th>
                        <th className={'p-2'}>
                        <span>
                            Name
                        </span>
                        </th>
                        <th className={'p-2'}>
                        <span>
                            Age
                        </span>
                        </th>
                        <th className={'p-2'}>
                        <span>
                            Phone Number
                        </span>
                        </th>
                        <th className={'p-2'}>
                        <span>
                            Email
                        </span>
                        </th>
                        <th className={'p-2 rounded-tr-2xl'}>
                        <span>
                            Action
                        </span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className={`${themes.themes?"":"bg-gray-600"}`}>
                    {data.map((obj, i)=><Tr {...obj} key={i} theme={themes}/>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

const Tr = ({imageUrl, name, age, phoneNumber, email}, theme)=>{
    return(
        <tr>
            <td className={'text-center border-gray-400 border-2'}>
                <span>
                    <img src={imageUrl} alt={''}/>
                </span>
            </td>
            <td className={'text-center p-1 text-lg border-gray-400 border-2'}>
                <span className={''}>
                    {name}
                </span>
            </td>
            <td className={'text-center p-1 text-lg border-gray-400 border-2'}>
                <span className={''}>
                    {age}
                </span>
            </td>
            <td className={'text-center p-1 text-lg border-gray-400 border-2'}>
                <span>
                    {phoneNumber}
                </span>
            </td>
            <td className={'text-center p-1 text-lg border-gray-400 border-2'}>
                <span>
                    {email}
                </span>
            </td>
            <td className={'text-center p-1 text-lg border-gray-400 border-2'}>
                <span className={'flex gap-4 justify-around'}>
                    <AiFillInfoCircle size={24} className={'cursor-pointer hover:scale-125 hover:ease-in transition duration-150'}/>
                    <AiTwotoneDelete size={24} className={'cursor-pointer hover:scale-125 hover:ease-in transition duration-150'}/>
                    <AiTwotoneEdit size={24} className={'cursor-pointer hover:scale-125 hover:ease-in transition duration-150'}/>
                </span>
            </td>
        </tr>
    )
}

export default Table;