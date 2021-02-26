import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import '../Sass/Layout.scss'
import { MenuContextProvider } from '../context';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    const breakPoint = 767;
    const mobileBreakPoint = 600;

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
        </div>
    );
}

export default Layout;
