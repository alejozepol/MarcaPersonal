import React from 'react';
import Header from '../header';
import Footer from '../footer';


const Layout = ({ children }) => (
  <section className='Layout'>
    <>
      <Header />
    </>
    <main>
      {children}
    </main>
    <>
      <Footer />
    </>
  </section>
);

export default Layout;
