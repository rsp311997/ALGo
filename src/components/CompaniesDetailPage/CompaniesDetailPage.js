import React from 'react';
import Footer from '../Basic/Footer';
import NavBar from '../Basic/NavBar';

import "../../style/CompaniesDetailPage.css";
import Section1 from './Section1';
import Section2 from './Section2';


class CompaniesDetailPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            CompaniesDetail: {
                type: "Information Technology",
                name: "Commerce One",
                contact: [
                    { name: "facebook", url: "https://www.facebook.com/", ICON_URL: process.env.PUBLIC_URL + "/media/images/svg/FaceBookWhite.svg" },
                    { name: "linkedln", url: "https://www.twitter.com", ICON_URL: process.env.PUBLIC_URL + "/media/images/svg/LinkedlnWhite.svg" },
                    { name: "twitter", url: "https://www.linkedln.com", ICON_URL: process.env.PUBLIC_URL + "/media/images/svg/TwitterWhite.svg" },
                    { name: "copyLink", url: "https://www.xyz.com", ICON_URL: process.env.PUBLIC_URL + "/media/images/svg/CopyLinkWhite.svg" },
                ],
                COMP_IMG: process.env.PUBLIC_URL + "/media/images/commerceone.png",
                Industry: ["Communications", "Information Technology", "New Media"],
                Milestone: ["Rho investment: 2012Acquired by perfect: 1998",],
                Founders: ["Fred Moll"],
                LatestTweets: ["Communications", "Information Technology", "New Media"],
                RHOPartners: ["Mark Roehrenbeck"]
            }
        }
    }
    render() {
        return (
            <div className="CompaniesDetailPage">
                {/* Section 0 */}
                <NavBar />
                {/* Section 0 */}

                {/* Section 1 */}
                    <Section1 CompaniesDetail={this.state.CompaniesDetail}/>
                {/* Section 1 */}


                {/* Section 2 */}
                    <Section2 CompaniesDetail={this.state.CompaniesDetail} />
                {/* Section 2 */}

                {/* Section -1 */}
                <Footer />
                {/* Section -1 */}
            </div>
        );
    }
}

export default CompaniesDetailPage;