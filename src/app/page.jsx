import Fonda from "./Fonda";
import Head from 'next/head';

export default function Home() {
  return (
    <>
    	<Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Fonda />
      <footer>
          <p>made with ❤️ by <a href="https://github.com/Maizo21">Maizo21</a></p>
        </footer>
    </>
  );
}
