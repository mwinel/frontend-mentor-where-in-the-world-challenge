import { useState } from 'react';
import useSWR from 'swr';
import { Layout } from '../layouts';
import { Search, Dropdown, Countries } from '../components';
import fetcher from '../utils/fetcher';

const regions = [
    { id: 1, name: 'Africa' },
    { id: 2, name: 'America' },
    { id: 3, name: 'Asia' },
    { id: 4, name: 'Europe' },
    { id: 5, name: 'Oceania' },
];

export default function Home() {
    const [selected, setSelected] = useState(null);

    const { data, error } = useSWR(
        `https://restcountries.com/v3.1/all`,
        fetcher
    );

    return (
        <Layout>
            {error ? (
                <div>Something went wrong! failed to load</div>
            ) : (
                <>
                    <div className="mb-10 flex items-center justify-between">
                        <Search />
                        <Dropdown
                            data={regions}
                            selected={selected}
                            setSelected={setSelected}
                            placeholder="Filter by Region"
                        />
                    </div>
                    <div className="mb-10">
                        {!data ? (
                            <div>loading...</div>
                        ) : (
                            <Countries countries={data} />
                        )}
                    </div>
                </>
            )}
        </Layout>
    );
}
