import Image from 'next/image';
import { BiTrash } from 'react-icons/bi';

type CartItemProps = {
  item: TCartItem;
  removeProductsFromCart: (productId: TProductId) => void;
};
export default function CartItem({
  item,
  removeProductsFromCart,
}: CartItemProps) {
  return (
    <div className='w-full flex gap-2 items-center my-3 relative'>
      <BiTrash
        className='text-red-500 cursor-pointer text-xl'
        onClick={() => removeProductsFromCart(item.id)}
      />
      <div className='w-16 h-10 relative'>
        <Image
          src={
            item.image ||
            'https://images.pexels.com/photos/2566040/pexels-photo-2566040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440'
          }
          alt={item.name}
          layout='fill'
          className='rounded-xl'
        />
      </div>
      <span className='font-semibold'>{item.quantity} X</span>
      <span className='font-semibold w-28'>{item.name}</span>
      <span className='w-4/10'>
        $ {(item.price * item.quantity!).toFixed(2)}
      </span>
    </div>
  );
}
