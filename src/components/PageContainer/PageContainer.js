import Head from "next/head";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const PageContainer = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Vive sin pedos de varo"></meta>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageContainer;
