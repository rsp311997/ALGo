import React from "react";
import "../../style/CompaniesPage.css";
import Footer from "../Basic/Footer.js";
import NavBar from "../Basic/NavBar.js";
import NavBar2 from "../Basic/NavBar2.js";


class CompaniesPage extends React.Component{
    render(){
        return(
            <div className="CompaniesPage">
                   {/*Section 1*/}
                    <NavBar2 />
                   {/*Section 1*/}

                   {/*Section 2*/}
                   
                   <div className="companies_section2">
                       <div className="companies_section2_bgimage" style={{backgroundImage: "url("+process.env.PUBLIC_URL+"/media/images/svg/Group_58.svg)"}}>

                            <div className="row companies_section2_row justify-content-center">

                                <div className="col-lg-3 Section2_text1">
                                    Our Team
                                </div>
                                <div className="col-lg-8 Section2_text2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pulvinar in quam euismod facilisi semper amet. 
                                Sed mi integer fringilla faucibus rhoncus imperdiet nisi. Faucibus arcu, elit laoreet gravida eget morbi venenatis. 
                                Id egestas fringilla augue ultricies scelerisque aliquam et auctor amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nulla non pulvinar in quam euismod facilisi semper amet. Sed mi integer fringilla faucibus rhoncus imperdiet nisi. Faucibus arcu, 
                                elit laoreet gravida eget morbi venenatis. Id egestas fringilla augue ultricies scelerisque aliquam et auctor amet.
                                </div>

                            </div>
                            
                       </div>
                   </div>
                   {/*Section 2*/}

                   {/* Section 3 */}
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-3 col-sm-3 mt-5">
                            <div className="wapper">
                                <div className="wapper_text_box">
                                    <p> <span className="wapper_text1"> Rahul Panwar </span> <br/> <span className="wapper_text2">System Engineer</span> </p>
                                </div>
                                <img className="img-fluid companies_section3_img" src={process.env.PUBLIC_URL+'/media/images/rec40.png'} alt="partners"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 mt-5">
                            <div className="wapper">
                                <div class="wapper_text_box">
                                <p> <span className="wapper_text1"> Rahul Panwar </span> <br/> <span className="wapper_text2">System Engineer</span> </p>
                                </div>
                                <img className="img-fluid companies_section3_img" src={process.env.PUBLIC_URL+'/media/images/rec40.png'} alt="partners"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 mt-5">
                            <div className="wapper">
                                <div class="wapper_text_box">
                                <p> <span className="wapper_text1"> Rahul Panwar </span> <br/> <span className="wapper_text2">System Engineer</span> </p>
                                </div>
                                <img className="img-fluid companies_section3_img" src={process.env.PUBLIC_URL+'/media/images/rec40.png'} alt="partners"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 mt-5">
                            <div className="wapper">
                                <div class="wapper_text_box">
                                <p> <span className="wapper_text1"> Rahul Panwar </span> <br/> <span className="wapper_text2">System Engineer</span> </p>
                                </div>
                                <img className="img-fluid companies_section3_img" src={process.env.PUBLIC_URL+'/media/images/rec40.png'} alt="partners"/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 mt-5">
                            <div className="wapper">
                                <div class="wapper_text_box">
                                <p> <span className="wapper_text1"> Rahul Panwar </span> <br/> <span className="wapper_text2">System Engineer</span> </p>
                                </div>
                                <img className="img-fluid companies_section3_img" src={process.env.PUBLIC_URL+'/media/images/rec40.png'} alt="partners"/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 mt-5">
                            <div className="wapper">
                                <div class="wapper_text_box">
                                <p> <span className="wapper_text1"> Rahul Panwar </span> <br/> <span className="wapper_text2">System Engineer</span> </p>
                                </div>
                                <img className="img-fluid companies_section3_img" src={process.env.PUBLIC_URL+'/media/images/rec40.png'} alt="partners"/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 mt-5">
                            <div className="wapper">
                                <div class="wapper_text_box">
                                <p> <span className="wapper_text1"> Rahul Panwar </span> <br/> <span className="wapper_text2">System Engineer</span> </p>
                                </div>
                                <img className="img-fluid companies_section3_img" src={process.env.PUBLIC_URL+'/media/images/rec40.png'} alt="partners"/>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 mt-5">
                            <div className="wapper">
                                <div class="wapper_text_box">
                                <p> <span className="wapper_text1"> Rahul Panwar </span> <br/> <span className="wapper_text2">System Engineer</span> </p>
                                </div>
                                <img className="img-fluid companies_section3_img" src={process.env.PUBLIC_URL+'/media/images/rec40.png'} alt="partners"/>
                            </div>
                        </div>
                        
                    </div>
                   {/* Section 3 */}


                   {/* Section 4 */}
                    <Footer />
                   {/* Section 4 */}

            </div>
        );
    }
}

export default CompaniesPage;