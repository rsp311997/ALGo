import React from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

class Section2 extends React.Component {
    render() {
        return (
            <div>
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-10 mb-5 text-center CompaniesDetail-section2-text1">
                        <span className="CompaniesDetail-section2-text1-subtext">Commerce One</span> was a developer of global e-commerce solutions based in Pleasanton,
                        CA. Commerce one was acquired by IPO/Acquired byPerfect Commerce in 1998.
                    </div>
                    <div className="col-lg-3 mt-5">
                        <img src={this.props.CompaniesDetail.COMP_IMG} alt="Companies" />
                    </div>
                    <div className="col-lg-8 mt-5 CompaniesDetail-section2-text2">
                        Commerce One was a developer of global e-commerce solutions, linking corporate buyers and suppliers of indirect goods and services into trading communities over the Internet.
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-3 mt-5">
                                <div className="CompaniesDetail-section2-header">Industry</div>
                                <div className="GrayBar"></div>
                                {this.props.CompaniesDetail.Industry.map((obj, index) => {
                                    return (
                                        <div key={index} className="CompaniesDetail-section2-list-text">{obj}</div>
                                    )
                                })}
                            </div>
                            <div className="col-lg-3 mt-5">
                                <div className="CompaniesDetail-section2-header">MileStone</div>
                                <div className="GrayBar"></div>
                                {this.props.CompaniesDetail.Milestone.map((obj, index) => {
                                    return (
                                        <div key={index} className="CompaniesDetail-section2-list-text">{obj}</div>
                                    )
                                })}
                            </div>
                            <div className="col-lg-3 mt-5">
                                <div className="CompaniesDetail-section2-header">Founders</div>
                                <div className="GrayBar"></div>
                                {this.props.CompaniesDetail.Founders.map((obj, index) => {
                                    return (
                                        <div key={index} className="CompaniesDetail-section2-list-text">{obj}</div>
                                    )
                                })}
                            </div>
                            <div className="col-lg-3 mt-5">
                                <div className="CompaniesDetail-section2-header">Latest Tweets</div>
                                <div className="GrayBar"></div>
                                {this.props.CompaniesDetail.LatestTweets.map((obj, index) => {
                                    return (
                                        <div key={index} className="CompaniesDetail-section2-list-text">{obj}</div>
                                    )
                                })}
                            </div>
                            <div className="col-lg-3 mt-5">
                                <div className="CompaniesDetail-section2-header">RHO Partners</div>
                                <div className="GrayBar"></div>
                                {this.props.CompaniesDetail.RHOPartners.map((obj, index) => {
                                    return (
                                        <div key={index} className="CompaniesDetail-section2-list-text">{obj}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Section2;