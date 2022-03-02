import { CountryCard } from '..';

export default function Countries({ countries }) {
    return (
        <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:grid-cols-4"
        >
            {countries.map((country) => {
                return (
                    <CountryCard key={country.name.common} country={country} />
                );
            })}
        </ul>
    );
}
