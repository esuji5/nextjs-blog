import Head from 'next/head';
import { BLOG_TITLE, BLOG_URL, DESCRIPTION, HOME_OG_IMAGE_URL } from '@/lib/constants';

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#222" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={ DESCRIPTION }
      />
      <meta property="og:title" content={ BLOG_TITLE } key="og:title" />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:url" content={ BLOG_URL } key="og:url" />
      <meta property="og:site_name" content={ BLOG_TITLE } key="og:site_name" />
      <meta property="og:description" content={ DESCRIPTION } key="og:description" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} key="og:image" />
      {/* <meta name="twitter:card" content="photo" key= /> "twitter:*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@esuji" />
      <meta name="twitter:player" content="@esuji" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Varela+Round&family=Kosugi&family=Kosugi+Maru&display=swap" rel="stylesheet"></link>
    </Head>
  );
}
