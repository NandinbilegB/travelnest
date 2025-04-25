import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main> {/* This renders your page content */}
      <Footer /> {/* This will be the only footer rendered */}
    </div>
  );
};

export default Layout;
