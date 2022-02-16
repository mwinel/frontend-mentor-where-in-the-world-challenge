import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@heroicons/react/outline';

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            className="hover:opacity-98 dark flex items-center justify-center rounded bg-white px-6 py-3 shadow-sm hover:bg-gray-50 dark:bg-gray-800"
            onClick={() => router.push('/')}
        >
            <ArrowLeftIcon className="mr-3 h-5 w-5" aria-hidden="true" />{' '}
            <p className="font-medium">Back</p>
        </button>
    );
}
