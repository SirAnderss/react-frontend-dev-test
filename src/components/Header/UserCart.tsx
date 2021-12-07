import { AiOutlineUser } from 'react-icons/ai';

export default function UserCart() {
  return (
    <div className='flex h-full items-center gap-4'>
      <AiOutlineUser className='text-2xl text-gray-700 cursor-pointer' />
      <div className='w-8 h-8 grid place-items-center text-lg font-semibold text-gray-700 bg-custom-yellow rounded-xl cursor-pointer lg:w-12 lg:h-12 lg:text-xl'>
        3
      </div>
    </div>
  );
}
