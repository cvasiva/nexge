import React from 'react'
import "../Styles/Footer.css"
import skillimagefooter from "../context/Images/skillimagefooter.png"
import potimaex_imagefooter from "../context/Images/potimaex_imagefooter.png"
import linkedinfooter from "../context/Images/linkedinfooter.png"
import youtubefooter from "../context/Images/youtubefooter.png"
import instagramfooter from "../context/Images/instagramfooter.png"
const Footer = () => {
    return (
        <div className='footer_bg'>
            <div className='footer_flex'>
                <div>
                    <div className='service_footer text-center'>professional service by</div>
                    <div className='text-center'><img src={skillimagefooter} alt="skillimagefooter" style={{ width: "50%" }} /> </div>
                    <div className='footer_line'></div>
                    <div className='service_footer text-center'>PARTNERED WITH</div>
                    <div className='text-center'><img src={potimaex_imagefooter} alt="potimaex_imagefooter" style={{ width: "50%" }} /> </div>
                </div>
                <div>
                    <div className='sQuick_footer'>Quick links</div>
                    <div className='py-3'>
                        <div className='Home_footer'>Home</div>
                        <div className='Home_footer'>Services</div>
                        <div className='Home_footer'>Portfolio</div>
                        <div className='Home_footer'> Price & Plans </div>
                        <div className='Home_footer'>Blogs</div>
                    </div>
                </div>
                <div>
                    <div className='sQuick_footer'>Contacts</div>
                    <div className='py-4'>
                        <div className='aravind_footer'>aravind.k@skill-elevator.com</div>
                        <div className='aravind_footer pt-3'>+91 93443 38444</div>
                        <div className='aravind_footer'>+91 93443 38444</div>
                        <div className='pt-4'></div>
                    </div>
                </div>
                <div>
                    <div className='sQuick_footer'>Social Presence</div>
                    <div className='py-4 d-flex'>
                        <div><img src={linkedinfooter} alt='linkedinfooter' style={{ width: "80%" }} /> </div>
                        <div><img src={youtubefooter} alt='youtubefooter' style={{ width: "80%" }} /> </div>
                        <div><img src={instagramfooter} alt='instagramfooter' style={{ width: "80%" }} /> </div>
                    </div>
                    <div className='pt-5 my-4 '></div>
                </div>
            </div>
            <div className='footer_flex1'>
                <div>
                <div className='footer2_line'></div>
                    <div className='aravind_footer'>Nexgen | All rights reserved 2024</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
