import Head from 'next/head'
import Table from '../components/Table'
import Form from '../components/Form'

export default function Home() {
  return (
    <div className={'bg-gray-900 h-screen'}>
      <Head>
        <title>Student Management App</title>
      </Head>
      <main className='m-0 p-10'>
          <h1 className={'text-5xl font-light text-white flex justify-center'}>Student Management Application</h1>
          <div>
              <div className={'flex justify-between mt-5 mb-10 p-10 bg-gray-800 border-none rounded-lg'}>
                  <button>Add Student</button>
                  <div>This area will be used to change the theme</div>
              </div>
              <Table/>
              <Form/>
          </div>
      </main>
    </div>
  )
}
