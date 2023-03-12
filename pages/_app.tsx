import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout/Layout";
import { QueryClientProvider } from "react-query";
import { client } from "../PageComponents/React-Query/ReactQuery";
import { ReactQueryDevtools } from "react-query/types/devtools";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
