import React from 'react';
import Sidebar from './Sidebar';
import '../Sass/Layout.scss'
import { MenuContextProvider } from '../context';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <MenuContextProvider>
                <Sidebar />
                <Navbar />
            </MenuContextProvider>
            {/* {children} */}
        </div>
    );
}

export default Layout;
