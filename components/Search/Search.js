import { SearchIcon } from '@heroicons/react/outline';

export default function Search() {
    return (
        <div className="w-[400px]">
            <div className="relative mt-1 rounded-md shadow-md">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                    <SearchIcon
                        className="h-5 w-5 text-gray-400 dark:text-white"
                        aria-hidden="true"
                    />
                </div>
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="t block w-full rounded border-white py-3 pl-14 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-800 dark:bg-gray-800 placeholder:dark:text-white"
                    placeholder="Search for a country..."
                />
            </div>
        </div>
    );
}
