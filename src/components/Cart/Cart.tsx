import UserCart from 'components/Header/UserCart';
import Link from 'next/link';
import { AiOutlineClockCircle } from 'react-icons/ai';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import Delivery from './Delivery';
import TotalCart from './TotalCart';

type CartProps = {
  active: boolean;
};

export default function Cart({ active }: CartProps) {
  return (
    <div
      className={`w-full h-screen py-6 fixed top-0 right-0 overflow-y-auto lg:w-96  ${
        active ? styles.active : 'hidden'
      }`}
    >
      <div className='w-full pr-8 flex items-center justify-end gap-4'>
        <UserCart />
      </div>
      <div className='w-full h-auto mx-auto px-6 flex flex-col items-center justify-center gap-6'>
        <h2 className='text-xl font-semibold'>My 😎 Order</h2>
        <div className='w-full h-32 px-6 py-6 flex justify-between bg-custom-purple text-white rounded-xl'>
          <div className='flex flex-col justify-between'>
            <span>625 St Mark Ave</span>
            <div className='flex items-center gap-4'>
              <AiOutlineClockCircle className='p-1.5 text-4xl bg-black text-custom-yellow rounded-xl cursor-pointer' />
              35 min
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <Link href='/'>
              <a className='text-custom-yellow font-semibold text-right'>
                Edit
              </a>
            </Link>
            <Link href='/'>
              <a className='pb-1.5 text-custom-yellow font-semibold text-right'>
                Choose time
              </a>
            </Link>
          </div>
        </div>
        <div className='overflow-y-auto'>
          {[...Array(6)].map((_, index) => (
            <CartItem
              item={{
                id: index,
                name: 'Sándwich servido en la tabla de cortar',
                price: 999.99,
                amount: 1,
                image:
                  'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440',
              }}
              key={index}
            />
          ))}
        </div>
        <Delivery />
        <div className='w-full mt-8 flex justify-between text-2xl'>
          Total:
          <span className='font-bold text-gray-800'>$999.99</span>
        </div>
        <hr className='w-full border border-gray-300' />
        <TotalCart />
      </div>
    </div>
  );
}
