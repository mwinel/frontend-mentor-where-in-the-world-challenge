import { useRouter } from 'next/router';
import { Layout } from '../layouts';
import { BackButton, CountryDetails } from '../components';

export default function Country(props) {
    const router = useRouter();

    if (router.isFallback) {
        return <Layout>Loading...</Layout>;
    }

    return (
        <Layout>
            <div className="mb-10">
                <BackButton />
            </div>
            <div className="mb-10">
                <CountryDetails country={props.data} />
            </div>
        </Layout>
    );
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await res.json();

    return {
        fallback: false,
        paths: data.map((country) => ({
            params: { name: country.name.common },
        })),
    };
};

export const getStaticProps = async (context) => {
    const res = await fetch(
        `https://restcountries.com/v3.1/name/${context.params.name}?fullText=true`
    );
    const data = await res.json();

    return { props: { data }, revalidate: 3600 };
};
