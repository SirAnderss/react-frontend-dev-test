import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'state';
import { RootState } from 'state/reducers';
import ProductDetail from './ProductDetail';

export default function Products() {
  const [products, setProducts] = useState<TProduct[]>([]);

  const { shoppingCart, quantity }: TCart = useSelector(
    (state: RootState) => state.cart
  );

  const dispatch = useDispatch();

  const { addProductToCart, updateProductsInCart, setCartQuantity } =
    bindActionCreators(actionCreators, dispatch);

  const productsCartManager = (product: TProduct) => {
    const cartItemIndex = shoppingCart.findIndex(
      cartItem => cartItem.id === product.id
    );

    if (cartItemIndex === -1) {
      addProductToCart(product, 1);

      return;
    }

    const tempCart = shoppingCart;

    tempCart[cartItemIndex].quantity! += 1;

    updateProductsInCart(tempCart);
  };

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetch('/api/products');

      const { data: productList }: TAPIProdictListResponse =
        await response.json();

      setProducts(productList);
    };

    getAllProducts();

    return () => {
      setProducts([]);
    };
  }, []);

  useEffect(() => {
    setCartQuantity(shoppingCart.length);
  }, [shoppingCart]);

  return (
    <div className='w-full relative pt-8 mx-auto flex flex-col gap-6 lg:w-10/12 lg:flex-row lg:flex-wrap lg:gap-8'>
      {products.length
        ? products.map(product => (
            <ProductDetail
              product={product}
              productsCartManager={productsCartManager}
              key={product.id}
            />
          ))
        : null}
    </div>
  );
}
