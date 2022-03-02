import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';
import classNames from '../../utils/classnames';

export default function Dropdown({ data, selected, setSelected, placeholder }) {
    return (
        <div>
            <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                    <>
                        <div className="relative w-full md:w-64">
                            <Listbox.Button className="relative w-full cursor-default rounded border border-white bg-white py-3 pl-5 pr-12 text-left shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-800 dark:bg-gray-800">
                                <span className="block truncate font-medium text-gray-800 dark:text-white">
                                    {selected ? selected.name : placeholder}
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <ChevronDownIcon
                                        className="h-5 w-5 text-gray-400 dark:text-white"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
                                    {data.map((item) => (
                                        <Listbox.Option
                                            key={item.id}
                                            className={({ active }) =>
                                                classNames(
                                                    active
                                                        ? 'bg-indigo-600 text-white'
                                                        : 'text-gray-700 dark:text-white',
                                                    'relative cursor-default select-none py-2 pl-5 pr-9'
                                                )
                                            }
                                            value={item}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span
                                                        className={classNames(
                                                            selected
                                                                ? 'font-semibold'
                                                                : 'font-normal',
                                                            'block truncate'
                                                        )}
                                                    >
                                                        {item.name}
                                                    </span>

                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active
                                                                    ? 'text-white'
                                                                    : 'text-indigo-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                            )}
                                                        >
                                                            <CheckIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </div>
    );
}
