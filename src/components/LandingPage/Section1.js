import React from "react";

class Section1 extends React.Component{
    render(){
        return(
            <div className="row">
					<div className="col height_control">
						<div className="LandingPage_text_box1">
							<p className="LandingPage_text1">40 Years of Investing Innovation</p>
							<p className="LandingPage_text2">First VC Firm Est. 1981</p>
						</div>
					</div>
					<div className="col height_control" >
							<img className="img LandingPage_image1" src={process.env.PUBLIC_URL + '/media/images/Image1.jpg'} alt="LandingPage_image1"/>
							<div className="LandingPage_image1_overlay"></div>
					</div>
			</div>
        );
    }
}

export default Section1;