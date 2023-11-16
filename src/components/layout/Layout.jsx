/* eslint-disable no-unused-vars */
import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/TopNvbar'

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="content">
        {/* {children} */}
      </div>
      <Footer />
    </div>
  )
}

export default Layout