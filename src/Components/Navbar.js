import { useContext, useState } from 'react'
import { MenuContext } from '../context'
import Avatar from '../assest/avatar.png'
import LogoOutImage from '../assest/logout.png'
import ArrowDown from '../assest/arrow_down.png'
import '../Sass/Navbar.scss'

const Navbar = () => {
    
    const {sidebarOpen, setSidebarOpen} = useContext(MenuContext);
    const menuToggle = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const [show, setShow] = useState(false);
    const showLogoOut = () => {
        setShow(!show)
    }

    return (
        <div className='navbar'>
            <div className='navbar__menuBtn' onClick={menuToggle}>
                <div className='menuBtn__line'></div>
                <div className='menuBtn__line'></div>
                <div className='menuBtn__line'></div>
            </div>

            <div className="navbar__right">
                <div className="user">
                    <img src={Avatar} alt="" style={{marginRight:'9px'}} />
                    <p style={{marginRight:'20px'}} >Emma Go</p>
                    <img src={ArrowDown} alt="" onClick={showLogoOut} />
                </div>
                <div className={`logout ${show ? 'show' : null}`} style={show ? {visibility:'visible'}: null}>
                    <img src={LogoOutImage} alt="" style={{marginRight:'19px'}}/>
                    <p>Logout</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
