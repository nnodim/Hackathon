import { Disclosure } from '@headlessui/react'

export default function Example() {
  return (
    <div className="w-full px-4 pt-16">
        {/* <div className={` ${isSidebarExpanded ? 'visible' : 'invisible'} flex flex-col px-2 py-1 justify-center items-center gap-10`}> */}
            <Disclosure >
            {({ open }) => (
                <>
                <Disclosure.Button className="flex gap-8 rounded-lg px-1 py-1 text-left text-sm font-medium text-grey-500 hover:text-black">
                    <div className='gap-1 flex flex-row justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-6 h-6'>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                        </svg>
                        <span>PUBLISHED</span>
                        <span>({})</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${
                        open ? 'rotate-180 transform' : ''
                    } h-5 w-5  text-grey-700`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="px-1 pb-2 pt-2 text-sm text-gray-500">
                    You have not published anything.
                </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        {/* </div> */}
    </div>
  )
}
