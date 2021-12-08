import { useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'state';
import { RootState } from 'state/reducers';
import SocialButtons from './SocialButtons';

export default function UserCart() {
  const [active, setActive] = useState<boolean>(false);

  const { quantity }: TCart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  const { openCart } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <div className='relative'>
        <AiOutlineUser
          className='text-2xl text-gray-700 cursor-pointer'
          onClick={() => setActive(!active)}
        />
        <SocialButtons active={active} setActive={setActive} />
      </div>
      <div
        className={`w-8 h-8 grid place-items-center text-lg font-semibold text-gray-700 rounded-xl lg:w-12 lg:h-12 lg:text-xl ${
          quantity! > 0 ? 'cursor-pointer bg-custom-yellow ' : 'bg-gray-300'
        }`}
        onClick={() => quantity! > 0 && openCart(true)}
      >
        {quantity! > 0 ? (
          quantity
        ) : (
          <AiOutlineShoppingCart className='text-xl' />
        )}
      </div>
    </>
  );
}
