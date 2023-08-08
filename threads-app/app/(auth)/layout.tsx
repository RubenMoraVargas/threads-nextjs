import React from 'react';
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className={`${inter.className}  flex h-full items-center justify-center`}>
      {children}
    </div>
   );
}
 
export default AuthLayout;