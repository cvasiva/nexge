import React from 'react'
import "../Styles/View_Portfolio_Page.css"
import { Link } from "react-router-dom";
const View_Portfolio_Page = () => {
  return (
    <div className='protfilo_bg'>
      <div className=''>
        <ul className='ul_portfilo'>
          <li className='websit_font'>
            Website
          </li>
          <li className='websit_font1'><Link to="/viewportfolio/Mobile" className='link_web1'>Mobile App</Link></li>
          <li className='websit_font1'><Link to="/viewportfolio/Dashboard" className='link_web1'>Dashboard</Link></li>
          <li className='websit_font1'><Link to="/viewportfolio/UXResearch" className='link_web1'>UX Research</Link></li>
          <li className='websit_font1'><Link  to="/viewportfolio/SocialMedia" className='link_web1'>Social Media</Link></li>
          <li className='websit_font1'><Link  to="/viewportfolio/Advertisement"className='link_web1'>Advertisement</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default View_Portfolio_Page
