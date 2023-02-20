"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, {useEffect} from "react";

function NavbarListItem() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const NavbarMenuClick = (data) =>{
    const params = new URLSearchParams(searchParams)
    params.set('category', data)
    router.replace(`${pathname}?${params}`)
  }

  useEffect(()=>{
    if(!searchParams.get('category')){
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
      <li onClick={()=>NavbarMenuClick("movie")} className={searchParams.get('category')==='movie' ? "active-menu" : undefined}>
        Movies
        {
            searchParams.get('category')==='movie' &&
            <div className="border-list"></div>
        }
      </li>
      <li onClick={()=>NavbarMenuClick("tv")} className={searchParams.get('category')==='tv' ? "active-menu" : undefined}>
        TV Shows
        {
            searchParams.get('category')==='tv' &&
            <div className="border-list"></div>
        }
        </li>
    </ul>
  );
}

export default NavbarListItem;
