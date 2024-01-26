import React from 'react'
// import SidebarLinks from './SidebarLinks'
import { Link } from 'react-router-dom';
import { List } from '@material-tailwind/react';

const Sidebar = () => {
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



  function checkParent(t, elm) {
    while (t.parentNode) {
      if (t == elm) {
        return true;
      }
      t = t.parentNode;
    }
    return false;
  }
  return (
    <div>
      <div id="sidebar" className="h-screen w-16 menu bg-white hover:w-[150px] hover:shadow-md text-dark px-4  transition ease-in-out z-999 duration-300 items-center nunito static fixed shadow">
        <List className='text-dark'>
          {sidebarItems.map((item) => (
            <a href={item.link} className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
              <i className="fas fa-home fa-fw mr-3" /><span className="w-full inline-block pb-1 md:pb-0 text-sm">{item.name}</span>
            </a>
          ))}
        </List>

        {/* {sidebarItems.map((item)=>(
    <Link href={item.link} className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
      <i className="fas fa-home fa-fw mr-3" /><span className="w-full inline-block pb-1 md:pb-0 text-sm">{item.name}</span>
    </Link>
  ))} */}

        {/* <ul className="list-reset ">
    <li className="my-2 md:my-0">
      <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
        <i className="fas fa-home fa-fw mr-3" /><span className="opacity-0 absolute transition ease-in-out duration-100 hover:opacity-100 w-full inline-block pb-1 md:pb-0 text-sm">Home</span>
      </a>
    </li>
    <li className="my-2 md:my-0 ">
      <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
        <i className="fas fa-tasks fa-fw mr-3" /><span className="w-full inline-block pb-1 md:pb-0 text-sm">Tasks</span>
      </a>
    </li>
    <li className="my-2 md:my-0">
      <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
        <i className="fa fa-envelope fa-fw mr-3" /><span className="w-full inline-block pb-1 md:pb-0 text-sm">Messages</span>
      </a>
    </li>
    <li className="my-2 md:my-0">
      <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
        <i className="fas fa-chart-area fa-fw mr-3 text-indigo-400" /><span className="w-full inline-block pb-1 md:pb-0 text-sm">Analytics</span>
      </a>
    </li>
    <li className="my-2 md:my-0">
      <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
        <i className="fa fa-wallet fa-fw mr-3" /><span className="w-full inline-block pb-1 md:pb-0 text-sm">Payments</span>
      </a>
    </li>
  </ul> */}
      </div>

    </div>
  )
}

export default Sidebar