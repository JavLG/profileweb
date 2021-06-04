import React from 'react';
import { FirebaseDatabaseProvider } from "@react-firebase/database";

// local imports MODULE
import '../styles/globals.css'
import 'tailwindcss/tailwind.css';


function MyApp({ Component, pageProps }) {
  return (
  <FirebaseDatabaseProvider>
    <Component {...pageProps} />
    </FirebaseDatabaseProvider>
  )
 
}

export default MyApp;

