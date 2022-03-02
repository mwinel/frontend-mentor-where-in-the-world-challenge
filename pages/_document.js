import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en" title="Where in the world?">
            <Head>
                <meta name="robots" content="follow, index" />
                <meta content="Where in the world?" name="description" />
            </Head>
            <body className="bg-gray-50 font-nunito dark:bg-gray-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
