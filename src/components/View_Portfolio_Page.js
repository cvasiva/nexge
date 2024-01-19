import React, { useState } from 'react'
import "../Styles/View_Portfolio_Page.css"
import { Link, useLocation } from "react-router-dom";
import { Col, Row } from 'reactstrap';
import { websit } from "../HomePage/HomePagejson"
import { useNavigate } from "react-router-dom";
// import Visit from "../Images/Website/Visit.svg"
const View_Portfolio_Page = () => {
  let navigate = useNavigate();
  const handlechange = (item) => {
    navigate(`/viewportfolio/${item.url}`);
  }
  const [page, setPage] = useState(0)
  const handleback = () => {
    setPage(0)
  }
  return (
    <div className='protfilo_bg'>
      <div className='py-5'>
        <ul className='ul_portfilo py-4'>
          <li className='websit_font'>
            <Link to="/viewportfolio" className='link_web1'> Website</Link>
          </li>
          <li className='websit_font1'><Link to="/viewportfolio/Mobile" className='link_web1'>Mobile App</Link></li>
          <li className='websit_font1'><Link to="/viewportfolio/Dashboard" className='link_web1'>Dashboard</Link></li>
          <li className='websit_font1'><Link to="/viewportfolio/UXResearch" className='link_web1'>UX Research</Link></li>
          <li className='websit_font1'><Link to="/viewportfolio/SocialMedia" className='link_web1'>Social Media</Link></li>
          <li className='websit_font1'><Link to="/viewportfolio/Advertisement" className='link_web1'>Advertisement</Link></li>
        </ul>
      </div>
      <div className=''>
        <Row className='Row_margin_view'>
          {websit.map((item, index) => {
            return (
              <Col md={4} onClick={() => handlechange(item, index)} className='text-center'>
                <img src={require(`../Images/Website/${item.pathimage}`)} alt='webpage' style={{ width: "100%" }} />
                <div className='titel_web'>{item.title}</div>
                <div className='year_web mb-5'>{item.year}</div>
              </Col>
            )
          })}
        </Row>
      </div>

      {/*    <a href="/viewportfolio/Visit_Health">
        <div>
          <button className='' onClick={handleback}>Back</button>
          <div>Visit Health</div>
          <div className='text-center'><img src={Visit} alt="image" /></div>
        </div>
        </a>*/}

    </div>
  )
}

export default View_Portfolio_Page
