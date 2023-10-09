import React from 'react'
import Header from './Header'
import { useRoutes, RouterProvider } from "react-router-dom";
import routeConfig from '@/configs/routes/routeConfig';

function Layout() {

  return (
    <div>
      <Header />
      <RouterProvider
        router={routeConfig}
        fallbackElement={<></>}
      />
    </div>
  )
}

export default Layout
