import React, { useState } from 'react';
import Nav from './Nav';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Resume from '../components/pages/Resume';

// Here we destructure our props into their own distinct variables
export default function Welcome() {
  // Lets log our our loggedIn variable to see it change in real time
 
  const [page, setPage] = useState('about');

  let CurrectPage;

  
  if (page === 'about') CurrectPage = About;
  if (page === 'contact') CurrectPage = Contact;
  if (page === 'resume') CurrectPage = Resume;

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <>
      <Nav setPage={setPage} />
      <CurrectPage />
    </>
  );
}