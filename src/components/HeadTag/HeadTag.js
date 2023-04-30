import Head from "next/head";

export default function HeadTag() {
  return (
    <div>
      <Head>
        <title>VODYET</title>
        <meta name="description" content="frontbudget" />
        <link
          href="https://fonts.cdnfonts.com/css/instagram-sans-condensed"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/outfit"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/monesque"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/vodyet_logo.jpg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
    </div>
  );
}
