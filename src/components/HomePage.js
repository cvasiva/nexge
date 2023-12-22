import React, { useState } from 'react'
import "../Styles/HomePage.css"
import nexge_image1 from "../Images/HomeImages/nexge_image1.png"
import Homeimage2 from "../Images/HomeImages/Homeimage2.png"
import { BsArrowRight } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import Homeimage3 from "../Images/HomeImages/Homeimage3.png"
import Homeimage4 from "../Images/HomeImages/Homeimage4.png"
import Homeimage5 from "../Images/HomeImages/Homeimage5.png"
import HomeCompany from "../Images/HomeImages/HomeCompany.png"
import HomeCompany1 from "../Images/HomeImages/HomeCompany1.png"
import HomeCompany2 from "../Images/HomeImages/HomeCompany2.png"
import HomeCompany3 from "../Images/HomeImages/HomeCompany3.png"
import HomeCompany4 from "../Images/HomeImages/HomeCompany4.png"
import HomeCompany5 from "../Images/HomeImages/HomeCompany5.png"
import HomeCompany6 from "../Images/HomeImages/HomeCompany6.png"
import ScrollCarousel from 'scroll-carousel-react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { BsChevronDown } from "react-icons/bs";
import { hamePage, hamePageImage } from "../HomePage/HomePagejson"
function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className=''>
      <div className='home_dev_card '>
        <div className='dev_flex_home container py-4'>
          <div className=''>
            <div className='align-item-center'>
              <div>
                <div className='home_dev_font'>Stunning website<br /> designed to boost<br /> your <span className='home_dev1_Revenue'>Revenue</span></div>
              </div>
              <div className='my-4 dev_flex1_home'>
                <div><button className='home_botton py-2 px-3'><img src={Homeimage2} alt='Homeimage2' style={{ width: "22px" }} /> Get a Proposal</button></div>
                <div className='home_dev2_get py-2'>Get Free website audit <BsArrowRight /></div>
              </div>
            </div>
            <div>
              <div className='d-flex gap-2'>
                <div><IoIosStar className='homestar_color' /></div>
                <div><IoIosStar className='homestar_color' /></div>
                <div><IoIosStar className='homestar_color' /></div>
                <div><IoIosStar className='homestar_color' /></div>
                <div><IoIosStarHalf className='homestar_color' /></div>
              </div>
              <div className='home_dev3_our pt-2'>“Our new site has a 60% higher<br />
                conversion rate than our old one”</div>
              <div className='d-flex gap-4 my-3'>
                <div><img src={Homeimage3} alt='Homeimage3' /> </div>
                <div className='py-3'>
                  <div className='home_font1_aswin'>Ashwin</div>
                  <div className='home_font2_aswin'>Zell Founder </div>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center w-50'><img src={nexge_image1} alt='nexgeimage1' style={{ width: "100%" }} /> </div>
        </div>
      </div>
      <div className='home_dev5_card py-1'>
        <ScrollCarousel
          // smartSpeed={true}
          autoplay
          autoplaySpeed={80}
          speed={5}
        >
          <div className='d-flex w-100'  >
            <div> <img src={Homeimage4} alt='Homeimage4' className='Homeimage4_width' /></div>
            <div className='home_webfont w-100 text-nowrap py-2'>Web Development & Design</div>
          </div>
          <div className='d-flex w-100'  >
            <div><img src={Homeimage4} alt='Homeimage4' className='Homeimage4_width' /></div>
            <div className='home_webfont w-100 text-nowrap py-2'>Mobile applications</div>
          </div>
          <div className='d-flex w-100'  >
            <div> <img src={Homeimage4} alt='Homeimage4' className='Homeimage4_width' /></div>
            <div className='home_webfont w-100 text-nowrap py-2'>UX / UI Design</div>
          </div>
          <div className='d-flex w-100'  >
            <div> <img src={Homeimage4} alt='Homeimage4' className='Homeimage4_width' /></div>
            <div className='home_webfont w-100 text-nowrap py-2'>E - Commerce website</div>
          </div>
          <div className='d-flex w-100'  >
            <div><img src={Homeimage4} alt='Homeimage4' className='Homeimage4_width' /></div>
            <div className='home_webfont w-100 text-nowrap py-2'>Branding & Design</div>
          </div>
          <div className='d-flex w-100'  >
            <div><img src={Homeimage4} alt='Homeimage4' className='Homeimage4_width' /></div>
            <div className='home_webfont w-100 text-nowrap py-2'>Dashboard UI</div>
          </div>
        </ScrollCarousel>
      </div>
      <div className='home_card3_bg'>
        <div className='home_gride container py-4'>
          <div>
            <div className='home_yourfont1'>Your Expert Web Design & Development Partner</div>
            <div className='home_arefont2 py-3'>Are you looking for top-notch Website Design Services that resonate with your brand's uniqueness? At Nexgen, we specialize in Custom Web Design solutions tailored to your specific needs. Our team crafts Responsive Web Designs that adapt seamlessly across devices, ensuring an optimal user experience for your audience.</div>
            <div>
              <div>
                {hamePage.map((item, index) => {
                  return (
                    <div>
                      <div className='d-flex justify-content-between border-bottom my-2 mb-4'>
                        <div className='home_Responsive'>{item.title}</div>
                        <button className='BsChevronDown_style' onClick={toggle} style={{ marginBottom: '1rem' }}>
                          <BsChevronDown className='fs-3' />
                        </button>
                      </div>
                      <Collapse isOpen={isOpen}>
                        <Card>
                          <CardBody>
                            {item.discription}
                          </CardBody>
                        </Card>
                      </Collapse>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className=''><button className='home_get_style py-2 px-4'>Get Free Consultation <BsArrowRight /></button></div>
          </div>
          <div className='py-3'><img src={Homeimage5} alt='Homeimage5' className='Homeimage5_style' /> </div>
        </div>
      </div>
      <div className='home_card4_bg py-5'>
        <div className='home_mostly_font'>We’re mostly in all sectors <span className='home_mostly_font1'>View Portfolio</span> </div>
        <div className='py-5'>
          <ScrollCarousel
            // smartSpeed={true}
            autoplay
            autoplaySpeed={80}
            speed={5}
          >
            {hamePageImage.map((user, index) => {
              return (
                <div className='d-flex w-100'  >
                  <div id={index}> <img src={user.devimage} alt='Homeimage6' className='Homeimage6_width' /></div>
                </div>
              )
            })}

          </ScrollCarousel>
        </div>
        <div className='home_mostly_font mt-5'>Experienced with top overseas firms</div>
        <div className='d-flex gap-4 justify-content-center py-4'>
          <div><img src={HomeCompany} alt='HomeCompany' style={{ width: "10vw", height: "5vh" }} /></div>
          <div><img src={HomeCompany1} alt='HomeCompany' style={{ width: "10vw", height: "5vh" }} /></div>
          <div><img src={HomeCompany2} alt='HomeCompany' style={{ width: "10vw", height: "5vh" }} /></div>
          <div><img src={HomeCompany3} alt='HomeCompany' style={{ width: "10vw", height: "5vh" }} /></div>
          <div><img src={HomeCompany4} alt='HomeCompany' style={{ width: "10vw", height: "5vh" }} /></div>
          <div><img src={HomeCompany5} alt='HomeCompany' style={{ width: "10vw", height: "5vh" }} /></div>
          <div><img src={HomeCompany6} alt='HomeCompany' style={{ width: "10vw", height: "5vh" }} /></div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
