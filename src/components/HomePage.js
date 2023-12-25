import React, { useEffect, useState } from 'react'
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
import FrameHome9 from "../Images/HomeImages/FrameHome9.png"
import FrameHome8 from "../Images/HomeImages/FrameHome8.png"
import FrameHome7 from "../Images/HomeImages/FrameHome7.png"
import FrameHome10 from "../Images/HomeImages/FrameHome10.png"
import FrameHome6 from "../Images/HomeImages/FrameHome6.png"
import FrameHome5 from "../Images/HomeImages/FrameHome5.png"
import FrameHome4 from "../Images/HomeImages/FrameHome4.png"
import FrameHome3 from "../Images/HomeImages/FrameHome3.png"
import FrameHome2 from "../Images/HomeImages/FrameHome2.png"
import FrameHome1 from "../Images/HomeImages/FrameHome1.png"
import ScrollCarousel from 'scroll-carousel-react';
import {
  Collapse, CardBody, Card, Row, Col, Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { BsChevronDown } from "react-icons/bs";
import { hamePage, hamePageImage } from "../HomePage/HomePagejson"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import { CarouselWrapper } from "react-pretty-carousel";
import system_homeimage from "../Images/HomeImages/system_homeimage.png"
import PriceandPlan from './PriceandPlan';
import FaqHandbook from './FaqHandbook';
import { Stepper, Step, StepLabel, StepButton, StepContent } from "@material-ui/core";
import { BsCheckLg } from "react-icons/bs";
import { Typography } from "@material-ui/core";
import { BsChevronUp } from "react-icons/bs";
import videohome from "../Images/HomeImages/videohome.mp4"
import svgimg from '../Images/HomeImages/Home_images_slide.svg'
import Home_makebg from '../Images/HomeImages/Home_images_slide1.svg'

function HomePage() {
  const items_slide = [
    {
      side_images: '../Images/HomeImages/Home_images_slide.svg',
      'altText': 'Slide 1',
      'caption': 'Slide 1',
      'key': 1,
    },
    {
      'side_images': '../Images/HomeImages/Home_images_slide.svg',
      'altText': 'Slide 2',
      'caption': 'Slide 2',
      'key': 2,
    },
    {
      'side_images': '../Images/HomeImages/Home_images_slide.svg',
      'altText': 'Slide 3',
      'caption': 'Slide 3',
      'key': 3,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items_slide.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items_slide.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items_slide.map((item) => {
    console.log("itemmm", item)
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.side_images}
        style={{width:"100%"}}
      >

        <img src={item.key === 1 ? svgimg : Home_makebg && item.key === 2 ? svgimg : Home_makebg} alt={"text"} style={{width:"100%"}}/>


      </CarouselItem>
    );
  });
  // <img src={item?.side_images} alt={"text"} /> 

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (step, index) => setCurrentStep(index);

  const [items, setItems] = useState(10);

  useEffect(() => {
    if (window.innerWidth < 576) setItems(1);
    else setItems(3);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 576) setItems(1);
      else setItems(3);
    });
  }, []);

  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  const [toggle1, setToggle1] = useState(true)
  useEffect(() => {
    if (!toggle1) {
      var val = {}
      hamePage.map(v => {
        val[v.id] = false
      })
      setToggle1(val)
    }
  }, [toggle1])
  const handledropdown = (item) => {
    setToggle1({ ...toggle1, [item.id]: !toggle1[item.id] })
  }
  // const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  // const delay = 2500;
  // const [index, setIndex] = React.useState(0);
  // const timeoutRef = React.useRef(null);

  // function resetTimeout() {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  // }

  // React.useEffect(() => {
  //   resetTimeout();
  //   timeoutRef.current = setTimeout(
  //     () =>
  //       setIndex((prevIndex) =>
  //         prevIndex === colors.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );

  //   return () => {
  //     resetTimeout();
  //   };
  // }, [index]);


  return (
    <div className='' style={{ overflow: 'hidden', overflowX: "hidden" }}>
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
                <div><img src={Homeimage3} alt='Homeimage3' style={{ position: 'relative' }} /> </div>
                <div className='py-3'>
                  <div className='home_font1_aswin'>Ashwin</div>
                  <div className='home_font2_aswin'>Zell Founder </div>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center w-50'>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
            >
              <CarouselIndicators
                items={items_slide}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}

            </Carousel>
          </div>
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
              {hamePage.map((item, index) => {
                return (
                  <div className=''>
                    <div className="">
                      <div className="d-flex justify-content-between border-bottom my-2  pointer" onClick={(e) => handledropdown(item)}>
                        <div className='home_Responsive py-3'> {item.title}</div>
                        <div>
                          <div className="pointer py-3" style={{ transition: "all 1m ease" }} onClick={(e) => handledropdown(item)} width={15}>{toggle1[item.id] ? <BsChevronUp className='BsChevronDown_style fw-bold fs-5' /> : <BsChevronDown className='BsChevronDown_style fw-bold fs-5' />}</div>
                        </div>
                      </div>
                      <div > {toggle1[item.id] && <div className='content_bspan' style={{ padding: "0.5rem" }}> {item.discription} </div>} </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className=''><button className='home_get_style py-2 px-4'>Get Free Consultation <BsArrowRight /></button></div>
          </div>
          <div className='py-3'><img src={Homeimage5} alt='Homeimage5' className='Homeimage5_style' /> </div>
        </div>
      </div>
      <div className='home_card4_bg py-5'>
        <Typography style={{ fontWeight: "900", fontSize: "35px", color: "#000", marginTop: "5vh", marginBottom: "2vh" }} variant="h3" color="primary" class="txt-rotate text-center" data-period="2000" data-rotate='[ "Looking For Something?", "Anziam Bio!", "Here You Will Be FInding All The Stuffs You Need!"]'></Typography>
        <div className='home_mostly_font'>We’re mostly in all sectors <span className='home_mostly_font1'>View Portfolio</span> </div>
        <div className='py-5'>
          <ScrollCarousel
            // smartSpeed={true}
            autoplay
            autoplaySpeed={80}
            speed={5}
          >

            <div className='d-flex w-100 gap-4'  >
              <div> <img src={FrameHome9} alt='FrameHome9' className='FrameHome9_style' /></div>
              <div> <img src={FrameHome8} alt='FrameHome9' className='FrameHome9_style' /></div>
              <div> <img src={FrameHome7} alt='FrameHome9' className='FrameHome9_style' /></div>
              <div> <img src={FrameHome10} alt='FrameHome9' className='FrameHome9_style' /></div>
              <div> <img src={FrameHome6} alt='FrameHome9' className='FrameHome9_style' /></div>
              <div> <img src={FrameHome5} alt='FrameHome9' className='FrameHome9_style' /></div>
              <div> <img src={FrameHome4} alt='FrameHome9' className='FrameHome9_style' /></div>
              <div> <img src={FrameHome3} alt='FrameHome9' className='FrameHome9_style' /></div>
              <div> <img src={FrameHome2} alt='FrameHome9' className='FrameHome9_style' /></div>
              <div> <img src={FrameHome1} alt='FrameHome9' className='FrameHome9_style' /></div>
            </div>


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
      <div className='Hpme_card5_bg py-5'>
        <div>
          <div className='d-flex justify-content-center'>
            <div className='bg_home_card_makes'>
              <div className='what_home_bg'>What makes us <br /> the <span className='choice_homebg px-3 py-1'>preferred choice</span> over other?</div>
              <div className='container'>
                <div>
                  <div className="sideBar">
                    <div className="">
                      <Stepper orientation="vertical" activeStep={0} style={{ background: "none", color: "#FFF" }}>
                        <Step className='step_bg_line' style={{ color: "#FFF" }}>
                          <StepButton className=''>
                            <span className='Register_home'>Design & Feedback</span>

                          </StepButton>
                        </Step>
                        <Step active={true}>
                          <StepButton>
                            <span className='Register_home'>Development & Launch</span>
                          </StepButton>
                          <StepContent className='Create_home_font1'>
                            <div>
                              <div><BsCheckLg /> Website UX UI Design</div>
                              <div><BsCheckLg /> SEO strategy</div>
                              <div><BsCheckLg /> Website  Development</div>
                            </div>
                          </StepContent>
                        </Step>
                        <Step active={true}>
                          <StepLabel>
                            <span className='Register_home'>Register your name</span>

                          </StepLabel>
                          <StepContent className='Create_home_font1'>
                            <div>
                              <div><BsCheckLg /> Keyword analysis</div>
                              <div><BsCheckLg /> meta tagging</div>
                              <div><BsCheckLg /> Alt images</div>
                            </div>
                          </StepContent>
                        </Step>
                        <Step active={true}>
                          <StepLabel>
                            <span className='Register_home'>Lead Generation</span>
                          </StepLabel>
                          <StepContent className='Create_home_font1'>
                            <div>
                              <div><BsCheckLg /> Create leads pipeline</div>
                              <div><BsCheckLg /> Daily leads update</div>
                              <div><BsCheckLg /> No-cost advertising</div>
                            </div>
                          </StepContent>
                        </Step>
                      </Stepper>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div></div>
          </div>
          <div className='py-5'>
            <div className='dev_flex_home container'>
              <div className='d-flex justify-content-center w-100'>
                <div>
                  <div className='home_Create_font'>Create a constant <br />Lead supply using <br />your website.</div>
                  <div className='my-5 py-3'><button className='home_botton py-2 px-3'><img src={Homeimage2} alt='Homeimage2' style={{ width: "22px" }} /> Get Started</button></div>
                </div>
              </div>
              <div className='text-center'><img src={system_homeimage} alt="system_homeimage" className='w-100' /> </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home_card3_bg'>
        <PriceandPlan />
      </div>
      <div className='home_card6_bg pb-5'>
        <FaqHandbook />
      </div>
    </div>
  )
}

export default HomePage
