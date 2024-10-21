'use client'
import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import Navbar from "@/components/NavBar";
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    // if tailwind sees that 'dark' is applied to the html tag it will apply the styles that start with dark:
    <html lang="en">
      <ThemeProvider>
        <body className={`${inter.className} bg-emerald-100 dark:bg-emerald-900 min-h-screen`}>
          <Navbar/>
          {children}
        </body>
      </ThemeProvider>
    {/* this component wouldn't have access to theme information because it's not wrapped in the theme provider */}
      {/* <RandomComponent /> */}
    </html>
  );
}


import { UserProvider } from "./UserContext";

export default function RootLayout({chidlren}) {
  return (
     <html lang='en'>
      <UserProvider>
        <body className={`${inter.className}`}>
          {children}
        </body>
      </UserProvider>
     </html>
  );
}