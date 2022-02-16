import Image from 'next/image';

export default function CountryDetails({ country }) {
    return (
        <>
            {country.map((item) => {
                return (
                    <div
                        key={item.name.common}
                        className="grid items-center grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
                    >
                        <Image
                            className="object-cover object-center"
                            src={item.flags.svg}
                            alt={item.name.common + ' flag'}
                            width={600}
                            height={400}
                        />

                        <div className="">
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                                {item.name.common}
                            </h2>
                            <div className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                                <div className="text-gray-700 dark:text-gray-200">
                                    <p className="leading-7">
                                        <span className="font-medium">
                                            Native Name:
                                        </span>{' '}
                                        {item.name.official}
                                    </p>
                                    <p className="leading-7">
                                        <span className="font-medium">
                                            Population:
                                        </span>{' '}
                                        {item.population.toLocaleString()}
                                    </p>
                                    <p className="leading-7">
                                        <span className="font-medium">
                                            Region:
                                        </span>{' '}
                                        {item.region}
                                    </p>
                                    <p className="leading-7">
                                        <span className="font-medium">
                                            Sub Region:
                                        </span>{' '}
                                        {item.subregion}
                                    </p>
                                    <p className="leading-7">
                                        <span className="font-medium">
                                            Capital:
                                        </span>{' '}
                                        {item.capital}
                                    </p>
                                </div>
                                <div className="text-gray-700 dark:text-gray-200">
                                    <p className="leading-7">
                                        <span className="font-medium">
                                            Top Level Domain:
                                        </span>{' '}
                                        {item.tld}
                                    </p>
                                    <p className="leading-7">
                                        <span className="font-medium">
                                            Currencies:
                                        </span>{' '}
                                        {!item.currencies
                                            ? 'N/A'
                                            : Object.values(item.currencies)[0]
                                                  .name}
                                    </p>
                                    <p className="leading-7">
                                        <span className="font-medium">
                                            Languages:
                                        </span>{' '}
                                        {!item.languages
                                            ? 'N/A'
                                            : Object.values(item.languages).map(
                                                  (language) => (
                                                      <span
                                                          key={language}
                                                          className="pr-2"
                                                      >
                                                          {language}
                                                      </span>
                                                  )
                                              )}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="leading-7 text-gray-700 dark:text-gray-200">
                                    <span className="mr-3 font-medium">
                                        Border Countries:
                                    </span>{' '}
                                    {!item.borders
                                        ? 'N/A'
                                        : item.borders.map((border) => (
                                              <span
                                                  key={border}
                                                  className="px-4 py-1 mr-2 text-xs bg-white rounded shadow cursor-pointer dark:bg-gray-800"
                                              >
                                                  {border}
                                              </span>
                                          ))}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
