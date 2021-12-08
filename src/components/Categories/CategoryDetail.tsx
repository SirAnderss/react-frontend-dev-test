import Image from 'next/image';
import styles from './CategoryDetail.module.css';

type CategoryDetailProps = {
  category: TCategory;
  currentId: number;
  setCurrentId: (currentId: number) => void;
};

export default function CategoryDetail({
  category,
  currentId,
  setCurrentId,
}: CategoryDetailProps) {
  return (
    <div
      className={`w-20 h-32 mx-2 my-6 py-2 relative text-center font-semibold cursor-pointer rounded-t-full rounded-b-full ${
        styles.category
      } ${currentId !== category.id ? 'hover:bg-gray-300' : ''}`}
      onClick={() => setCurrentId(category.id)}
    >
      <div
        className={`absolute w-full h-full top-0 left-0 rounded-t-full rounded-b-full -z-1 ${
          currentId === category.id ? styles.active : 'bg-white'
        }`}
      />
      <div className='w-16 h-16 mx-auto mb-2 grid place-items-center bg-white border-2 rounded-full'>
        <Image
          src={`/assets/icons/${category.icon}`}
          alt='Pineapple'
          width={28}
          height={28}
        />
      </div>
      {category.name}
    </div>
  );
}
