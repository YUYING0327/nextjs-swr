import axios from "axios";
import { SWRConfig } from "swr";
import Head from "next/head";
import Header from "../components/Header";
import "../styles/globals.css";

axios.defaults.baseURL = "http://localhost:5000";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axios(url).then((res) => res.data),
        dedupingInterval: 10000,
      }}
    >
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css'
          integrity='sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
