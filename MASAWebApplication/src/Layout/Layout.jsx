import React from 'react'
import Header from './Header'
import { RouterProvider } from "react-router-dom";
import routeConfig from '../configs/routes/routeConfig';
import "./Layout.css"
import Footer from './footer/FooterComponent';

function Layout() {

  return (
    <div>
      <Header />
      <div className='content'>
        <RouterProvider
          router={routeConfig}
          fallbackElement={<></>}
        />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
