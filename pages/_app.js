import Layout from "@/components/layout/layout";
import "./index.sass";

function MyApp({ Component, pageProps}) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp