import Link from 'next/link';
import Image from 'next/image';

export default function CountryCard({ country }) {
    return (
        <Link
            href={{
                pathname: '/[name]',
                query: {
                    name: country.name.common.toLowerCase(),
                },
            }}
        >
            <li
                key={country.name.common}
                className="flex flex-col col-span-1 transition duration-150 ease-in-out bg-white rounded-md shadow cursor-pointer hover:bg-gray-50 hover:shadow-lg dark:bg-gray-800"
            >
                <Image
                    className="object-cover object-center rounded-tl-md rounded-tr-md"
                    src={country.flags.svg}
                    alt={country.name.common + ' flag'}
                    height={200}
                    width={320}
                />
                <div className="p-5">
                    <p className="text-lg font-bold text-gray-800 dark:text-white">
                        {country.name.common}
                    </p>
                    <div className="mt-2">
                        <p className="text-sm text-gray-700 dark:text-gray-200">
                            <span className="font-medium">Population:</span>{' '}
                            {country.population.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-200">
                            <span className="font-medium">Region:</span>{' '}
                            {country.region}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-200">
                            <span className="font-medium">Capital:</span>{' '}
                            {country.capital}
                        </p>
                    </div>
                </div>
            </li>
        </Link>
    );
}
