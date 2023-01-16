import React from 'react';
import Nav from './Nav';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Nav />
    {children}
  </div>
);
export default Layout;
