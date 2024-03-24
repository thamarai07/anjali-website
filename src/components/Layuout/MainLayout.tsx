import React from 'react'
import Footer from './Footer'
import Header from '../Navbar/Header'
import TopNav from '../Navbar/TopNav'
import { BreadcrumbsMain } from './Breadcrumbs'
function MainLayout({children} : any) {
  return (
    <div className='overflow-hidden'>
      <TopNav/>
      <Header/>
      <main>
        <BreadcrumbsMain TypeofHead={"head"}/>
        {children}
        <BreadcrumbsMain TypeofHead={"foot"}/>
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout
