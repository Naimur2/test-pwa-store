import Layout from "@/components/layouts";
import CartContextProvider from "@/context/CartContextProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CartContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CartContextProvider>
    );
}
