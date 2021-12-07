import CategoryDetail from './CategoryDetail';

export default function Categories() {
  return (
    <div className='w-full relative pt-8 mx-auto lg:w-10/12 lg:flex'>
      {[...Array(8)].map((_, i) => (
        <CategoryDetail
          key={i}
          category={{
            id: 2,
            name: 'Pizza',
            icon: '599995.png',
          }}
          currentId={2}
        />
      ))}
    </div>
  );
}
