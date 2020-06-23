import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Button from '../../components/Button';

const Layout = ({ children }) => {
  const ws = () => (
    window.open('https://wa.me/573015557041')
  );

  return (
    <section className='Layout'>
      <Button type='whatsapp' size='md' name='Escribeme' onClick={() => ws()} />
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
};

export default Layout;
