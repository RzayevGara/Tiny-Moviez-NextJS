import Image from 'next/image';
import Logo from '@/assets/images/svg/Logo.svg'
import CloseIcon from '@/assets/images/svg/Close.svg'
import Link from 'next/link'
import SidebarItemList from './SidebarListItem'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar_header">
            <Link href="/?category=movie">
                <Image src={Logo} alt="logo" priority/>
            </Link>
            <Image src={CloseIcon} alt="close-icon" priority className="close-icon"/>
        </div>
        <SidebarItemList/>
    </div>
  )
}

export default Sidebar