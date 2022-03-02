import React,{useEffect, useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard'; 
import Tilt from 'react-tilt'

import "./style.css"
import CountDown from "../helper/countDown";
import HeroBackg from "../../imgs/hero-shapes.png"
import HeroImg from "../../imgs/hero.png"
import Brand from "../../imgs/brands/b.png"
import Brand2 from "../../imgs/brands/b2.png"
import Brand3 from "../../imgs/brands/b3.png"
import Brand4 from "../../imgs/brands/b4.png"
import Brand5 from "../../imgs/brands/b5.png"



function Hero() {

    const [AddressToCopy,setAddressToCopy] = useState("");
    const [Copied,setCopied] = useState(false);
    useEffect(() => {
        setAddressToCopy("0xAE973B22d9764476041043C7d6eFdF20a5E6093F")
    },[])

    return (
        <div className="hero-area" id="hero">
            <img src={HeroBackg} className="hero_img" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="hero-wrp">
                            <h2>Smart<span>Finance</span></h2>
                            <p className="whiteColor">A decentralised platform powered by AI</p>
                            <p>A new AI-powered platform that offers DeFi services as well as P2P trading and investing tools. All of this is made possible by our unique Artificial Intelligence, Machine Learning, and Mathematical Expectations approach.</p>
                            <CountDown date="00/00/2000" />{/* you could use both date formate no problem: Oct 25, 2023 OR 12/25/2022 */}
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img">
                            <img src={HeroImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <div className="copyAddress">
                            <p>Contract Address</p>
                            <CopyToClipboard text={AddressToCopy} onCopy={() => {
                                setCopied(true)
                                setTimeout(() => {
                                    setCopied(false)
                                }, 2000);
                            }}>
                            <label>
                                <input type="text" defaultValue={AddressToCopy} readOnly/>
                                <button type="button">Copy Address</button>
                            </label>
                            </CopyToClipboard>
                            {Copied ? <span className="copied_success">Copied to clipboard!</span> : "" }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="brands">
                            <Tilt className="willMove" options={{ max : 35,perspective:1000, }}>
                               <a href="https://www.digitaljournal.com/pr/smart-finance-announces-launch-of-ico-for-new-cryptocurrency-platform-based-on-ai-and-machine-learning" target="_blank" rel="noopener noreferrer">
                                    <img src={Brand} alt="" />
                               </a>
                            </Tilt>
                            <Tilt className="willMove" options={{ max : 35,perspective:1000, }}>
                               <a href="/#" target="_blank" rel="noopener noreferrer">
                                    <img src={Brand2} alt="" />
                               </a>
                            </Tilt>
                            <Tilt className="willMove" options={{ max : 35,perspective:1000, }}>
                               <a href="/#" target="_blank" rel="noopener noreferrer">
                                    <img src={Brand3} alt="" />
                               </a>
                            </Tilt>
                            <Tilt className="willMove" options={{ max : 35,perspective:1000, }}>
                               <a href="https://www.benzinga.com/pressreleases/22/01/25108833/smart-finance-announces-launch-of-ico-for-new-cryptocurrency-platform-based-on-ai-and-machine-learn" target="_blank" rel="noopener noreferrer">
                                    <img src={Brand4} alt="" />
                               </a>
                            </Tilt>
                            <Tilt className="willMove" options={{ max : 35,perspective:1000, }}>
                               <a href="https://www.marketwatch.com/press-release/smart-finance-announces-launch-of-ico-for-new-cryptocurrency-platform-based-on-ai-and-machine-learning-2022-01-23?tesla=y" target="_blank" rel="noopener noreferrer">
                                    <img src={Brand5} alt="" />
                               </a>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
