import React from "react";

class Section1 extends React.Component{
    render(){
        return(
            <div className="CompaniesDetail-section1">
                {/* Text Box */}
                <div className="CompaniesDetail-section1-text-box">
                    <div className="section1-text-box-text1">{this.props.CompaniesDetail.type}</div>
                    <div className="section1-text-box-text2">{this.props.CompaniesDetail.name}</div>
                    <div className="section1-link-box">
                        <div className="row">
                            {this.props.CompaniesDetail.contact.map((obj, index) => {
                                return (
                                    <div key={index} className="col-1">
                                        <a href={obj.url}
                                            style={{ textDecoration: 'none' }}>
                                            <div className="ul_Icon_Box text-center">
                                                <img
                                                    className="img img-fluid"
                                                    src={obj.ICON_URL}
                                                    alt="FaceBook" />
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* OverLay */}
                <div className="CompaniesDetail-section1-overlay">

                </div>
                {/* BG Image */}
                <img className="img CompaniesDetail-section1-img" src={process.env.PUBLIC_URL + "/media/images/rec_70.png"} alt="Section BG" />
            </div>
        );
    }
}

export default Section1;