import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import '../Sass/Layout.scss'
import { MenuContextProvider } from '../context';
import Navbar from './Navbar';
import User from './User';

const Layout = ({ children }) => {
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    const breakPoint = 767;
    const mobileBreakPoint = 600;

    const [show, setShow] = useState(false);
    const showLogoOut = () => {
        setShow(!show)
    }

    useEffect(() => {
        const handleWindowResize = () => setDeviceWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, []);

    return (
        <div className="layout">
            <MenuContextProvider>
                <Sidebar />
                {
                    deviceWidth <= mobileBreakPoint ? <Navbar /> : null
                }
            </MenuContextProvider>
            {children}
            <User />
        </div>
    );
}

export default Layout;
