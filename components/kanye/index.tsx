import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getKanyeQuote, kanyeQuoteSelector } from '../../features/kanye';

export const Kanye = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(kanyeQuoteSelector);

  return (
    <>
      <h1 className='text-4xl font-black text-center mb-6'>Redux Async example</h1>
      <div className="px-5 py-10 bg-purple-500 text-center text-white shadow-lg rounded-sm mb-10">
        <h1 className='text-2xl font-bold text-center mt-4 mb-6'>Generate random Kanye West quote</h1>
        <div className="mb-7  ">
          {pending && <p>Loading...</p>}
          {data && <p>{`"${data.quote}"`}</p>}
          {error && <p>Oops, something went wrong</p>}
        </div>
        <button className="btn btn-lg bg-white text-purple-500" onClick={() => dispatch(getKanyeQuote())} disabled={pending}>
          Generate Kanye Quote
        </button>
      </div>
    </>
  );
};
