'use client'

import React from "react";
import {usePathname,useSearchParams } from "next/navigation";
import HomeIcon from '@/assets/images/svg/Home.svg'
import TopRatedIcon from '@/assets/images/svg/Top Rated.svg'
import PopularIcon from '@/assets/images/svg/Popular.svg'
import DiscoverIcon from '@/assets/images/svg/Discover.svg'
import Link from 'next/link'
import Image from 'next/image';

function SidebarListItem() {
  const pathname = usePathname();
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  return (
    <div className="sidebar_list">
      <p className="sidebar_list-title">Library</p>
      <ul>
        <li>
          <Link href={`/?category=${category}`}>
            <Image src={HomeIcon} alt="icon" />
            <p className={pathname === "/" ? "active-list" : undefined}>Home</p>
          </Link>
        </li>
        <li>
          <Link href={`/top-rated?category=${category}&page=1`}>
            <Image src={TopRatedIcon} alt="icon" />
            <p
              className={pathname === "/top-rated" ? "active-list" : undefined}
            >
              Top Rated
            </p>
          </Link>
        </li>
        <li>
          <Link href={`/popular?category=${category}&page=1`}>
            <Image src={PopularIcon} alt="icon" />
            <p className={pathname === "/popular" ? "active-list" : undefined}>
              Popular
            </p>
          </Link>
        </li>
        {/* <li>
          <Link href={`/discover?category=${category}&page=1`}>
            <Image src={DiscoverIcon} alt="icon" />
            <p className={pathname === "/discover" ? "active-list" : undefined}>
              Discover
            </p>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}

export default SidebarListItem;
