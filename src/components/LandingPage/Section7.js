import React from "react";

class Section7 extends React.Component{
    render(){
        return(
            <div className="mb-5">
					
					<div className="row mt-5">
						<div className="col-12 text-center mt-5">
							<p className="LandingPage_text10">Testimonial</p>
						</div>
					</div>

					<div className="row mt-5">
						<div className="col text-center">
							<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
							  {/*Indicators*/}
								  <ol className="carousel-indicators">
								    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active LandingPage_Slide_Indicator"></li>
								  </ol>
							  {/*Indicators*/}
							  	<div className="carousel-inner">
								{/*Slides*/}
								    <div className="carousel-item active">
								      		<div className="container">
												 <div className="row justify-content-center align-items-center">
											     	<div className="col-lg-3 col-md-4 col-xs-12 column">
														 <div className="slide_wrapper">
														 	<img className="img img-fluid LandingPage_slide_image1" src={process.env.PUBLIC_URL + '/media/images/Ellipse.png'} alt="Ellipse"/>
											     			<img className="img img-fluid LandingPage_slide_image2" src={process.env.PUBLIC_URL + '/media/images/Ellipse.png'} alt="Ellipse"/>
											     			<img className="img img-fluid LandingPage_slide_image3" src={process.env.PUBLIC_URL + '/media/images/EllipseImage.png'} alt="Ellipse"/>
														 	<div className="LandingPage_Text_Box4">
											     				<span className="LandingPage_text12">Name:Rahul</span><br/>
											     				<span className="LandingPage_text13">Designation</span>
											     			</div>
														 </div>
											     	</div>
											     	<div className="col">
											     		<div className="row justify-content-start mt-3 mb-3">
											     			<div className="col-2">
											     				<img src={process.env.PUBLIC_URL + '/media/images/InvertedCoomaLeft.png'} className="slide_Coomas" alt="commas"/>
											     				<img src={process.env.PUBLIC_URL + '/media/images/InvertedCoomaLeft.png'} className="slide_Coomas" alt="commas"/>
											     			</div>
											     		</div>
											     		<div className="row justify-content-center">
											     			<div className="col-9 LandingPage_text11">
											     				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque est aliquam,
											     				et auctor sit ornare egestas. Id diam nunc id aliquam, ullamcorper arcu. Non vulputate arcu nunc, 
											     				diam erat tristique lorem tellus morbi. Vulputate magna mauris, nisi vel. Neque diam,
											     			</div>
											     		</div>
											     		<div className="row justify-content-end">
											     			<div className="col-2">
											     				<img src={process.env.PUBLIC_URL + '/media/images/InvertedCoomaRight.png'} className="slide_Coomas" alt="commas"/>
											     				<img src={process.env.PUBLIC_URL + '/media/images/InvertedCoomaRight.png'} className="slide_Coomas" alt="commas"/>
											     			</div>
											     		</div>
											     	</div>
										     	 </div>
											</div>
								        </div>
							    {/*Slides*/}
							  	</div>

								{/*Pre-Button*/}
								<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
								    <span className="carousel-control-prev-icon" aria-hidden="true">
								    	<div className="slide_button_div">
									    	<img src={process.env.PUBLIC_URL + '/media/images/BlackArrowHeadLeft.png'} className="slide_button" alt="BlackArrowHeadLeft"/>
									    </div>
								    </span>
								    <span className="sr-only">Previous</span>
								</a>
								{/*Pre-Button*/}
								{/*Next-Button*/}
								<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" >
								    <span className="carousel-control-next-icon" aria-hidden="true">
								    	<div className="slide_button_div">
									    	<img src={process.env.PUBLIC_URL + '/media/images/ArrowHead.png'} className="slide_button" alt="ArrowHead"/>
									    </div>
								    </span>
								    <span className="sr-only">Next</span>
								</a>
								{/*Next-Button*/}
							</div>

						</div>
					</div>

				</div>
        );
    }
}


export default Section7;