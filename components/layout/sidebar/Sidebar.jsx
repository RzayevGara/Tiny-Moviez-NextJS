import Image from 'next/image';
import Logo from '@/assets/images/svg/Logo.svg'
import HomeIcon from '@/assets/images/svg/Home.svg'
import TopRatedIcon from '@/assets/images/svg/Top Rated.svg'
import PopularIcon from '@/assets/images/svg/Popular.svg'
import DiscoverIcon from '@/assets/images/svg/Discover.svg'
import CloseIcon from '@/assets/images/svg/Close.svg'


function page() {
  return (
    <div className="sidebar">
        <div className="sidebar_header">
            <Image src={Logo} alt="logo" priority/>
            <Image src={CloseIcon} alt="close-icon" priority className="close-icon"/>
        </div>
        <div className="sidebar_list">
            <p className="sidebar_list-title">Library</p>
            <ul>
                <li>
                    <Image src={HomeIcon} alt="icon"/>
                    <p>Home</p>
                </li>
                <li>
                    <Image src={TopRatedIcon} alt="icon"/>
                    <p>Top Rated</p>
                </li>
                <li>
                    <Image src={PopularIcon} alt="icon"/>
                    <p>Popular</p>
                </li>
                <li>
                    <Image src={DiscoverIcon} alt="icon"/>
                    <p>Discover</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default page