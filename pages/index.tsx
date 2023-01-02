import Head from 'next/head'
import Table from '../components/Table'
import Form from '../components/Form'
import {Button, Switch, useStepContext} from "@mui/material";
import {AiOutlineUserAdd} from 'react-icons/ai'
import {useState} from "react";

export default function Home() {
    const [theme, setTheme] = useState(true);
    const [visible, setVisible] = useState(false);

    const handleChange = ()=>{
        setTheme(current=>!current)
    }

    const handleClick = ()=>{
        setVisible(current=>!current)
    }

  return (
    <div className={`${theme?"bg-white h-screen":"bg-gray-900 h-screen"}`}>
      <Head>
        <title>Student Management App</title>
      </Head>
      <main className='m-0 p-10'>
          <h1 className={`${theme?"text-black":"text-white"}` + ' text-5xl font-light flex justify-center'}>Student Management Application</h1>
          <div>
              <div className={`${theme?"bg-gray-200":"bg-gray-800"}` + ' mt-5 mb-10 p-10 border-none rounded-lg'}>
                  <div className={'flex justify-between'}>
                      <Button
                          variant={'contained'}
                          color={'success'}
                          className={'bg-green-700'}
                          onClick={handleClick}
                      >Add Student <AiOutlineUserAdd size={20}/> </Button>
                      <div className={`${theme?"text-black":"text-white"}` + ' font-light text-lg'}>
                          Change Theme
                          <Switch
                              color={'default'}
                              onChange={handleChange}
                          />
                      </div>
                  </div>
                  {visible && (<Form themes={theme}/>)}
              </div>
              <Table themes={theme}/>
          </div>
      </main>
    </div>
  )
}
