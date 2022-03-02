import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "./style.css"
import ContentBlock from "../helper/block"
import FeatureShape from "../../imgs/feature-back.png"



function Features() {
    return (
        <div className="feature-area" id="features">
            <img src={FeatureShape} className="features-backg" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                                <h3>Features</h3>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <ContentBlock classNames="mt-5" title="AntiScamAI">
                <p>The AntiScamAI analyser protects you from scams.</p>
                <p>The algorithms help to avoid criminal's scams trying to steal your hard-earned money by analysing:</p>
                <ul>
                  <li>Website & Whitepaper content</li>
                  <li>Social Media posts and comments</li>
                  <li>News Websites & Dicsussion Forum</li>
                  <li>Smart Contract code</li>
                  <li>Liquidity Lock</li>
                  <li>Dev Wallet</li>
                </ul>
              </ContentBlock>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 col-md-6">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <ContentBlock classNames="mt-5" title="AutoTradingAI">
                <p>AutoTradingAI uses deep learning to combine market sentiment & news analysis with technical chart analysis to take trading decisions.</p>
                <p>It is an AI-powered trading system with a real-time risk management engine, designed for traders of all levels.</p>
                <p>The AutoTradingAI will help you make money no matter what the market does!</p>
              </ContentBlock>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 col-md-6">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <ContentBlock classNames="mt-5" title="WhaleTrackerAI">
                <p>WhaleTrackerAI is the world's first AI-based tracker that uses innovative artificial intelligence to search for whales and track them, then analyses their trades on blockchains in real-time to trade before they do.</p>
                <p>You pre-trade the whale!</p>
              </ContentBlock>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 col-md-6">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <ContentBlock classNames="mt-5" title="Smart Wallet">
                <p>The Smart Wallet is the latest and greatest in software-based wallets. It's easy to use, flexible, and secure.</p>
                <p>You can log in using your fingerprint or Face ID, making it
                  easier than ever before to manage your wallet on the go!</p>
              </ContentBlock>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 col-md-6">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <ContentBlock classNames="mt-5" title="SearchAI">
                <p>SearchAI will be the next-generation matchmaking system, as it matches your preferences with other users preferences to provide you with the most accurate suggestions.</p>
                <p>This matchmaking is used to bring NFT buyers and sellers of similar tastes together, so you can quickly find NFT's that are of interest to you.</p>
                <p className="nopadding">Through the use of deep learning, the SearchAI system will become even more accurate over time.</p>
              </ContentBlock>
            </ScrollAnimation>
          </div>
          <div className="col-lg-4 col-md-6">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <ContentBlock classNames="mt-5" title="ArbitrationAI">
              <p>Trade using our marketplace with full peace of mind using our ArbitrationAI system.</p>
              <p>We are here to help people resolve their disputes in an intelligent manner.</p>
              <p>ArbitrationAI is performed through either AI or via a DAO vote, creating logical solutions that are good for both parties during a dispute thus always ensuring a smooth trade.</p>
              </ContentBlock>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
