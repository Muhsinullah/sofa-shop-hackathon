import { Poppins } from '@next/font/google';
import '../styles/globals.css';

// Font Configuration
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap', // Optional for font optimization
});

export default function App({ Component, pageProps }: any) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
