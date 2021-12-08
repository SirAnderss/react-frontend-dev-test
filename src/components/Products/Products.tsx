import { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail';

export default function Products() {
  const [products, setProducts] = useState<TProduct[]>([]);

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

  return (
    <div className='w-full relative pt-8 mx-auto flex flex-col gap-6 lg:w-10/12 lg:flex-row lg:flex-wrap lg:gap-8'>
      {products.length
        ? products.map(product => (
            <ProductDetail product={product} key={product.id} />
          ))
        : null}
    </div>
  );
}
