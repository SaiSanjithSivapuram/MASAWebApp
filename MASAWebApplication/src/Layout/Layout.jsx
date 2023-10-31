import React from 'react'
import Header from './Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routeConfig from '../configs/routes/routeConfig';
import "./Layout.css"
import Footer from './footer/FooterComponent';

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
                    {route.path != "/" && (
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
