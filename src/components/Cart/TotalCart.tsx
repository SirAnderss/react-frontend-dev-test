import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function TotalCart() {
  return (
    <div className='w-full h-16 mb-8 justify-between items-center relative'>
      <div className='w-24 h-full text-center'>
        Persons
        <div className='w-24 h-10 px-2 flex justify-between items-center border-2 rounded-lg text-gray-700 text-xl'>
          <AiOutlineMinus className='cursor-pointer' /> 1{' '}
          <AiOutlinePlus className='cursor-pointer' />
        </div>
      </div>
      <div className='bg-custom-yellow absolute top-0 -right-6 py-6 px-6 rounded-l-2xl font-bold opacity-80 cursor-pointer transition-opacity duration-200 hover:opacity-100'>
        Checkout <HiOutlineArrowNarrowRight className='inline' />
      </div>
    </div>
  );
}
