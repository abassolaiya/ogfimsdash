import React, { useState, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import Pagination from "../elements/common/Pagination";
import ScrollToTop from 'react-scroll-up';
import { useParams, useHistory } from "react-router-dom";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { baseURL } from '../httpService';
import { Link } from 'react-router-dom';

const NewsUpdate = ()=>{
    const [news, setNews]= useState([]);
    const history = useHistory();

    useEffect(()=>{
        if(news.length === 0){
            getNews();
        }
    },[])

    const getNews = ()=>{
        const headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
        fetch(`${baseURL}posts?limit=100&page=1&order=desc`, {method: 'GET', headers})
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson.posts);
          setNews(responseJson.posts);
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
            
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--31"  data-black-overlay="7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title text-white">Updates</h2>
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
                            {   news.length>0 ? 
                                news.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" key={i}>
                                    <div className="im_box">
                                        <div className="thumbnail">
                                            <Link to="/">
                                                <img className="w-100" src={`${baseURL}${value.featured_image}`} alt="Blog Images"/>
                                            </Link>
                                        </div>
                                        <div className="content">
                                            <div className="inner">
                                                <div className="content_heading">
                                                    <h4 className="title">
                                                        {value.title}
                                                    </h4>
                                                    <br/>
                                                    <p className="description descriptionTrim" dangerouslySetInnerHTML={{__html: value.content}} ></p>
                                                </div>
                                            </div>
                                            <Link className="transparent_link" to={{pathname: "/news-details", state:{ data: value }}} > </Link>
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
export default NewsUpdate;
