import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Layout } from '../layouts';
import { BackButton, CountryDetails } from '../components';
import fetcher from '../utils/fetcher';

export default function Country() {
    const router = useRouter();
    const { name } = router.query;

    const { data, error } = useSWR(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`,
        fetcher
    );

    return (
        <Layout>
            {error ? (
                <div>Something went wrong! failed to load</div>
            ) : (
                <>
                    <div className="mb-10">
                        <BackButton />
                    </div>
                    <div className="mb-10">
                        {!data ? (
                            <div>loading...</div>
                        ) : (
                            <CountryDetails country={data} />
                        )}
                    </div>
                </>
            )}
        </Layout>
    );
}
