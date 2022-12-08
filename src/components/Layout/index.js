import React, { useEffect } from 'react';
import {BrowserRouter, Link} from 'react-router-dom'

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../Routes';

import {Nav} from './styles'
export default function Layout() {
  return ( 
  <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/123">Post</Link>
      </Nav>
      <Routes />
      <Footer />   
  </BrowserRouter>
    
  );
}









/* useEffect(() => { // when eventlistner don't be used. how to remove
  function handleScroll() {
    console.debug('scrollou');
  }
  document.addEventListener('scroll', handleScroll);
  return () => document.removeEventListener('scroll', handleScroll);
}, [])
 */