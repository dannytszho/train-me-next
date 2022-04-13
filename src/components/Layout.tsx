import React from 'react';
import Nav from './Nav';

const Layout = ({ children }: any) => (
  <div className="dark:bg-black">
    <Nav />
    {children}
  </div>
);
export default Layout;
