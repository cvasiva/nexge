import React, { useEffect, useState } from 'react'
import "../Styles/FaqHandbookstyle.css"
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { Queries_Decoded } from "../HomePage/HomePagejson"
import imagehandbook from "../Images/AboutImages/imagehandbook.png"
const FaqHandbook = () => {
    const [toggle, setToggle] = useState(true)
    useEffect(() => {
        if (!toggle) {
            var val = {}
            Queries_Decoded.map(v => {
                val[v.id] = false
            })
            setToggle(!val)
        }
    }, [])
    const handledropdown = (item) => {
        setToggle({ ...toggle, [item.id]: !toggle[item.id] })
    }
    return (
        <div className='tdi9mq0 tdi9mq4'>
            <div className='Queries_handbook py-5'>Queries Decoded: <span className='Queries_handbookfont'>Your FAQ Handbook</span></div>
            <div className='faqhand_bg_grid'>
                {Queries_Decoded.map((item, index) => {
                    console.log("toggle[item.id]",toggle[item.id])
                    return (
                        <div className=''>
                            <div className="faqhand_bg_white">
                                <div className={"invoice_accordintrue"}>
                                    <div className="faqhandbook_arrowicons pointer" onClick={(e) => handledropdown(item)}>
                                        <div className='Professional_font'> {item.Professional}</div>
                                        <div>
                                            <div className="pointer" style={{ transition: "all 1m ease" }} onClick={(e) => handledropdown(item)} width={15}>{toggle[item.id] ? <BsChevronUp className='BsChevronDown_color fw-bold fs-5' /> : <BsChevronDown className='BsChevronDown_color fw-bold fs-5' />}</div>
                                        </div>
                                    </div>
                                </div>
                                <div > {toggle[item.id]  && <div className='content_bspan'> {item.discription} </div>} </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='' >
                <div className='Together_handbook py-5'>Let's Create Your <br />
                    Digital Success Story Together 🤝</div>
                <div className='d-flex justify-content-center'>
                    <div className='Consultation_handbook'>
                        <div className='Consultation1_faq align-item-center'>
                            <div className='w-100'>
                                <div className='Free_handbook'>Free Consultation 🤙</div>
                                <div className='hearhandbook'>We’re happy to hear from you! </div>
                                <div className=' py-3'>
                                    <div className=''>
                                        <div className='py-2'>
                                            <label className='name_handbook'>Name*</label><br />
                                            <input className='handbook_input' placeholder='mail@simmmple.com' />
                                        </div>
                                        <div className='py-2'>
                                            <label className='name_handbook'>Phone Number*</label><br />
                                            <input className='handbook_input' placeholder='' />
                                        </div>
                                        <div className='py-2'>
                                            <label className='name_handbook'>Mail ID*</label><br />
                                            <input className='handbook_input' placeholder='' />
                                        </div>
                                        <div className='py-2'>
                                            <label className='name_handbook'>Interested in</label><br />
                                            <input className='handbook_input' placeholder='' />
                                        </div>
                                        <div className='d-flex gap-3'>
                                            <div className='py-2 w-50'>
                                                <label className='name_handbook'>Preferred Time to talk</label><br />
                                                <input className='handbook_input' placeholder='' />
                                            </div>
                                            <div className='py-2 w-50'>
                                                <label className='name_handbook'>Preferred Mode</label><br />
                                                <input className='handbook_input' placeholder='' />
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <button className='handbook_submit py-3 my-2'>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <img src={imagehandbook} alt="imagehandbook"  className='imagehandbook_syle'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqHandbook
