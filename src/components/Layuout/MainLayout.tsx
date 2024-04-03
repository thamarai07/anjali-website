import React from 'react'
import Footer from './Footer'
import Header from '../Navbar/Header'
import TopNav from '../Navbar/TopNav'
import { BreadcrumbsMain } from './Breadcrumbs'
import { GoogleAnalytics } from '@next/third-parties/google'
function MainLayout({children} : any) {
  return (
    <div className='overflow-hidden'>
      <TopNav/>
      <Header/>
      <main>
        <BreadcrumbsMain TypeofHead={"head"}/>
        {children}
        <GoogleAnalytics gaId="G-SLCJCDZHM3" />
        <BreadcrumbsMain TypeofHead={"foot"}/>
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout
