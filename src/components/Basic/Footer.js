import React from "react";

import "../../style/Footer.css";

class Footer extends React.Component{
    render(){
        return(
            <div className="LandingPage_footer text-center">
						<div className="row ml-3 mr-3 justify-content-center align-items-center">
							<div className="col-12 mt-5 LandingPage_text_head text-center">
								Algo
							</div>
							<div className="col-5 mt-5 LandingPage_text text-center">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget scelerisque pulvinar.
							</div>
							<div className="col-8 text-left mt-5 LandingPage_text">
								Copyright © 2021 Rho Capital Partners. All rights reserved
							</div>
							<div className="col-2 mt-5 LandingPage_text">
								Terms & Conditions
							</div>
							<div className="col-2 mt-5 LandingPage_text">
								Privacy Policy
							</div>
						</div>
			</div>
        );
    }
}

export default Footer;