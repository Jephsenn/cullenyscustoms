import Navbar from './navbar'
import Head from 'next/head'
//import Footer from './footer'

type Props = {
    children: JSX.Element[] | JSX.Element;
    page: string;
};

export default function Layout( props: Props ) {
  return (
    <div>
      <Head>
          <title>Cullenys Customs</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar page={props.page} />
      <div>{props.children}</div>
    </div>
  )
}