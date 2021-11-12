import React from "react";
import NavBar from "../Basic/NavBar.js";
import Footer from "../Basic/Footer.js";
import GridImage from "../Basic/GridImage.js";

import "../../style/NavBar.css";
import "../../style/CompaniesPage.css";
import "../../style/Footer.css";

class CompaniesPage extends React.Component{
    constructor(props){
        super(props)

        this.state={
            page:{
                title:"Our Companies",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pulvinar in quam euismod facilisi semper amet. Sed mi integer fringilla faucibus rhoncus imperdiet nisi. Faucibus arcu, elit laoreet gravida eget morbi venenatis. Id egestas fringilla augue ultricies scelerisque aliquam et auctor amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pulvinar in quam euismod facilisi semper amet. Sed mi integer fringilla faucibus rhoncus imperdiet nisi. Faucibus arcu, laoreet gravida eget morbi venenatis. Id egestas fringilla augue ultricies scelerisque aliquam et auctor amet."
            },
            companies:[
                {
                    IMG_URL:process.env.PUBLIC_URL+"/media/images/rec1.png",
                    title:"LOGO",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    status:"accuaired"
                },
                {
                    IMG_URL:process.env.PUBLIC_URL+"/media/images/rec1.png",
                    title:"LOGO",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    status:"accuaired"
                },
                {
                    IMG_URL:process.env.PUBLIC_URL+"/media/images/rec1.png",
                    title:"LOGO",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    status:"accuaired"
                },
                {
                    IMG_URL:process.env.PUBLIC_URL+"/media/images/rec1.png",
                    title:"LOGO",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    IMG_URL:process.env.PUBLIC_URL+"/media/images/rec1.png",
                    title:"LOGO",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    IMG_URL:process.env.PUBLIC_URL+"/media/images/rec1.png",
                    title:"LOGO",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    IMG_URL:process.env.PUBLIC_URL+"/media/images/rec1.png",
                    title:"LOGO",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                    IMG_URL:process.env.PUBLIC_URL+"/media/images/rec1.png",
                    title:"LOGO",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
            ]
        }
    }
    render(){
        return(
            <div className="companies-page">
                {/* Section 0 */}
                    <NavBar />
                {/* Section 0 */}

                
                {/* Section 1 */}
                    <div className="companies-section1-bgimg" style={{backgroundImage: "url("+process.env.PUBLIC_URL+"/media/images/svg/group_58.svg"}}>
                        <div className="row justify-content-center">
                            <div className="col-3 companies-section1-text1">
                                {this.state.page.title}
                            </div>
                            <div className="col-7 companies-section1-text2">
                                {this.state.page.description}
                            </div>
                        </div>
                    </div>
                {/* Section 1 */}

                {/* Section 2 */}
                    <div className="companies-section2">
                        <div className="row mt-5 mb-2">
                            <div className="col-6 text-center">
                                <a href="/companies/" className="companies-section2-anchor-prop-disable">Status <span className="companies-section2-arrow-head-down">></span></a>
                            </div>
                            <div className="col-6 text-center">
                                <a href="/companies/" className="companies-section2-anchor-prop-disable">Indusrty <span className="companies-section2-arrow-head-down">></span></a>
                            </div>
                        </div>
                    </div>
                {/* Section 2 */}

                {/* Section 3 */}
                    <GridImage obj={this.state.companies}/>
                {/* Section 3 */}

                

                {/* Section -1 */}
                    <Footer />
                {/* Section -1 */}
            </div>
        );
    }
}

export default CompaniesPage;