import React from "react";
import {Link} from "react-router-dom";

class Section5 extends React.Component{
    render(){
        return(
            <div className="LandingPage_mt_5_grid">
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item list_group_item">
                        <div className="li_wrapper">
                            <div className="li_text">
                                LOGO
                            </div>
                            <img 
                                className="img list_img" 
                                src={process.env.PUBLIC_URL + '/media/images/rec1.png'} 
                                alt="rec1"
                            />
                        </div>               
                    </li>
                    <li className="list-group-item list_group_item">
                        <div className="li_wrapper">
                                <div className="li_text">
                                    LOGO
                                </div>
                                <img 
                                    className="img list_img" 
                                    src={process.env.PUBLIC_URL + '/media/images/rec2.png'} 
                                    alt="rec2"
                                />
                        </div> 
                    </li>
                    <li className="list-group-item list_group_item">
                        <div className="li_wrapper">
                                <div className="li_text">
                                    LOGO
                                </div>
                                <img 
                                    className="img list_img" 
                                    src={process.env.PUBLIC_URL + '/media/images/rec3.png'} 
                                    alt="rec3"
                                />
                        </div>
                    </li>
                    <li className="list-group-item list_group_item">
                        <div className="li_wrapper">
                                <div className="li_text">
                                    LOGO
                                </div>
                                <img 
                                    className="img list_img" 
                                    src={process.env.PUBLIC_URL + '/media/images/rec4.png'} 
                                    alt="rec4"
                                />
                        </div>
                    </li>
                </ul>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item list_group_item">
                        <div className="li_wrapper">
                                <div className="li_text">
                                    LOGO
                                </div>
                                <img 
                                    className="img list_img" 
                                    src={process.env.PUBLIC_URL + '/media/images/rec5.png'} 
                                    alt="rec5"
                                />
                        </div>
                    </li>
                    <li className="list-group-item list_group_item">
                        <div className="li_wrapper">
                                <div className="li_text">
                                    LOGO
                                </div>
                                <img 
                                    className="img list_img" 
                                    src={process.env.PUBLIC_URL + '/media/images/rec2.png'} 
                                    alt="rec2"
                                />
                        </div>
                    </li>
                    <li className="list-group-item list_group_item">
                        <div className="li_wrapper">
                                <div className="li_text">
                                    LOGO
                                </div>
                                <img 
                                    className="img list_img" 
                                    src={process.env.PUBLIC_URL + '/media/images/rec3.png'} 
                                    alt="rec3"
                                />
                        </div>
                    </li>
                    <li className="list-group-item list_group_item">
                        <div className="li_wrapper">
                                <div className="li_text">
                                    LOGO
                                </div>
                                <img 
                                    className="img list_img" 
                                    src={process.env.PUBLIC_URL + '/media/images/rec4.png'} 
                                    alt="rec4"
                                />
                        </div>
                    </li>
                </ul>
            
            <div className="row">
                <div className="col-12 mt-5 text-center">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <div className="LandingPage_text7">
                        View All Companies &nbsp;
                        <img src={process.env.PUBLIC_URL + '/media/images/ArrowBody.png'} alt="Arrow Body"/>
                        <img className="LandingPage_ArrowHead" src={process.env.PUBLIC_URL + '/media/images/ArrowHead.png'} alt="Arrow Head"/>
                    </div>
                </Link>
                </div>
            </div>
        </div>
        );
    }
}

export default Section5;