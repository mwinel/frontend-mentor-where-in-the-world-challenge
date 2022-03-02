import { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { Layout } from '../layouts';
import { Search, Dropdown, Countries } from '../components';

const regions = [
    { id: 1, name: 'Africa' },
    { id: 2, name: 'Americas' },
    { id: 3, name: 'Asia' },
    { id: 4, name: 'Europe' },
    { id: 5, name: 'Oceania' },
];

export default function Home(props) {
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState(null);

    const filteredCountries = props.data
        .filter((item) => {
            return item.name.common.toLowerCase().includes(query.toLowerCase());
        })
        .filter((item) => {
            if (!selected || (selected && selected.name === item.region)) {
                return item;
            }
        });

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    return (
        <Layout>
            <div className="md:item-center mb-6 flex flex-col space-y-2 md:mb-10 md:flex-row md:justify-between">
                <Search query={query} onQueryChange={handleSearch} />
                <div className="flex flex-col-reverse md:flex-row">
                    {selected && (
                        <button
                            className="hover:opacity-98 dark mt-2 flex items-center justify-center rounded bg-gray-100 px-4 py-3 shadow-md hover:bg-gray-50 dark:bg-gray-800 md:mt-0 md:mr-3"
                            onClick={() => setSelected(null)}
                        >
                            <p className="font-medium">Clear Filters</p>
                            <XIcon
                                className="ml-3 h-5 w-5"
                                aria-hidden="true"
                            />
                        </button>
                    )}
                    <Dropdown
                        data={regions}
                        selected={selected}
                        setSelected={setSelected}
                        placeholder="Filter by Region"
                    />
                </div>
            </div>
            <div className="mb-10">
                {filteredCountries.length ? (
                    <Countries countries={filteredCountries} />
                ) : (
                    <div>
                        <p className="text-lg italic">
                            No countries with{' '}
                            <span className="font-medium">"{query}"</span>{' '}
                            found.
                        </p>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export const getStaticProps = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await res.json();

    return { props: { data }, revalidate: 3600 };
};
