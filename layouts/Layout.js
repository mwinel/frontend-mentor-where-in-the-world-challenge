import { useTheme } from 'next-themes';
import { SunIcon } from '@heroicons/react/outline';
import { MoonIcon as MoonIconSolid } from '@heroicons/react/solid';
import Link from 'next/link';

export default function Layout({ children }) {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <nav role="navigation" className="bg-white shadow dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <Link href="/">
                            <h2 className="cursor-pointer text-lg font-bold text-gray-800 dark:text-white">
                                Where in the world?
                            </h2>
                        </Link>
                        <button
                            className="flex items-center justify-end"
                            onClick={() =>
                                setTheme(theme === 'dark' ? 'light' : 'dark')
                            }
                        >
                            {theme === 'dark' ? (
                                <>
                                    <SunIcon className="mr-2 h-5 w-5" />
                                    <p className="font-medium">Light Mode</p>
                                </>
                            ) : (
                                <>
                                    <MoonIconSolid className="mr-2 h-5 w-5" />
                                    <p className="font-medium text-gray-800">
                                        Dark Mode
                                    </p>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
            <div className="mx-auto my-6 max-w-7xl px-4 sm:px-4 md:my-10 lg:px-8">
                {children}
            </div>
        </div>
    );
}
