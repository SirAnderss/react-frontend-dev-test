type WarningProps = {
  check: boolean;
  message: string;
  setCheck: (check: boolean) => void;
  setModal: (modal: boolean) => void;
};

export default function Warning({
  check,
  message,
  setCheck,
  setModal,
}: WarningProps) {
  return (
    <div className='w-full h-screen fixed grid place-items-center top-0 left-0'>
      <div
        className='w-full h-screen absolute bg-gray-500 opacity-30 cursor-pointer -z-1'
        onClick={() => setModal(false)}
      />
      <div className='w-72 h-40 px-4 grid place-content-center gap-4 text-center bg-white rounded-lg'>
        {message}
        <div className='w-full flex justify-center gap-4 text-white'>
          <button
            className='w-16 py-2 font-bold bg-red-500'
            onClick={() => setCheck(true)}
          >
            Yes
          </button>
          <button
            className='w-16 py-2 font-bold bg-green-600'
            onClick={() => setModal(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
