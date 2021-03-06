import Image from 'next/image';
import { AiOutlineStar } from 'react-icons/ai';
import textReducer from 'resources/textReducer';
import styles from './ProductDetail.module.css';

type ProductDetailProps = {
  product: TProduct;
  productsCartManager: (product: TProduct) => void;
};

export default function ProductDetail({
  product,
  productsCartManager,
}: ProductDetailProps) {
  return (
    <div
      className='w-72 mx-auto text-gray-800 cursor-pointer transform duration-150 hover:scale-105 hover:opacity-90'
      onClick={() => productsCartManager(product)}
    >
      <div className={`w-full h-32 relative ${styles['product-card']}`}>
        <Image
          src={
            product.image ||
            'https://images.pexels.com/photos/2566040/pexels-photo-2566040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440'
          }
          alt={product.name}
          layout='fill'
          className='rounded-xl'
        />
        <div className='absolute bottom-0 left-0 px-3 py-2 bg-gray-200 font-semibold rounded-xl'>
          <strong>{product.time}</strong> min
        </div>
      </div>
      <div className='pt-2'>
        <h2 className='text-2xl font-semibold mt-2 mb-1'>
          {textReducer(product.name, 23)}
        </h2>
        <div className='flex items-center gap-2'>
          <AiOutlineStar className='text-xl' />
          {product.qualification?.toFixed(1)}
          {[...Array(2)].map((_, i) => (
            <div key={i}>
              <span>Deli</span>
              ▪️
            </div>
          ))}
          {`$ ${product.price.toFixed(2)}`}
        </div>
      </div>
    </div>
  );
}
