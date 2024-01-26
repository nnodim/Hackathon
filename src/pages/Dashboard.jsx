import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom';
import Editor from '../components/Editor'


const Dashboard=()=>{
  const sidebarItems = [
    {
    name: "Task",
    link: "/"
  },
    {
    name: "Message",
    link: "/message"
  },
    {
    name: "Analytics",
    link: "/analytics"
    
  }
]
  return(
    <div>
      <div className='flex relative'>
        <div className=''>
          <Sidebar sidebarItems={sidebarItems} />
        </div>
        <div className='h-screen  overflow-auto w-full flex flex-col justify-between '>
          <Header />
          <div className=''>
            <Outlet />

            <p>just trying thi out</p>
            {/* <Editor /> */}
          </div>
          
        </div>
      </div>
    </div>
  )
}
export default Dashboard