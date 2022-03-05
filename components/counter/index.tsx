import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../../features/counter';

export const Counter = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <>
      <h1 className='text-4xl font-black text-center'>Redux Counter example</h1>
      <h1 className='text-2xl font-bold text-center mt-4 mb-6'>
        The current number is: {count}
      </h1>
      <div className='px-5 py-10 bg-purple-500 shadow-lg rounded-sm text-white text-center'>
        
          <div>
            <input
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(Number(e.target.value))}
              type="number"
              className="text-white shadow-lg bg-transparent border-transparent border-2 border-white focus:border-white focus:ring-0 w-40 h-40 rounded-full text-center text-3xl"
            />
          </div>
          <button
            onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
            className="my-5 btn btn-lg bg-white text-purple-500"
          >
            Increment by amount
          </button>
        
        <div className='flex flex-1 flex-auto justify-between mt-3'>
          <button className="btn btn-opac" onClick={() => dispatch(decrement())}>Decrement by 1</button>
          <button className="btn btn-opac" onClick={() => dispatch(increment())}>Increment by 1</button>
        </div>
      </div>
    </>
  );
};
