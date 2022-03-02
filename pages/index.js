import { useState } from 'react';
import { Layout } from '../layouts';
import { Search, Dropdown, Countries } from '../components';

const regions = [
    { id: 1, name: 'Africa' },
    { id: 2, name: 'America' },
    { id: 3, name: 'Asia' },
    { id: 4, name: 'Europe' },
    { id: 5, name: 'Oceania' },
];

export default function Home(props) {
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState(null);

    const filteredCountries = props.data.filter((item) => {
        return item.name.common.toLowerCase().includes(query.toLowerCase());
    });

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    return (
        <Layout>
            <div className="mb-10 flex items-center justify-between">
                <Search query={query} onQueryChange={handleSearch} />
                <Dropdown
                    data={regions}
                    selected={selected}
                    setSelected={setSelected}
                    placeholder="Filter by Region"
                />
            </div>
            <div className="mb-10">
                <Countries countries={filteredCountries} />
            </div>
        </Layout>
    );
}

export const getStaticProps = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await res.json();

    return { props: { data }, revalidate: 3600 };
};
