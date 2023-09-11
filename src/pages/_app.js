import MainLayout from "@/components/MainLayout";
import "@/styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Tutorial</title>
            </Head>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    );
};

export default App;
