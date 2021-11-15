import React from 'react';
import NavBar from '../Basic/NavBar.js';
import "../../style/TeamsDetailPage.css";
import Footer from '../Basic/Footer.js';
import "../../style/Footer.css";


/** 
 * Created or Update by : Rahul Panwar
 * Last Create or Updated on : 10th Nov 2021
 * Functionality : Render NavBar and Section component populated with data fetched from database 
*/
class TeamsDetailPage extends React.Component{
    constructor(props){
        super(props)

        this.state={
            profile : {
                IMAGE_URL:process.env.PUBLIC_URL+"/media/images/rec40.png",
                name: "Peter KalKanis",
                designation: "Chief Financial Officer",
                description: "Canada is home to some of the world's most innovative people and ideas. When entrepreneurs choose to partner with Rho Canada Ventures, they gain access to a powerful network of connections that are dedicatted to helping them succeed in a big way.",
                biography: "Habib Kairouz is a managing partner of Rho Capital Partners, Rho Ventures and Rho Acceleration as well as a member of the Investment Committees of Rho Canada Ventures and Rho Fund Investors.\n With over 25 years of experience in technology, private equity, and venture capital investing, Habib seeks to partner with entrepreneurs who are visionaries, hungry to build massive opportunities, confident enough to challenge established market leaders and charismatic enough to attract top-tier partners,\n customers and other business personnel.Habib joined Rho in 1993 and focuses on investments in new media, information technology and communication companies at various stages of development – from seed stage to private equity. Prior to Rho, Habib worked in investment banking and leveraged buyouts in New York with Reich & Co. and Jesup & Lamont.His interests also extend internationally to the impact of the Internet on globalization and its disruption of geopolitical boundaries, as well as solutions to the Middle East conflict. A native of Lebanon, Habib is involved with a number of nonprofit organizations focused on reforms and economic development there.Habib has a passion for skiing and tennis. Habib received a B.S. in engineering and a B.A. in economics from Cornell University and an M.B.A. in finance from Columbia University. Follow Habib on Twitter, and connect with him on LinkedIn.",
                contact:[
                    { name: "facebook", url: "https://www.facebook.com/", ICON_URL: process.env.PUBLIC_URL + "/media/images/svg/FaceBookWhite.svg" },
                    { name: "linkedln", url: "https://www.twitter.com", ICON_URL: process.env.PUBLIC_URL + "/media/images/svg/LinkedlnWhite.svg" },
                    { name: "twitter", url: "https://www.linkedln.com", ICON_URL: process.env.PUBLIC_URL + "/media/images/svg/TwitterWhite.svg" },
                ],
                keyFacts:[
                        "Convercent",
                        "Dashlane",
                        "Dexai Robotics",
                        "Kasisto",
                        "ON24 (NYSE: ONTF)",
                        "Passport",
                        "Pawlicy",
                        "Philo",
                        "Seated",
                        "Seat Geek",
                        "Snagajob",
                        "Suzy",
                        "Trialjectory",
                        "Vertoe",
                ],
                companies:[
                        "Convercent",
                        "Dashlane",
                        "Dexai Robotics",
                        "Kasisto",
                        "ON24 (NYSE: ONTF)",
                        "Passport",
                        "Pawlicy",
                        "Philo",
                        "Seated",
                        "Seat Geek",
                        "Snagajob",
                        "Suzy",
                        "Trialjectory",
                        "Vertoe",
                ]
            }
        }
    }
    render(){
        return (
            <div className="teamsdetailpage">
                {/* Section 0 */}
                    <NavBar/>
                {/* Section 0 */}

                {/* Section 1 */}
                    <div className="teamsdetail-section1">
                            <div className="teamsdetail-section1-bgimage" style={{backgroundImage:"url("+process.env.PUBLIC_URL+"/media/images/svg/Group_58.svg)"}}>
                                <div className="row justify-content-center teamsdetail-section1-row-height">
                                    <div className="col-lg-4 text-center">
                                        <div className="row justify-content-center">
                                            <div className="col-12 text-center">
                                                <div className="teamsdetail-section1-profile-img-box">
                                                    <div className="teamsdetail-section1-profile-img-box2">
                                                        <img className="img-fluid teamsdetail-section1-profile-img" src={this.state.profile.IMAGE_URL} alt="profile"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 text-center teamsdetail-section1-text-name">
                                                {this.state.profile.name}
                                            </div>
                                            <div className="col-12 mb-3 text-left teamsdetail-section1-text-designation">
                                                <div className="row">
                                                    {this.state.profile.contact.map((obj,index)=>{
                                                        return(
                                                            <div key={index} className="col-1">
                                                                <a href={obj.url} 
                                                                
                                                                style={{ textDecoration: 'none'}}> 
                                                                    <div className="ul_Icon_Box text-center">
                                                                        <img 
                                                                            className="img img-fluid" 
                                                                            src= {obj.ICON_URL}
                                                                            alt="FaceBook"/>
                                                                            {}
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        );
                                                    })}
                                                    <div className="col">
                                                        {this.state.profile.designation}
                                                    </div>
					                            </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 text-center text-justify teamsdetail-section1-text-description">
                                        <div className="row">
                                            <div className="col-12 text-left">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL+"/media/images/svg/invertedCoomaLeft.svg"} alt="InverteCommaLeft"/>
                                                <img className="img-fluid" src={process.env.PUBLIC_URL+"/media/images/svg/invertedCoomaLeft.svg"} alt="InverteCommaLeft"/>
                                            </div>
                                            <div className="col-12 mt-2 mb-2">
                                                {this.state.profile.description}
                                            </div>
                                            <div className="col-12 text-right">
                                                <img className="img-fluid" src={process.env.PUBLIC_URL+"/media/images/svg/invertedCoomaRight.svg"} alt="InverteCommaRight"/>
                                                <img className="img-fluid" src={process.env.PUBLIC_URL+"/media/images/svg/invertedCoomaRight.svg"} alt="InverteCommaRight"/>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                    </div>
                {/* Section 1 */}

                {/* Section 2 */}
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-3 text-left">
                            <ul className="teamsdetail-section2-ul">
                                <li>
                                    <span className="teamsdetail-section2-ul-heading">Key Facts</span>
                                </li>
                                <li className="mb-5 teamsdetail-section2-ul-list-bar">
                                </li>
                                {this.state.profile.keyFacts.map((fact,index)=>{return (<li key={index} className="teamsdetail-section2-ul-list-text">{fact}</li>)})}
                            </ul>
                        </div>
                        <div className="col-lg-4 text-justify">
                            <ul className="teamsdetail-section2-ul">
                                <li className="mb-5">
                                    <span className="teamsdetail-section2-ul-heading">Biography</span>
                                    <div className="teamsdetail-section2-ul-list-bar"></div>
                                </li>
                                <li>
                                    {this.state.profile.biography}
                                </li>
                            </ul>    
                        </div>
                        <div className="col-lg-2 text-left">
                            <ul className="teamsdetail-section2-ul">
                                <li>
                                    <span className="teamsdetail-section2-ul-heading">Companies</span>
                                </li>
                                <li className="mb-5 teamsdetail-section2-ul-list-bar">
                                </li>
                                {this.state.profile.companies.map((company,index)=>{return (<li key={index} className="teamsdetail-section2-ul-list-text">{company}</li>)})}
                            </ul>
                        </div>
                    </div>
                {/* Section 2 */}

                {/* Section 3 */}
                    <Footer />
                {/* Section 3*/}
            </div>
        );
    }
}

export default TeamsDetailPage;