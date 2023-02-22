import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import React, {useState} from "react";



export default function RootLayout({ children }) {
  const [showMenu, setShowMenu] = useState(false)

  function burgerClick(){
    setShowMenu(!showMenu)
    console.log('test')
    // if(showMenu.value){
    //     document.getElementsByTagName('body')[0].classList.add('active-body')
    // }else{
    //     document.getElementsByTagName('body')[0].classList.remove('active-body')
    // }
    // showProfile.value = false
}
  return (
    <>
      <Sidebar showMenu={showMenu} burgerClick={burgerClick} setShowMenu={setShowMenu}/>
      <main>
        <Header burgerClick={burgerClick} setShowMenu={setShowMenu} showMenu={showMenu}/>
        {children}
      </main>
    </>
  );
}
