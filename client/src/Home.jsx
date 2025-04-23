import { useEffect, useState } from 'react';
import {useDebounce} from 'use-debounce';

export default function Home() {

  const [requestLog, setRequestLog] = useState([])

  const [searchQuery, setSearchQuery] = useState("");
  const [searchParam] = useDebounce(searchQuery, 600);

  useEffect(()=>{
    setRequestLog((v) => [...v, searchParam])
  }, [searchParam]);

  return (
    <main className="p-4 space-y-2 dark:bg-gray-500 flex flex-col items-center gap-1 min-h-screen">
      <label
        htmlFor="search"
        className="block text-md font-semibold text-gray-700 dark:text-gray-200"
      >
        Search
      </label>
      <input
        type="search"
        id="search"
        className="block w-full p-2 max-w-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
      />

      <h2 className="mt-6 text-lg font-bold text-gray-700 dark:text-gray-200">Request Simulator</h2>
      <ol className="flex flex-col gap-1 list-decimal">
        {requestLog.map((item, index) => (
          <li key={index} className="text-gray-800 dark:text-gray-100 ">
            {item}
          </li>
        ))}
      </ol>
    </main>
  );
}
