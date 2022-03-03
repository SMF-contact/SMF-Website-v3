import React from "react";
import "./style.css" 
import ScrollAnimation from 'react-animate-on-scroll'; 
import TeamBackg from "../../imgs/team-back.png" 
import TeamAvater from "../../imgs/team/avatar.png"
import TeamAvater2 from "../../imgs/team/avatar2.png"
import TeamAvater3 from "../../imgs/team/avatar3.png"
import TeamAvater4 from "../../imgs/team/avatar4.png"
import TeamAvater5 from "../../imgs/team/avatar5.png"
import TeamAvater6 from "../../imgs/team/avatar6.png"
import TeamAvater7 from "../../imgs/team/avatar7.png"
import TeamAvater8 from "../../imgs/team/avatar8.png"


const TeamBlk = ({img,name,position,content}) => {
    return(
        <div className="col-lg-3 col-md-6"> 
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                <div className="teamBlk">
                    <img src={img} alt="" />
                    <h5>{name} <span>{position}</span></h5>
                    <p>{content}</p>
                </div>
            </ScrollAnimation>  
        </div>
    )
}

function Team() {
    return (
        <div className="team-area" id="team">
            <img src={TeamBackg} className="TeamBackg" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>   
                                <h3>Our team</h3>
                            </ScrollAnimation>   
                        </div>
                    </div>
                </div>
                <div className="row">  
                    <TeamBlk 
                        img={TeamAvater} 
                        name={"TheZarchitect"} 
                        position="Founder" 
                        content="Network and Security Solutions Architect as professional career, father, and husband fascinated by high-end and futuristic technology."
                    />
                    <TeamBlk 
                        img={TeamAvater2} 
                        name={"Florian"} 
                        position="Head of Marketing" 
                        content="Father. Beliver. Visionary. Master of Arts in management - education - diversity.
                        You dont need to be intelligent to be Smart, you just need education."
                    />
                    <TeamBlk 
                        img={TeamAvater3} 
                        name={"Neil Doody"} 
                        position="Chief Technical Officer" 
                        content="Veteran technical guy, 20+ years working in large scale migrations and infrastructure design as an IT contractor, Working for large corporate companies. Previous SC clearance to work on several goverment contracts."
                    />
                    <TeamBlk 
                        img={TeamAvater4}
                        name={"Donna"} 
                        position="Chief Legal Officer" 
                        content="Law enthusiast with a passion for the fine print and policy implications of digital currencies. Living by the motto of high standard of professional conduct, in the realm of digital innovation where it resonates well that « Only lawyers and painters can turn white into black »."
                    />
                    <TeamBlk 
                        img={TeamAvater5} 
                        name={"Fabdou"} 
                        position="Risk Manager" 
                        content="More than 20 years serving B2B customers, always in the information technology, security, and telecom, I am always at the service of my customers."
                    />
                    <TeamBlk 
                        img={TeamAvater6} 
                        name={"Balram"} 
                        position="Blockchain Expert" 
                        content="Software engineer & web3 developer, spent the last two years freelancing for DeFi protocols, because DeFi as he says is not something you can learn at school. His ambition is to make DeFi accessible to everyone."
                    />
                    <TeamBlk 
                        img={TeamAvater7} 
                        name={"The AI enthusiast"} 
                        position="AI Architect" 
                        content="Electrical and computer science engineer with a specialization in Artificial Intelligence who spends most of his time in front of computer trying out new things."
                    />
                    <TeamBlk 
                        img={TeamAvater8} 
                        name={"Tony"} 
                        position="Editor" 
                        content="Believer and a follower of crypto on the international market sinse a long time trader based on my experience in the creation of several startups."
                    />
                </div>
            </div>
        </div>
    );
}

export default Team;
