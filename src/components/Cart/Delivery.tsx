import { MdOutlineDeliveryDining } from 'react-icons/md';

export default function Delivery() {
  return (
    <div className='w-full flex gap-2 items-center justify-between'>
      <div className='w-16 h-10 relative grid place-items-center'>
        <div className='absolute w-full h-full bg-custom-yellow rounded-xl opacity-50 -z-1' />
        <MdOutlineDeliveryDining className='text-2xl text-yellow-700' />
      </div>
      <span className='font-semibold w-28'>Delivery</span>
      <span className='w-4/10'>$ 0.00</span>
    </div>
  );
}
