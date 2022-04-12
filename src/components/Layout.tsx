import React from 'react';
import Nav from './Nav';

const Layout = ({ children }: any) => (
  <div>
    <Nav />
    {children}
  </div>
);
export default Layout;
