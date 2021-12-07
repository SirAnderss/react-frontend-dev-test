import Image from 'next/image';
import { AiOutlineClockCircle } from 'react-icons/ai';
import DropDown from './DropDown';

export default function Title() {
  return (
    <div className='w-full relative pt-8 mx-auto text-center flex flex-col items-center justify-between gap-3 text-white lg:w-10/12 lg:flex-row'>
      <div className='flex justify-center gap-2 lg:gap-5'>
        <h1 className='text-3xl text-gray-800 font-semibold'>Restaurants</h1>
        <Image
          src='https://i.postimg.cc/vHyKsXNf/32382hamburger-98925.png'
          alt='Hero'
          width={40}
          height={40}
        />
      </div>
      <div className='max-w-min px-4 py-3 flex items-center gap-2 bg-custom-orange rounded-l-full rounded-r-full'>
        <AiOutlineClockCircle className='text-3xl' />
        <span>Delivery:</span>
        <DropDown />
      </div>
    </div>
  );
}
