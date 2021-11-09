import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <div className="LandingPage_footer text-center">
						<div className="row ml-3 mr-3 justify-content-center align-items-center">
							<div className="col-12 LandingPage_text18 text-center">
								Algo
							</div>
							<div className="col-5 LandingPage_text14 text-center">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget scelerisque pulvinar.
							</div>
							<div className="col-8 LandingPage_text15">
								Copyright © 2021 Rho Capital Partners. All rights reserved
							</div>
							<div className="col-2 LandingPage_text16">
								Terms & Conditions
							</div>
							<div className="col-2 LandingPage_text17">
								Privacy Policy
							</div>
						</div>
			</div>
        );
    }
}

export default Footer;