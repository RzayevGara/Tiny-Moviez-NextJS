import SearchIcon from "@/assets/images/svg/Search.svg"
import FilterIcon from "@/assets/images/svg/Filter.svg"
import Image from 'next/image'
import NavbarListItem from './NavbarListItem'


function Header() {
  
  return (
    <section className="header">
      <NavbarListItem/>
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