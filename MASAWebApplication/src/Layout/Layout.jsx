import React, { lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routeConfig from '../configs/routes/routeConfig';
import "./Layout.css"
const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./footer/FooterComponent'));

function Layout() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className='content'>
          <Routes>
            {routeConfig.map((route, index) => (
              <Route key={index} path={route.path}
                element={
                  <React.Suspense>
                    {!route.headerContent && (
                      <div style={{ height: "100px" }}/>
                    )}
                    {route.element}
                  </React.Suspense>
                } />
            )
            )}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Layout
