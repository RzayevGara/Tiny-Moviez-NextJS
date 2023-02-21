"use client";

// import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useRouter } from 'next/router'
import React, {useEffect} from "react";

function NavbarListItem() {
  const router = useRouter();
  const searchParams = router.query
  const pathname = router.pathname

  const NavbarMenuClick = (data) =>{
    const params = new URLSearchParams(searchParams)
    params.set('category', data)
    router.push(`${pathname}?${params}`)
  }

  useEffect(()=>{
    if(!searchParams.category){
      const params = new URLSearchParams(searchParams)
      if (pathname == "/"){
        params.set('category', "movie")
      }else{
        params.set('category', "movie")
        params.set('page', 1)
      }
      router.push(`${pathname}?${params}`)
        
    }
  }, [pathname, router, searchParams])

  return (
    <ul>
      <li onClick={()=>NavbarMenuClick("movie")} className={searchParams.category==='movie' ? "active-menu" : undefined}>
        Movies
        {
            searchParams.category==='movie' &&
            <div className="border-list"></div>
        }
      </li>
      <li onClick={()=>NavbarMenuClick("tv")} className={searchParams.category==='tv' ? "active-menu" : undefined}>
        TV Shows
        {
            searchParams.category==='tv' &&
            <div className="border-list"></div>
        }
        </li>
    </ul>
  );
}

export default NavbarListItem;
