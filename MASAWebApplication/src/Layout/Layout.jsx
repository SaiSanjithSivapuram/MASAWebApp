import React from 'react'
import Header from './Header'
import { RouterProvider } from "react-router-dom";
import routeConfig from '../configs/routes/routeConfig';
import "./Layout.css"
import Footer from './footer/FooterComponent';
import SocialMedia from './social_media/social_media';

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
      <SocialMedia />
      <Footer />
    </div>
  )
}

export default Layout
