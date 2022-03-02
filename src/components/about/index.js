import React from "react";
import "./style.css"
import ContentBlock from "../helper/block/"
import aboutShape from "../../imgs/about-shape.png"
import CircleBackg from "../../imgs/circles.png"
import VDefi from "../../imgs/global.svg"
import vmarketPlace from "../../imgs/networking.svg"
import ScrollAnimation from 'react-animate-on-scroll';



function About() {
    return (
        <div className="about-area" id="about">
            <img src={aboutShape} className="aboutShape" alt="" />
            <img src={CircleBackg} className="circleShape" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                                <h3>About</h3>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                            <ContentBlock classNames="intro_about mt-5">
                                <p>Smart Finance is a decentralised platform powered by Artificial Intelligence. The platform offers Defi services such as a Whale Tracker and an Anti-Scam Scanner, and a P2P Marketplace where buyers and sellers can make profitable deals.</p>
                                <p>A sophisticated artificial intelligence technology works at the back end of the Smart Finance platform. The platform has taken digital asset trading to a whole new level through the accuracy and speed of Artificial Intelligence which can increase profitability by trading smarter.</p>
                            </ContentBlock>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-6">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                            <ContentBlock classNames="btm_about mt-5" title="Defi App" img={VDefi}>
                                <p>The DeFi app is your all-in-one portal to access your investments with Smart Finance and find the trading features we have on offer.</p>
                                <p>Connect your wallet and use our DAPP to access the following services:</p>
                                <ul>
                                    <li>View your SMF token balance.</li>
                                    <li>Access SmartStake, our SMF token staking feature.</li>
                                    <li>Access SmartDex, our decentralised exchange.</li>
                                    <li>Access to our trading tools.</li>
                                </ul>
                            </ContentBlock>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-6">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                            <ContentBlock classNames="btm_about mt-5" title="Marketplace" img={ vmarketPlace}>
                                <p>The Smart Finance marketplace is where buyers and sellers of NFT collections are brought together in a secure way.</p>
                                <p>Through AI processing we will match buyers with like-minded sellers, and get recommended NFT collections based on their specific tastes.</p>
                                <p>Our AI system provides assistance with trading, to ensure an efficient and safe transaction with full arbitration services to guarantee a satisfactory outcome of every trade.</p>
                            </ContentBlock>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
