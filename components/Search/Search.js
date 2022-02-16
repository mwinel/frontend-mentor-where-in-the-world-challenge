import { SearchIcon } from '@heroicons/react/outline';

export default function Search({ query, onQueryChange }) {
    return (
        <div className="w-[400px]">
            <div className="relative mt-1 rounded-md shadow-md">
                <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                    <SearchIcon
                        className="w-5 h-5 text-gray-400 dark:text-white"
                        aria-hidden="true"
                    />
                    <label htmlFor="query" className="sr-only">
                        Search
                    </label>
                </div>
                <input
                    type="text"
                    name="query"
                    id="query"
                    value={query}
                    placeholder="Search for a country..."
                    // onChange={(event) => onQueryChange(event.target.value)}
                    onChange={onQueryChange}
                    className="block w-full py-3 border-white rounded shadow-sm t pl-14 focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-800 dark:bg-gray-800 placeholder:dark:text-white"
                />
            </div>
        </div>
    );
}
