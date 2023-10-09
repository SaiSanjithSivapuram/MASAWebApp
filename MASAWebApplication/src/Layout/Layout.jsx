import React from 'react'
import Header from './Header'
import { RouterProvider } from "react-router-dom";
import routeConfig from '../configs/routes/routeConfig';
import FooterComponent from '../configs/footer/FooterComponent';
import "./Layout.css"

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
      <FooterComponent />
    </div>
  )
}

export default Layout
