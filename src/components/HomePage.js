import React, { useEffect, useRef, useState } from 'react'
import "../Styles/HomePage.css"
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
  Carousel,
  CarouselItem,
} from 'reactstrap';
import { BsChevronDown } from "react-icons/bs";
import { hamePage } from "../HomePage/HomePagejson"
import system_homeimage from "../Images/HomeImages/system_homeimage.png"
import PriceandPlan from './PriceandPlan';
import FaqHandbook from './FaqHandbook';
// import { Stepper, Step, StepLabel, StepButton, StepContent } from "@material-ui/core";
// import { Typography } from "@material-ui/core";
import { BsChevronUp } from "react-icons/bs";
import svgimg from '../Images/HomeImages/Home_images_slide.svg'
import Home_makebg from '../Images/HomeImages/Home_images_slide1.svg'
import video from '../Images/HomeImages/nexgen_mp4.mp4'
function HomePage() {
  const items_slide = [
    {
      'side_images': 'Home_images_slide1.svg',
      'altText': 'Slide 1',
      'caption': 'Slide 1',
      'key': 1,
    },
    {
      'side_images': 'Home_images_slide1.svg',
      'altText': 'Slide 2',
      'caption': 'Slide 2',
      'key': 2,
    },
    {
      'side_images': 'nexgen_home_home1.svg',
      'altText': 'Slide 3',
      'caption': 'Slide 3',
      'key': 3,
    },
    {
      'side_images': 'nexgen_home_home2.svg',
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
  const slides = items_slide.map((item) => {
    return (
      <CarouselItem
        className='carsusel_bg'
        in={false}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.side_images}
        style={{ width: "100%", boxShadow: 'none', background: 'transparent', backgroundColor: 'transparent' }}
      >
        <img src={require(`../Images/HomeImages/${item.side_images}`)} alt={"text"} style={{ width: "100%", background: 'transparent', backgroundColor: 'transparent' }} />
      </CarouselItem>
    );
  });
  // <img src={item?.side_images} alt={"text"} /> 
  const [, setItems] = useState(10);
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
      hamePage.map(v => val[v.id] = false
      )
      setToggle1(val)
    }
  }, [toggle1])
  const handledropdown = (item) => {
    setToggle1({ ...toggle1, [item.id]: !toggle1[item.id] })

  }

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className='' style={{ overflow: 'hidden', overflowX: "hidden" }} >
      <div className='home_dev_card '>
        <div className='dev_flex_home tdi9mq0 tdi9mq4'>
          <video src={video} type="video/mp4" controls autostart autoPlay style={{ position: "absolute", opacity: "0.2", width: '100%' }}
            className='videoTag'
            playsInline
            loop
            muted
            alt="All the devices"
            ref={videoEl} />

          <div className='higher_home1'>
            <div className='align-item-center'>
              <div>
                <div className='home_dev_font'>Stunning website<br /> designed to boost<br /> your <span className='home_dev1_Revenue'>Revenue</span></div>
              </div>
              <div className='my-4 dev_flex1_home'>
                <div><button className='home_botton py-2 px-3'><img src={Homeimage2} alt='Homeimage2' style={{ width: "22px" }} /> Get a Proposal</button></div>
                <div className='home_dev2_get py-2'>Get Free website audit <BsArrowRight /></div>
              </div>
            </div>
            <div className='margin_our'>
              <div className='d-flex gap-2'>
                <div><IoIosStar className='homestar_color' /></div>
                <div><IoIosStar className='homestar_color' /></div>
                <div><IoIosStar className='homestar_color' /></div>
                <div><IoIosStar className='homestar_color' /></div>
                <div><IoIosStarHalf className='homestar_color' /></div>
              </div>
              <div className='home_dev3_our pt-2'>“Our new site has a 60% higher<br />
                conversion rate than our old one”</div>
              <div className='d-flex gap-0 my-2'>
                <div className='text-center'><img src={Homeimage3} alt='Homeimage3' style={{ position: 'relative', width: "50%" }} /> </div>
                <div className=''>
                  <div className='home_font1_aswin'>Ashwin</div>
                  <div className='home_font2_aswin'>Zell Founder </div>
                </div>
              </div>
            </div>
          </div>

          <div className='corosal_image'>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              className='carsusel_bg'
            >
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
        <div className='home_gride tdi9mq0 tdi9mq4 py-4'>
          <div>
            <div className='home_yourfont1'>Your Expert Web Design & Development Partner</div>
            <div className='home_arefont2 py-3'>Are you looking for top-notch Website Design Services that resonate with your brand's uniqueness? At Nexgen, we specialize in Custom Web Design solutions tailored to your specific needs. Our team crafts Responsive Web Designs that adapt seamlessly across devices, ensuring an optimal user experience for your audience.</div>
            <div>
              {hamePage.map((item) => {
                return (
                  <div className=''>
                    <div className="">
                      <div className="d-flex justify-content-between border-bottom border-2 my-2  pointer" onClick={() => handledropdown(item)}>
                        <div className='home_Responsive py-4'> {item.title}</div>
                        <div>
                          <div className="pointer py-4" style={{ transition: "all 1m ease" }} onClick={() => handledropdown(item)} width={15}>{toggle1[item.id] ? <BsChevronUp className='BsChevronDown_style fw-bold fs-5' /> : <BsChevronDown className='BsChevronDown_style fw-bold fs-5' />}</div>
                        </div>
                      </div>
                      <div > {toggle1[item.id] && <div className='content_bspan' style={{ padding: "0.5rem" }}> {item.discription} </div>} </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='py-3'><img src={Homeimage5} alt='Homeimage5' className='Homeimage5_style' />
            <div className='text-center'><button className='home_get_style py-2 px-4'>Get Free Consultation <BsArrowRight /></button></div>
          </div>
        </div>
        <div className='home_mostly_font mt-5'>Experienced with top overseas firms</div>
        <div className='d-flex gap-4 justify-content-center  py-5'>
          <div><img src={HomeCompany} alt='HomeCompany' style={{ width: "10vw", height: "5vh" }} /></div>
          <div><img src={HomeCompany1} alt='HomeCompany' style={{ width: "10vw", height: "5vh" }} /></div>
          <div><img src={HomeCompany2} alt='HomeCompany' style={{ width: "10vw", height: "5vh" }} /></div>
          <div><img src={HomeCompany3} alt='HomeCompany' style={{ width: "10vw", height: "5vh" }} /></div>
          <div><img src={HomeCompany4} alt='HomeCompany' style={{ width: "10vw", height: "5vh" }} /></div>
          <div><img src={HomeCompany5} alt='HomeCompany' style={{ width: "10vw", height: "5vh" }} /></div>
          <div><img src={HomeCompany6} alt='HomeCompany' style={{ width: "10vw", height: "5vh" }} /></div>
        </div>
      </div>
      {/*  <div className='home_card4_bg py-5'>*/}
      {/* <Typography style={{ fontWeight: "900", fontSize: "35px", color: "#000", marginTop: "5vh", marginBottom: "2vh" }} variant="h3" color="primary" class="txt-rotate text-center" data-period="2000" data-rotate='[ "Looking For Something?", "Anziam Bio!", "Here You Will Be FInding All The Stuffs You Need!"]'></Typography> */}
      {/* <div className='home_mostly_font'>We’re mostly in all sectors <span className='home_mostly_font1'>View Portfolio</span> </div>*/}
      {/* </div>*/}
      <div className='Hpme_card5_bg py-5'>
        <div>
          <div className='d-flex justify-content-center tdi9mq0 tdi9mq4'>
            <div className='bg_home_card_makes'>
              <div className='what_home_bg'>What makes us <br /> the <span className='choice_homebg px-3 py-1'>preferred choice</span> over other?</div>
              <div className=''>
                <div>
                  <div className="sideBar">
                    <div className="">
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div></div>
          </div>
          <div className=''>
            <div className='dev_flex_home tdi9mq0 tdi9mq4'>
              <div className='system_homeimage13'>
                <div className='home_Create_font'>Create a constant Lead supply using your website.</div>
                <div className='Homeimage2_button my-4 py-3'><button className='home_botton py-2 px-3'><img src={Homeimage2} alt='Homeimage2' style={{ width: "22px" }} /> Get Started</button></div>
              </div>
              <div className='system_homeimage12 w-100'><img src={system_homeimage} alt="system_homeimage" className='system_homeimage mt-5' /> </div>
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

