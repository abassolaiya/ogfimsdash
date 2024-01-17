import React, { useState, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import Pagination from "../elements/common/Pagination";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { baseURL } from '../httpService';
import { Link } from 'react-router-dom';

const Publications = ()=>{
    const [publications, setPublications]= useState([]);

    useEffect(()=>{
        if(publications.length === 0){
            getPublications();
        }
    },[])

    const getPublications = ()=>{
        const headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
        fetch(`${baseURL}publications?limit=100&page=1&order=desc`, {method: 'GET', headers})
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson.publications);
          setPublications(responseJson.publications);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return(
        <React.Fragment>
            <PageHelmet pageTitle='Updates' />

            <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* Start Breadcrump Area */}
            
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--20"  data-black-overlay="6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title text-white">Publications</h2>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* End Breadcrump Area */}


            {/* Start Blog Area */}
            <div className="rn-blog-area ptb--120 bg_color--1">
                <div className="container">
                    

                    <div className="row mt--30 blog-style--2">
                            {   publications.length>0 ? 
                                publications.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" key={i}>
                                    <div className="im_box">
                                        <div className="thumbnail">
                                            <Link to={{pathname: "/publication-details", state:{ data: value }}}>
                                                <img className="w-100" src={`${baseURL}${value.thumbnail}`} alt="thumbnail"/>
                                            </Link>
                                        </div>
                                        <div className="content">
                                            <div className="inner">
                                                <div className="content_heading">
                                                    <h4 className="title" style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                                                        <Link to={{pathname: "/publication-details", state:{ data: value }}}>{value.title}</Link>
                                                    </h4>
                                                    <br/>
                                                    <p className="description descriptionTrim" dangerouslySetInnerHTML={{__html: value.body}} ></p>
                                                </div>
                                            </div>
                                            <Link className="transparent_link" to={{pathname: "/publication-details", state:{ data: value }}}></Link>
                                        </div>
                                    </div>
                                </div>
                            )):
                            null
                            }
                        </div>    


                    <div className="row mt--60">
                        <div className="col-lg-12">
                            {/* Start Pagination Area */}
                           {/* <Pagination />*/}
                            {/* End Pagination Area */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Area */}
            
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            <Footer /> 

        </React.Fragment>
    )
    
}
export default Publications;
