import React from 'react';
import NavbarComponent from '../navbar';
import './style.scss';

const errorPage = () => (
  <>
    <NavbarComponent/>
    <h1 className="error">Oops, you have entered invalid address</h1>
  </>
);

export default errorPage;