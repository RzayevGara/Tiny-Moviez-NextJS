import Image from 'next/image';
import Logo from '@/assets/images/svg/Logo.svg'
import CloseIcon from '@/assets/images/svg/Close.svg'
import Link from 'next/link'
import SidebarItemList from './SidebarListItem'

function Sidebar({showMenu, burgerClick, setShowMenu}) {
  return (
    <div className={showMenu ? 'sidebar sidebar-active' : 'sidebar'}>
        <div className="sidebar_header">
            <Link href="/?category=movie" onClick={()=>setShowMenu(false)}>
                <Image src={Logo} alt="logo" priority/>
            </Link>
            <Image src={CloseIcon} alt="close-icon" priority className="close-icon" onClick={burgerClick}/>
        </div>
        <SidebarItemList setShowMenu={setShowMenu}/>
    </div>
  )
}

export default Sidebar