import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './Layout.scss';

const Layout = (props) => {
  const { children } = props;

  return (
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
      <footer>footer</footer>
    </section>
  );
};

export default Layout;
