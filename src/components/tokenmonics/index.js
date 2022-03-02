import React,{useRef} from "react";
import "./style.css" 
import TokenBackg from "../../imgs/tokenomics.png" 
import Icon from "../../imgs/icon.png" 
import Icon2 from "../../imgs/icon2.png" 
import Icon3 from "../../imgs/icon3.png" 
import TheBarChart from "../helper/bar-chart"; 
import Button from "../helper/button"
import ScrollAnimation from 'react-animate-on-scroll'; 
import { PieChart } from 'react-minimal-pie-chart'; 
 


function TokenmicsBlk({img,title,content}) {
  return(
    <div className="tkn-step">
      <img src={img} alt="" />
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  )
}


function Tokenomics() {

  // pie chart data
  const dataMock = [
    { title: 'Token Presale', value: 31.48, color: '#3260ed' },
    { title: 'Staking & Farming', value: 22, color: '#8ca8ff' },
    { title: 'Listing', value: 18.41, color: '#7af0d1' },
    { title: 'Liquidity', value: 17.11, color: '#3290ed' },
    { title: 'Dev Wallet', value: 5, color: '#7c7af0' },
    { title: 'Gaming', value: 5, color: '#32e4ed' }, 
    { title: 'Airdrop', value: 1, color: '#32bbed' }, 
  ];
  
  // line chart data
  const DataForLineChart = [
    { title: "USDT Reward", value: 3, value2: 30, color: "#8CA8FF" },
    { title: "Liquidity", value: 4, value2: 40, color: "#3290ED" },
    { title: "Marketing", value: 4, value2: 40, color: "#7AF0D1" }
  ];


  // For bar chart
  const colors = {
    "presale": "#3260ED",
    "liquidity": "#3290ed",
    "airdrop": "#32bbed",
    "gaming": "#32e4ed",
    "staking": "#8CA8FF",
    "dev": "#7c7af0",
    "listing": "#7af0d1"
  };  
  const data = {
    labels:["Dec 21", "Feb 22", "Apr 22", "May 22", "June 22", "Aug 22"],
    datasets: [{
      //barThickness: 100,
      //barPercentage: 0.8,
      label: 'Presale',
      data: [24000000, 24000000, 24000000, 24000000, 24000000, 24000000],
      backgroundColor: colors.presale // hoverBackgroundColor: "#3260ED",

    }, {
      //barThickness: 100,
      //barPercentage: 0.8,
      label: 'Liquidity',
      data: [12936000, 12936000, 12936000, 12936000, 12936000, 12936000],
      backgroundColor: colors.liquidity // hoverBackgroundColor: "#d65ad6",

    }, {
      //barThickness: 100,
      //barPercentage: 0.8,
      label: 'Airdrop',
      data: [0, 2310000, 2310000, 2310000, 2310000, 2310000],
      backgroundColor: colors.airdrop // hoverBackgroundColor: "6afff1"

    }, {
      //barThickness: 100,
      //barPercentage: 0.8,
      label: 'Gaming',
      data: [0, 0, 3850000, 3850000, 3850000, 3850000],
      backgroundColor: colors.gaming // hoverBackgroundColor: "rgba(0,0,0,0)"

    }, {
      //barThickness: 100,
      //barPercentage: 0.8,
      label: 'Staking',
      data: [0, 0, 0, 15400000, 15400000, 15400000],
      backgroundColor: colors.staking // hoverBackgroundColor: "rgba(0,0,0,0)"

    }, {
      //barThickness: 100,
      //barPercentage: 0.8,
      label: 'Dev',
      data: [0, 0, 0, 0, 3850000, 3850000],
      backgroundColor: colors.dev // hoverBackgroundColor: "rgba(0,0,0,0)"

    }, {
      //barThickness: 100,
      //barPercentage: 0.8,
      label: 'Listing',
      data: [0, 0, 0, 0, 0, 14174000],
      backgroundColor: colors.listing // hoverBackgroundColor: "rgba(0,0,0,0)"

    }],
  };
 
  const toolTip = useRef()

  


    return (
      <div style={{overflow:"hidden"}}>
        <div className="customTooltip" ref={toolTip}>Hello</div>
        <div className="tokenomics-area" id="tokenomics">
            <img src={TokenBackg} className="tokenomics-backg" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>  
                                <h3>Tokenomics</h3>
                            </ScrollAnimation>   
                        </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="tokenomics-step">
                        <TokenmicsBlk img={Icon} title="Passive Income" content={"3% of each transaction as USDT rewards."} /> 
                        <TokenmicsBlk img={Icon2} title="Liquidity Lock" content={"The liquidity will be locked for a 10 year period."} /> 
                        <TokenmicsBlk img={Icon3} title="Vesting" content={"5% of Dev wallet, locked for 6 months."} />  
                      </div>
                    </div> 
                    <div className="col-lg-6">
                        <div className="pi-data tknTop">  
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                                <div className="tkn_distribution_wrp"> 
                                  <div className="mainPieCgar"> 
                                    <PieChart 
                                      animationDuration={1000} 
                                      animate={true} 
                                      data={dataMock} 
                                      // label={({ dataEntry }) => dataEntry.value+"%"}  
                                      // labelStyle={{
                                      //   fontSize: '5px',
                                      //   fontFamily: 'sans-serif',
                                      //   fill:"#fff"
                                      // }}
                                       
                                      onMouseOver={(e, index) => { 
                                        toolTip.current.innerHTML = dataMock[index].title+";"+" SMF; "+dataMock[index].value+" %"
                                        e.target.style.opacity = "0.8"
                                        e.target.style.cursor = "pointer" 
                                        toolTip.current.style.top = e.pageY+"px"
                                        toolTip.current.style.left = e.pageX+"px" 
                                        toolTip.current.classList.add('active')
                                      }} 
                                      onMouseOut={(e, index) => {
                                        e.target.style.opacity = "1" 
                                        e.target.style.cursor = "auto"
                                        toolTip.current.classList.remove('active')
                                      }} 
                                      lineWidth={45} 
                                      labelPosition={75}  
                                    /> 
                                    <p>Total supply <small>77,000,000 SMF</small></p>
                                  </div>
                                  <ul className="ul_data-list">
                                    <h5>Token Distribution</h5>
                                    {dataMock && dataMock.map((data,id) => {
                                      return <li key={id}><div><small style={{background:data.color}}></small> {data.title}</div> <span>{data.value}%</span></li>
                                    })} 
                                  </ul>
                                </div> 
                            </ScrollAnimation>  
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                        <div className="transactionTax tknTop">
                            <h5>transaction Tax <span>11%</span></h5>
                            <div className="stickChart">
                                {DataForLineChart && DataForLineChart.map((data,id) => {
                                  return <div key={id} style={{width:data.value2+"%",background:data.color}}><span>{data.title+ " " + data.value+"%"}</span></div>
                                })}   
                            </div>
                            <ul className="ul_data-list" style={{margin:"0"}}>
                                {DataForLineChart && DataForLineChart.map((data,id) => {
                                  return <li key={id}><div><small style={{background:data.color}}></small> {data.title}</div> <span>{data.value}%</span></li>
                                })}
                            </ul>
                        </div>
                        </ScrollAnimation>  
                    </div> 
                    <div className="col-lg-12">
                        <div className="the-bar-chart">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                              <h5>token release</h5> 
                              <TheBarChart datasets= {data}  /> 
                            </ScrollAnimation>  
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="proof_of_lock">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                            <h4>Proof Of Lock</h4>
                            <div className="proof_of_lock-btns"> 
                                <Button classes={"theme-btn"} text="Airdrop" />
                                <Button classes={"theme-btn"} text="Gaming" />
                                <Button classes={"theme-btn"} text="Staking" />
                                <Button classes={"theme-btn"} text="Dev" />
                                <Button classes={"theme-btn"} text="Listing" /> 
                            </div>
                            </ScrollAnimation>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Tokenomics;
