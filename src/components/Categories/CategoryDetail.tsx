import Image from 'next/image';

type CategoryDetailProps = {
  category: TCategory;
  currentId: number;
};

export default function CategoryDetail({
  category,
  currentId,
}: CategoryDetailProps) {
  return (
    <div className='w-20 h-32 mx-2 py-3 relative text-center font-semibold'>
      <div
        className={`absolute w-full h-full top-0 left-0 rounded-t-full rounded-b-full -z-1 ${
          currentId === category.id ? 'bg-custom-yellow' : 'bg-white'
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
