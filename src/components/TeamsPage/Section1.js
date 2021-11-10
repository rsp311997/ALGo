import React from "react";

class Section1 extends React.Component{
    render(){
        return(
                <div className="teams_section1">
                       <div className="teams_section1_bgimage" style={{backgroundImage: "url("+process.env.PUBLIC_URL+"/media/images/svg/Group_58.svg)"}}>

                            <div className="row teams_section1_row justify-content-center">

                                <div className="col-lg-3 Section1_text1">
                                    Our Team
                                </div>
                                <div className="col-lg-8 Section1_text2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pulvinar in quam euismod facilisi semper amet. 
                                Sed mi integer fringilla faucibus rhoncus imperdiet nisi. Faucibus arcu, elit laoreet gravida eget morbi venenatis. 
                                Id egestas fringilla augue ultricies scelerisque aliquam et auctor amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nulla non pulvinar in quam euismod facilisi semper amet. Sed mi integer fringilla faucibus rhoncus imperdiet nisi. Faucibus arcu, 
                                elit laoreet gravida eget morbi venenatis. Id egestas fringilla augue ultricies scelerisque aliquam et auctor amet.
                                </div>

                            </div>
                            
                       </div>
                </div>
        );
    }
}


export default Section1;