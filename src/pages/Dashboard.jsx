import React, { useState } from 'react';
import TextEditor from '../components/TextEditor'

const Dashboard = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const handleSidebarHover = () => {
    setSidebarExpanded(true);
  };

  const handleSidebarLeave = () => {
    setSidebarExpanded(false);
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`h-screen w-16 menu bg-white text-white px-4 flex items-center fixed shadow transition-all duration-300 ${isSidebarExpanded ? 'w-32' : 'w-16'}`}
        onMouseEnter={handleSidebarHover}
        onMouseLeave={handleSidebarLeave}
      >
        <div className="list-reset">
          <div className="my-2 md:my-0">
            <a href="#" className="flex flex-row mx-2 my-8 px-5 py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span className={`w-full inline-block pb-1 md:pb-0 text-sm ${isSidebarExpanded ? 'visible' : 'invisible'}`}>Home</span>
            </a>
          </div>
          <div className="my-2 md:my-0 ">
            <a href="#" className="flex flex-row  mx-2 my-8 px-5 py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>

              <span className={`w-full inline-block pb-1 md:pb-0 text-sm ${isSidebarExpanded ? 'visible' : 'invisible'}`}>Tasks</span>
            </a>
          </div>
          <div className="my-2 md:my-0">
            <a href="#" className="flex flex-row py-1  mx-2 my-8 px-5 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>

              <span className={`w-full inline-block pb-1 md:pb-0 text-sm ${isSidebarExpanded ? 'visible' : 'invisible'}`}>Messages</span>
            </a>
          </div>
        </div>
      </div>

      {/* Dashboard body */}
      <div className="flex-grow">
        <nav>
          <h2>Welcome to the Dashboard</h2>
          <p className='flex justify-end  text-right px-4 gap-4'>
            <button className="btn btn-text text-blue-500  py-2 px-4 rounded-md outline outline-1 outline-blue-500">Preview</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Publish</button>
          </p>
        </nav>

        <TextEditor />
      </div>
    </div>
  );
};

export default Dashboard;
