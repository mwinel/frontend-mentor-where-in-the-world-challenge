import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@heroicons/react/outline';

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            className="flex items-center justify-center px-6 py-3 bg-white rounded shadow-sm hover:opacity-98 dark hover:bg-gray-50 dark:bg-gray-800"
            onClick={() => router.back()}
        >
            <ArrowLeftIcon className="w-5 h-5 mr-3" aria-hidden="true" />{' '}
            <p className="font-medium">Back</p>
        </button>
    );
}
