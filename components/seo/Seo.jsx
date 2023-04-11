import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} || Personal Portfolio Xenia Baranova`}
      </title>
    </Head>
  </>
);

export default Seo;
