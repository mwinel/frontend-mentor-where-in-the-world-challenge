import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="robots" content="follow, index" />
                <meta content="Where in the world?" name="description" />
                <link
                    rel="preload"
                    href="https://restcountries.com/v3.1/all"
                    as="fetch"
                    crossOrigin="anonymous"
                ></link>
            </Head>
            <body className="bg-gray-50 font-nunito dark:bg-gray-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
