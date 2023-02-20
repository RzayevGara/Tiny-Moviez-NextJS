import Head from 'next/head'

export default function PostNotFound() {
    return (
        <section className="main-content not-found">
            <Head>
                <title>My page title</title>
            </Head>
            <p>This page could not be found!</p>
        </section>
    )
  }