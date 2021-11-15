import React from "react";
import "../../style/GridImage.css";
import {Link} from 'react-router-dom';

class GridImage extends React.Component{
    render(){
        return(
            <div className="mt-5">
                            {this.props.obj.map((obj,index)=>{
                                return (
                                <Link to={"/companies/details/"+index}>
                                    <div key={index} className="wrapper">
                                            <div className="wrapper-text">
                                                <div style={{width:"100%",height:"33%",paddingTop:"10px"}}>
                                                    <div style={{position:"absolute",right:"0",backgroundColor:"red"}}>
                                                        {obj.status}
                                                    </div>
                                                </div>
                                                <div style={{width:"100%",height:"100%",paddingLeft:"30px",paddingRight:"5px"}}>
                                                    <div>
                                                        {obj.title}
                                                    </div>
                                                    <div>
                                                        {obj.description}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wrapper-overlay">

                                            </div>
                                            <img className="wrapper-img" src={obj.IMG_URL} alt="companies" />
                                    </div>
                                </Link>
                                );
                            })}
                    </div>
        );
    }
}

export default GridImage;