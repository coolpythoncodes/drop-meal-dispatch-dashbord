import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Sidebar />
            {children}
        </div>
    );
}

export default Layout;
