import { headerLogo } from "../assets/images";
import {hamburger} from "../assets/icon" ;
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/"> 
            <img src={headerLogo}
                alt="logo"
                width={130}
                height={29}
            
            />
            </a>
            <div className= " flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                <a className="text-slate-gray" href="">Home</a>
                <a className="text-slate-gray" href="">About Us</a>
                <a className="text-slate-gray" href="">Products</a>
                <a className="text-slate-gray" href="">Contact Us</a>
            </div>

                <div className="hidden max-lg:block">
                  <img src={hamburger}
                   alt="hamburger" 
                   height={25}
                   width={25}
                   />
                </div>

        </nav>
    </header>
  )
}

export default Nav