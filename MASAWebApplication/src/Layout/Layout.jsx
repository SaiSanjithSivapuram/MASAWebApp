import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import routeConfig from '../configs/routes/routeConfig';
import "./Layout.css"
import Error404 from '../pages/errorPages/Error404';
import Loading from '../component/loading/Loading';
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
                  <Suspense fallback={<Loading />}>
                    {!route.headerContent && (
                      <div style={{ height: "100px" }} />
                    )}
                    {route.element}
                  </Suspense>
                } />
            )
            )}
            <Route path='*' element={
              <React.Suspense>
                <Error404 />
              </React.Suspense>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Layout
