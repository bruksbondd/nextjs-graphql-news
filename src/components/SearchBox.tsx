'use client';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function SearchBox() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?term=${input}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className='max-width-6xl mx-auto flex justify-between items-center px-5'
    >
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Search Keywords...'
        className='flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400'
      />
      <button
        type='submit'
        disabled={!input}
        className='text-gray-950 disabled:text-gray-400'
      >
        Search
      </button>
    </form>
  );
}
