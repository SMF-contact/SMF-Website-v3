import React from "react";
import "./style.css"
import CountDown from "../helper/countDown"; 
import ScrollAnimation from 'react-animate-on-scroll'; 

function Presale() {
    return (
        <div className="presale-area" id="presale"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                                <h3>Presale Details</h3>
                            </ScrollAnimation>   
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                        <div className="presale-wrp"> 
                            <ul>
                                <li>
                                    <b>Start Rate</b>
                                    <span>TBD</span>
                                </li>
                                <li>
                                    <b>TOTAL TOKENS</b>
                                    <span>TBD</span>
                                </li>
                                <li>
                                    <b>LIQUIDITY</b>
                                    <span>TBD</span>
                                </li>
                                <li>
                                    <b>CURRENCY</b>
                                    <span>BNB</span>
                                </li>
                                <li>
                                    <b>end date</b>
                                    <span>TBD</span>
                                </li>
                                <li>
                                    <b>PRESALE RATE</b>
                                    <span>1 BNB = TBD</span>
                                </li>
                                <li>
                                    <b>LISTING RATE</b>
                                    <span>1 BNB = TBD</span>
                                </li>
                                <li>
                                    <b>MIN/MAX BUY</b>
                                    <span>0.1 - 5 BNB </span>
                                </li>
                            </ul>
                        </div>
                        </ScrollAnimation>   
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-7">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                            <div className="airdrop">
                                <h4>Airdrop:</h4>
                                <p>Hold at least 65% from your initial presale contribution for 30 days and you will get your shares of 1% from the total supply. </p>
                            </div>
                        </ScrollAnimation>   
                    </div>
                    <div className="col-lg-4 col-md-5 offset-lg-1">
                        <div className="countdown">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                                <CountDown date="00/00/0000" />
                            </ScrollAnimation>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presale;
