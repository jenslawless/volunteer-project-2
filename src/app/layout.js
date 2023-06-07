import React, { ReactNode } from 'react';

import Nav from '../components/Nav';
// import Provider from '../components/Provider'

export const metadata = {
  title: "Volunteer",
  description: "Make the volunteer world easier"
};


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className='text-black'>
        <div>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
