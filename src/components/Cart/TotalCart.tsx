import { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'state';

export default function TotalCart({ shoppingCart }: TCart) {
  const [people, setPeople] = useState<number>(1);

  const dispatch = useDispatch();

  const { updateProductsInCart } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const updateProductsQuantitiesInCart = () => {
      const tempCart = shoppingCart.map(product => {
        product.quantity = people;

        return product;
      });

      updateProductsInCart(tempCart);
    };

    updateProductsQuantitiesInCart();
  }, [people]);

  return (
    <div className='w-full h-16 mb-8 justify-between items-center relative'>
      <div className='w-24 h-full text-center'>
        Persons
        <div className='w-24 h-10 px-2 flex justify-between items-center relative border-2 rounded-lg text-gray-700 text-xl'>
          <AiOutlineMinus
            className={people > 1 ? 'cursor-pointer' : ''}
            onClick={() => people > 1 && setPeople(people - 1)}
          />
          {people}
          <AiOutlinePlus
            className='cursor-pointer'
            onClick={() => setPeople(people + 1)}
          />
        </div>
      </div>
      <div className='bg-custom-yellow absolute top-0 -right-6 py-6 px-6 rounded-l-2xl font-bold opacity-80 cursor-pointer transition-opacity duration-200 hover:opacity-100'>
        Checkout <HiOutlineArrowNarrowRight className='inline' />
      </div>
    </div>
  );
}
