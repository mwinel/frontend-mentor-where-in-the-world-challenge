import '../styles/globals.css';
import Router from "next/router";
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { ThemeProvider } from 'next-themes';

// Binding events for loading indicator.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
