import SearchIcon from "@/assets/images/svg/Search.svg"
import FilterIcon from "@/assets/images/svg/Filter.svg"
import Image from 'next/image'
import NavbarListItem from './NavbarListItem'
import { useRouter } from 'next/router'


function Header({showMenu, burgerClick, setShowMenu}) {
  const router = useRouter();
  const pathname = router.pathname

  return (
    <section className={router.pathname === '/[movieCategory]/[movieID]'? 'header header-movie-page' : 'header'}>
      <NavbarListItem burgerClick={burgerClick} setShowMenu={setShowMenu} showMenu={showMenu}/>
      <form className="search-form">
        <div className="search-box">
          <Image src={SearchIcon} alt="search-icon"/>
          <input type="text" placeholder="Search"/>
          <Image src={FilterIcon} alt="filter-icon"/>
        </div>
      </form>
    </section>
  )
}

export default Header
