import React from "react";
import "./style.css" 
import Tilt from 'react-tilt'

import ScrollAnimation from 'react-animate-on-scroll'; 
import PartnersBackg from "../../imgs/wave.png" 
import PartnerLogo from "../../imgs/partners/p.png"
import PartnerLogo2 from "../../imgs/partners/p2.png"
import PartnerLogo3 from "../../imgs/partners/p3.png"
import PartnerLogo4 from "../../imgs/partners/p4.png"
import PartnerLogo5 from "../../imgs/partners/p5.png"
import PartnerLogo6 from "../../imgs/partners/p6.png" 


const PertnerBlk = ({img,url}) => {
    return(
        <button type="button" className="PertnerBlk">
            <img src={img} alt="" /> 
        </button>
    )
}

function Pertners() {
    return (
        <div className="pertner-area" id="partners">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                                <h3>partners</h3>
                            </ScrollAnimation>   
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="parners"> 
                        <div className="partnersColumn">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                                <Tilt className="willMove" options={{ max : 35,perspective:1000, }} >
                                    <PertnerBlk img={PartnerLogo} />
                                </Tilt> 
                            </ScrollAnimation>   
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  
                                <Tilt className="willMove" options={{ max : 35,perspective:1000, }} >
                                    <PertnerBlk img={PartnerLogo4} />
                                </Tilt>   
                            </ScrollAnimation>   
                        </div>
                        <div className="partnersColumn">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                                <Tilt className="willMove" options={{ max : 35,perspective:1000, }} >
                                    <PertnerBlk img={PartnerLogo2} />
                                </Tilt> 
                            </ScrollAnimation>   
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                                <Tilt className="willMove" options={{ max : 35,perspective:1000, }} >
                                    <PertnerBlk img={PartnerLogo6} />
                                </Tilt> 
                            </ScrollAnimation>   
                        </div>
                        <div className="partnersColumn">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                                <Tilt className="willMove" options={{ max : 35,perspective:1000, }} >
                                    <PertnerBlk img={PartnerLogo3} />
                                </Tilt> 
                            </ScrollAnimation>   
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                                <Tilt className="willMove" options={{ max : 35,perspective:1000, }} >
                                    <PertnerBlk img={PartnerLogo5} />
                                </Tilt> 
                            </ScrollAnimation>   
                        </div> 
                    </div>
                </div>
            </div>
            <img src={PartnersBackg} className="PertnerShape" alt="" />
        </div>
    );
}

export default Pertners;