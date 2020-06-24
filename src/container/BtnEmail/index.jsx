import React from 'react';
import Button from '../../components/Button';

const BtnEmail = () => {
  const sent = () => (window.open('mailto:info@alejandrolopez.co?subject=TRABAJEMOS JUNTOS'));

  return (
    <>
      <Button type='primary' size='md' name='Trabajemos Juntos' onClick={() => sent()} />
    </>
  );
};

export default BtnEmail;
