import Layout from "@/components/layout/layout";
import "./index.sass";
import React, {useEffect} from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps}) {
  const router = useRouter();
  const searchParams = router.query
  const pathname = router.pathname

  console.log(pathname)
  // useEffect(()=>{
  //   if(typeof window !== 'undefined'){
  //     if(window.location.href = 'http://localhost:3000'){
  //       console.log('test')
  //       window.location.href = 'http://localhost:3000/?category=movie'

  //     }
  //   }
  // }, [])


  useEffect(()=>{
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
  }, [pathname, router, searchParams])

  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp