import React from "react";
import {Link} from "react-router-dom";

class Section3 extends React.Component{
    render(){
        return(
        <div className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col">
                    <div className="card card_animate">
                        <img className="card-img-top" src={process.env.PUBLIC_URL + '/media/images/Card1.png'} alt="Card1"/>
                        <div className="card-body text-center">
                            <div className="LandingPage_card_title">
                                Algo Ventures
                            </div>
                            <div className="LandingPage_card_description mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia.
                            </div>
                            <div className="mt-3">
                                <Link to="/" style={{ textDecoration: 'none'}}> <p className="btn LandingPage_card_Buttun">VISIT</p> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card_animate">
                        <img className="card-img-top" src={process.env.PUBLIC_URL + '/media/images/Card1.png'} alt="Card1"/>
                        <div className="card-body text-center">
                            <div className="LandingPage_card_title">
                                Algo+
                            </div>
                            <div className="LandingPage_card_description mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia.
                            </div>
                            <div className="mt-3">
                                <Link to="/" style={{ textDecoration: 'none'}}> <p className="btn LandingPage_card_Buttun">VISIT</p> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card_animate">
                        <img className="card-img-top" src={process.env.PUBLIC_URL + '/media/images/Card1.png'} alt="Card1"/>
                        <div className="card-body text-center">
                            <div className="LandingPage_card_title">
                                Algo Canada
                            </div>
                            <div className="LandingPage_card_description mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia.
                            </div>
                            <div className="mt-3">
                                <Link to="/" style={{ textDecoration: 'none'}}> <p className="btn LandingPage_card_Buttun">VISIT</p> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Section3;