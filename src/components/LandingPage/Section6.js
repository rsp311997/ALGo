import React from "react";
import {Link} from "react-router-dom";

class Section6 extends React.Component{
    render(){
        return(
            <div>
                <div className="row justify-content-center mb-5">
					<div className="col-6 text-center LandingPage_text8">
						Creating value through partnership,experience, and trust
					</div>
				</div>
				<div className="row mb-5">
					<div className="col-lg-6 col-md-6 col-sx-12 col-12 LandingPage_side_image">
						<img className="img img-fluid LandingPage_side_image" src={process.env.PUBLIC_URL + '/media/images/Slide1.png'}/>
					</div>
					<div className="col-lg-6 col-md-6 col-sx-12 col-12">
						<div className="row">
							<div className="col-11 LandingPage_text9 mt-5">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pulvinar in quam euismod 
								facilisi semper amet. Sed mi integer fringilla faucibus rhoncus imperdiet nisi. Faucibus arcu, 
								it laoreet gravida eget morbi venenatis. Id egestas fringilla augue ultricies scelerisque aliquam 
								t auctor amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pulvinar in quam 
								euismod facilisi semper amet. Sed mi integer fringilla faucibus rhoncus imperdiet nisi. Faucibus 
								arcu, elit laoreet gravida eget morbi venenatis. Id egestas fringilla augue ultricies scelerisque 
								aliquam et auctor amet
								
							</div>
							<div className="col-12 mt-5 text-center">
							<Link to="/" style={{ textDecoration: 'none'}}>
								<button className="btn LandingPage_button"> 
									<span className="LandingPage_button_text">Meet the Team</span> 
									<img src={process.env.PUBLIC_URL + '/media/images/WhiteAroBody.png'}/>
									<img className="LandingPage_ArrowHead" src={process.env.PUBLIC_URL + '/media/images/WhiteAroHead.png'}/> 
								</button>
							</Link>
							</div>
						</div>
					</div>
				</div>
            </div>
        );
    }
}


export default Section6;