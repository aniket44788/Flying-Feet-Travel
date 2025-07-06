import React from "react";
import "./content6.css";
import hlogo from "../../logo.jpeg";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
function Content6() {
    return (
        <>
            <div className="content6-head" data-aos="fade-up">
                <div className="contact-wrapper">
                    {/* Left Column */}
                    <div className="contact-left">
                        <img src={hlogo} alt="Logo" className="logo" />
                        <p>
                            <b> Hotel White Mountain</b>
                        </p>
                        <div className="social-icons">
                            <a href="#">
                                {/* <FaFacebookF /> */}
                                <FaFacebook />
                            </a>
                            <div className="icon-insta">
                                <a href="#">
                                    <FaInstagram />
                                </a>
                            </div>
                            <a href="#">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Middle Column - Form */}
                    <div className="contact-middle" data-aos="fade-up" >
                        <h2>CONTACT US</h2>
                        <p>Feel free to reach us</p>
                        <form>
                            <input type="text" placeholder="Your name" />
                            <input type="email" placeholder="Your email" />
                            <textarea placeholder="Your message"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>

                    {/* Right Column - Info */}
                    <div className="contact-right" data-aos="fade-up">
                        <h3>Landline</h3>
                        <p>
                            <FaPhoneAlt /> 78078-12028
                        </p>
                        <p>
                            <FaPhoneAlt /> 78078-12028
                        </p>

                        <h3>Phone</h3>
                        <p>
                            <MdPhoneInTalk /> +91-78078-12028
                        </p>
                        <p>
                            <MdPhoneInTalk /> +91-78078-12028
                        </p>

                        <h3>Delhi Sales</h3>
                        <p>
                            <MdPhoneInTalk /> +91-7832999005
                        </p>

                        <h3>Email Us</h3>
                        <p>
                            <FaEnvelope /> flyingfeettravel@gmail.com
                        </p>

                        <h3>Address</h3>
                        <p>
                            <FaMapMarkerAlt /> Mcleodganj , Front of dalai lama temple , Kangra, Himachal Pardesh 176215
                        </p>
                    </div>
                </div>
                <p className="footer-copy" >
                    © 2021 All rights reserved Flying Feet Travels. .
                    <br /> Website Designed
                    & Developed by Flying Feet Travels..
                </p>
            </div>
        </>
    );
}

export default Content6;
