
// import React from 'react';

// const App = () => {



//   const sidebarItems = [
//     {
//       name: "Task",
//       link: "/"
//     },
//     {
//       name: "Message",
//       link: "/message"
//     },
//     {
//       name: "Analytics",
//       link: "/analytics"

//     }
//   ]


//   <link
//   rel="stylesheet"
//   href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
//   integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
//   crossOrigin="anonymous"
// />

// <style>
//   {`
//     .nunito {
//       font-family: 'nunito', font-sans;
//     }
    
//     .border-b-1 {
//       border-bottom-width: 1px;
//     }
    
//     .border-l-1 {
//       border-left-width: 1px;
//     }
    
//     .hover\\:border-none:hover {
//       border-style: none;
//     }
    
//     #sidebar {
//       transition: ease-in-out all .3s;
//       z-index: 9999;
//     }
    
//     #sidebar span {
//       opacity: 0;
//       position: absolute;
//       transition: ease-in-out all .1s;
//     }
    
//     #sidebar:hover {
//       width: 150px;
//       box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//       /*shadow-2xl*/
//     }
    
//     #sidebar:hover span {
//       opacity: 1;
//     }
//   `}
// </style>








//   return (

      

//       <div className="flex h-screen bg-gray-100 font-sans w-screen">
//         {/* Sidebar */}
//         <div
//           id="sidebar"
//           className="h-screen w-20 bg-white text-white px-4 flex items-center nunito fixed shadow"
//         >
//           <div className="list-reset ">
//             {/* <li className="my-2 md:my-0">
//               <a
//                 href="#"
//                 className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
//               >
//                 <i className="fas fa-home fa-fw mr-3"></i>
//                 <span className="w-full inline-block pb-1 md:pb-0 text-sm">Home</span>
//               </a>
//             </li>
//             <li className="my-2 md:my-0 ">
//               <a
//                 href="#"
//                 className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
//               >
//                 <i className="fas fa-tasks fa-fw mr-3"></i>
//                 <span className="w-full inline-block pb-1 md:pb-0 text-sm">Tasks</span>
//               </a>
//             </li>
//             <li className="my-2 md:my-0">
//               <a
//                 href="#"
//                 className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
//               >
//                 <i className="fa fa-envelope fa-fw mr-3"></i>
//                 <span className="w-full inline-block pb-1 md:pb-0 text-sm">Messages</span>
//               </a>
//             </li>
//             <li className="my-2 md:my-0">
//               <a
//                 href="#"
//                 className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
//               >
//                 <i className="fas fa-chart-area fa-fw mr-3 text-indigo-400"></i>
//                 <span className="w-full inline-block pb-1 md:pb-0 text-sm">Analytics</span>
//               </a>
//             </li>
//             <li className="my-2 md:my-0">
//               <a
//                 href="#"
//                 className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
//               >
//                 <i className="fa fa-wallet fa-fw mr-3"></i>
//                 <span className="w-full inline-block pb-1 md:pb-0 text-sm">Payments</span>
//               </a>
//             </li> */}
//             {sidebarItems.map((item)=>(
//                 <a href={item.link} key={item.name} className="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
//                   <i className="fas fa-home fa-fw mr-3" /><span className="w-full inline-block pb-1 md:pb-0 text-sm">{item.name}</span>
//                 </a>
//               ))}





//           </div>
//         </div>

//         <div className="w-screen fixed pl-32">
//           <nav className='text-3xl   flex flex-row'>
//             <div>this is a nav item</div>
//             <div>this is a nav item</div>
//             <div>this is a nav item</div>
//             <div>this is a nav item</div>
           
//           </nav>
//         </div>


//         {/* Include your scripts here */}
//         <script src="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
//         {/* Your Chartist scripts go here */}
//         {/* Your toggle dropdown list script goes here */}
//       </div>
  
//   );
// };

// export default App;








import {  Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  

  return (
    <>
      
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      
    </>
  );
}
export default App

