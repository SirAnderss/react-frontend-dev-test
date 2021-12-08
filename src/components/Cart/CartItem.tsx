import Image from 'next/image';

type CartItemProps = {
  item: TCartItem;
};
export default function CartItem({ item }: CartItemProps) {
  return (
    <div className='w-full flex gap-2 items-center my-3'>
      <div className='w-16 h-10 relative'>
        <Image
          src={item.image}
          alt={item.name}
          layout='fill'
          className='rounded-xl'
        />
      </div>
      <span className='font-semibold'>{item.amount} X</span>
      <span className='font-semibold w-28'>{item.name}</span>
      <span className='w-4/10'>$ {item.price}</span>
    </div>
  );
}
