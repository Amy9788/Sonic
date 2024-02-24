import { headerLogo, menu, close } from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  let isOn = false;


  const toggleMenu = () => {
    isOn = true;
    const header = document.getElementById('header');
    const links = document.getElementById('links');
    const menu_icon = document.getElementById('menu');
    const close_icon = document.getElementById("close");

    if(isOn){

      header.style.background = "#D3D3D3";
      header.style.position = "fixed";
      links.style.display = "block";
      close_icon.style.display = "block";
      menu_icon.style.display = "none";
    }
   
  }

  const toggleCloseMenu = () => {
    isOn = false;
    const header = document.getElementById('header');
    const links = document.getElementById('links');
    const menu_icon = document.getElementById('menu');
    const close_icon = document.getElementById("close");
    if(!isOn){
      menu_icon.style.display = "block";
      close_icon.style.display = "none";
      header.style.position = "absolute";
      header.style.background = "none";
      links.style.display = "none";
    }
  
  }
  return (
    <header className='padding-x py-8 absolute z-10 w-full' id="header">
        <nav className='flex justify-between items-center max-container' >
          

            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden' id="links">
              <li>
                <a href='/'>
                    <img
                      src={ headerLogo }
                      alt='Logo'
                      width={130}
                      height={29}
                    />
                </a>
              </li>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className='font-forum leading-normal text-lg text-slate-gray'>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

           <div className='hidden max-lg:block' onClick={toggleMenu} id="menu">
            <img
              src={menu}
              alt='Menu'
              width={25}
              height={25}
            />
           </div>

           <div className='hidden' onClick={toggleCloseMenu} id="close">
            <img
              src={close}
              alt='Close'
              width={25}
              height={25}
            />
           </div>

        </nav>
    </header>
  )
}

export default Nav