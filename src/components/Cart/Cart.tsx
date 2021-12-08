import UserCart from 'components/Header/UserCart';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineClockCircle, AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'state';
import { RootState } from 'state/reducers';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import Delivery from './Delivery';
import TotalCart from './TotalCart';

type CartProps = {
  active: boolean;
};

const delivery = 0.0;

export default function Cart({ active }: CartProps) {
  const [total, setTotal] = useState<number>(0);

  const { shoppingCart }: TCart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  const { openCart, dropProductsFromCart, setCartQuantity } =
    bindActionCreators(actionCreators, dispatch);

  const removeProductsFromCart = (id: TProductId): void => {
    const cartUpdated: TCartItem[] = shoppingCart.filter(
      product => product.id !== id
    );

    dropProductsFromCart(cartUpdated);
  };

  useEffect(() => {
    setCartQuantity(shoppingCart.length);
  }, [shoppingCart]);

  useEffect(() => {
    const getTotalPrice = () => {
      const totalPrice = shoppingCart.reduce((acc, item) => {
        return acc + item.price * item.quantity!;
      }, 0);

      setTotal(totalPrice + delivery);
    };

    shoppingCart.length && getTotalPrice();

    return () => {
      setTotal(0);
    };
  });

  return (
    <div
      className={`w-full h-screen py-6 fixed top-0 right-0 overflow-y-auto lg:w-96  ${
        active ? styles.active : 'hidden'
      }`}
    >
      <div className='w-full px-8 -mt-2 flex items-center justify-between'>
        <AiOutlineClose
          className='text-3xl cursor-pointer'
          onClick={() => openCart(false)}
        />
        <div className='flex items-center gap-4'>
          <UserCart />
        </div>
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
        {shoppingCart.length > 0 ? (
          <>
            <div className='overflow-y-auto'>
              {shoppingCart.map((product, index) => (
                <CartItem
                  item={product}
                  removeProductsFromCart={removeProductsFromCart}
                  key={index}
                />
              ))}
            </div>
            <Delivery price={delivery} />
            <div className='w-full mt-8 flex justify-between text-2xl'>
              Total:
              <span className='font-bold text-gray-800'>
                ${total.toFixed(2)}
              </span>
            </div>
            <hr className='w-full border border-gray-300' />
            <TotalCart shoppingCart={shoppingCart} />
          </>
        ) : (
          'No hay productos en el carrito'
        )}
      </div>
    </div>
  );
}
