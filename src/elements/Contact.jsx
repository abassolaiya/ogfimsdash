import React, { useState, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";
//import GoogleMapReact from 'google-map-react';
import ContactTwo from "../elements/contact/ContactTwo";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import emailjs from 'emailjs-com';
import { baseURL } from '../httpService';

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    )
}
const AnyReactComponent = ({ text }) => <div>{text}</div>;


const Contact = ()=>{

    const [ result,showresult ] = useState(false);

    const [ center,setCenter ] = useState({lat: 59.95, lng: 30.33});
    const [ zoom,setZoom ] = useState(11);

    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');
    const [address, setAddress] = useState('');


    const getContact = () => {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
     fetch(`${baseURL}contact/63be7ca47ec18f6690c235a2`, {method: 'GET', headers})
    .then((response) => response.json())
    .then((responseJson) => {

      console.log(responseJson)
      setPhone1(responseJson.contact.phone1);
      setPhone2(responseJson.contact.phone2);
      setEmail1(responseJson.contact.email1);
      setEmail2(responseJson.contact.email2);
      setAddress(responseJson.contact.address);
      // history.push("/content/banners");
      // history.push("/news/list");
    })
    .catch((error) => {
      console.log(error);
    });
  }


   useEffect(()=>{
        if(!phone1){
            getContact();
        }
    },[]);


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_p4x3hv8', 
            'template_jgfr42f', 
            e.target, 
            'user_jrfTH2e0Ely35ZCVFdT9S'
        )
        .then((result) => {
            console.log(result.text);
            }, 
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

   
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Contact' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                 {/* Start Breadcrump Area */}
                 <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--30"  data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title text-white">Contact Us</h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}


                {/* Start Contact Top Area  */}
                <div className="rn-contact-top-area ptb--120 bg_color--5">
                    <div className="container">
                        {/*<div className="row">
                            <div className="col-lg-12">
                                <div className="section-title mb--30 text-center">
                                    <span className="subtitle">Our contact address</span>
                                    <h2 className="title">Quick Contact Address</h2>
                                    <p className="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>*/}
                        <div className="row">

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Contact Phone Number</h4>
                                        <p><a href="tel:+234 803 666 777">+234 {phone1}</a></p>
                                        {phone2?<p><a href="tel:+234 803 222 333">+234 {phone2}</a></p>:null}
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Our Email Address</h4>
                                        <p><a href={`mailto:${email1}"`}>{email1}</a></p>
                                        <p>{email2 != email1 ?<a href={`mailto:${email2}`}>{email2}</a>:<br />}</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Our Location</h4>
                                        <p>{address}</p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                        </div>
                    </div>
                </div>
                {/* End Contact Top Area  */}

                {/* Start Contact Page Area  */}
                <div className="rn-contact-page ptb--120 bg_color--1">
                    <div className="contact-form--1">
                        <div className="container">
                            <div className="row row--35 align-items-start">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="section-title text-left mb--50">
                                        <h2 className="title">Drop a message.</h2>

                                    </div>
                                    

                                    <div className="form-wrapper">
                                        <form action="" onSubmit={sendEmail}>
                                            <div className="rn-form-group">
                                                <input 
                                                type="text"
                                                name="fullname"
                                                placeholder="Your Name"
                                                required
                                                />
                                            </div>

                                            <div className="rn-form-group">
                                                <input 
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                required
                                                />
                                            </div>

                                            <div className="rn-form-group">
                                                <input 
                                                type="text"
                                                name="phone"
                                                placeholder="Phone Number"
                                                required
                                                />
                                            </div>

                                            <div className="rn-form-group">
                                                <input 
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                required
                                                />
                                            </div>
                                            
                                            <div className="rn-form-group">
                                                <textarea 
                                                name="message"
                                                placeholder="Your Message"
                                                required
                                                >
                                                </textarea>
                                            </div>

                                            <div className="rn-form-group">
                                                <button className="btn-default" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
                                            </div> 

                                            <div className="rn-form-group">
                                                {result ? <Result /> : null}
                                            </div> 
                                        </form>
                                    </div>

                                </div>
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="thumbnail mb_md--30 mb_sm--30">
                                    <img className="w-100" src="/assets/images/about/about-12.webp" alt="About Images"/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Contact Page Area  */}

                {/* Start Contact Map  
                <div className="rn-contact-map-area position-relative">
                    <div style={{ height: '650px', width: '100%' }}>
                        <GoogleMapReact
                        defaultCenter={center}
                        defaultZoom={zoom}
                        >
                            
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                        </GoogleMapReact>
                    </div>
                </div>
                 End Contact Map  */}
                


                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />
            </React.Fragment>
        );
    
}
export default Contact