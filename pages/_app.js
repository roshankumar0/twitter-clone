import MobileMenu from '../components/MobileMenu';
import Sidebar from '../components/sidebar';
import '../styles/globals.css';
import Head from 'next/head'
import { Provider } from 'react-redux';
import store from '../store/store';
import Initialize from '../components/initialize';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta name="description" content="twitter-clone" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Initialize />
        <div className='overflow-y-scroll  relative'>
          <div className='flex min-h-screen relative '>
            <div className='lg:basis-[26.5%] md:basis-[22.5%] flex md:justify-end relative'>
              <Sidebar />
            </div>
            <div className='flex-1'>
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default MyApp;
