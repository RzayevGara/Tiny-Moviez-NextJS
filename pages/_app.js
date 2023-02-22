import Layout from "@/components/layout/layout";
import "./index.sass";
import React, {useEffect} from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps}) {
  const router = useRouter();
  const searchParams = router.query
  const pathname = router.pathname

  useEffect(()=>{
    if(pathname === '/404' || pathname === '/' || pathname ==='popular' || pathname ==='top-rated'){
      if(!searchParams.category){
        const params = new URLSearchParams(searchParams)
        if (pathname == "/404" || pathname == "/"){
          params.set('category', "movie")
        }else{
          params.set('category', "movie")
          params.set('page', 1)
        }
        router.push(`${pathname==="/404"? '/' : pathname}?${params}`)
      }
    }
  }, [pathname, router, searchParams])

  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp