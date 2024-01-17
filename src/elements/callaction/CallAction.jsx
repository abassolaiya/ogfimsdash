import React from 'react'
const CallAction = () => {
    return (
        <div className="call-to-action-wrapper call-to-action text-white-wrapper  ptb--40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4" >
                        <div className="inner text-center">
                            <h3 className="text-dark text-center">Have a question ?</h3>
                            <p className="description text-center">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4" style={{background:'../assets/images/icons/contact-area-bg.webp'}}>
                        <div className="inner text-center contact-area-bg" style={{background:'../assets/images/icons/contact-area-bg.webp'}}>
                            <a className="btn-default btn-large mt--40" href="/"><span>Contact us</span></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="inner text-center">
                            <img src="../assets/images/icons/contact-area.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CallAction;