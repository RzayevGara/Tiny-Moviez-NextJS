import { useRouter } from 'next/router'

function NavbarListItem({showMenu, burgerClick, setShowMenu}) {
  const router = useRouter();
  const searchParams = router.query
  const pathname = router.pathname
  
  const NavbarMenuClick = (data) =>{
    const params = new URLSearchParams(searchParams)
    params.set('category', data)
    router.push(`${pathname}?${params}`)
  }

  return (
    <div className='navbar-list-item'>
      <ul className={showMenu ? 'burger burger-active' : 'burger'} onClick={burgerClick}>
        <li className="line"></li>
        <li className="line"></li>
        <li className="line"></li>
      </ul>
      {
        pathname!=='/[movieCategory]/[movieID]' &&
      <ul className='navbar-menu'>
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
      }
    </div>
  );
}

export default NavbarListItem;
