import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

export default function DropDown() {
  const [delivery, setDelivery] = useState('Now');

  return (
    <div className=''>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white  rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            {delivery}
            <BiChevronDown
              className='w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-3 py-1'>
              <Menu.Item>
                <div
                  className='w-full px-2 py-2 text-gray-900 border-b cursor-pointer relative z-1'
                  onClick={() => setDelivery('Now')}
                >
                  Now
                </div>
              </Menu.Item>
              <Menu.Item>
                <div
                  className='w-full px-2 py-2 text-gray-900 cursor-pointer relative z-1'
                  onClick={() => setDelivery('Later')}
                >
                  Later
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
