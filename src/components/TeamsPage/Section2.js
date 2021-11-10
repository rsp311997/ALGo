import React from "react";
import {Link} from "react-router-dom";

class Section2 extends React.Component{
    constructor(props){
        super(props)

        this.state={
            objectArry:[1,2,3,4,5,6,7,8]
        }
    }
    render(){
        return(
                    <div className="row mt-5">
                        {this.state.objectArry.map((object,index) => {
                           return(
                                <div className="col-lg-3 col-md-3 col-sm-3 mt-5">
                                    <Link to={"/teams-detail/" + object}>
                                        <div id={index} className="wapper">
                                            <div className="wapper_text_box">
                                                <p> <span className="wapper_text1"> Rahul Panwar </span> <br/> <span className="wapper_text2">System Engineer</span> </p>
                                            </div>
                                            <img className="img-fluid teams_section2_img" src={process.env.PUBLIC_URL+'/media/images/rec40.png'} alt="partners"/>
                                        </div>
                                    </Link>
                                </div>
                           );
                        })}      
                    </div>
        );
    }
}

export default Section2;