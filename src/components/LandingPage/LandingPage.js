import React from 'react';

import LandingPage_first_image from '../../assets/images/LandingPage_first_image.png';
import Image1 from '../../assets/images/Image1.jpg';
import Card1 from '../../assets/images/Card1.png';
import Table1 from '../../assets/images/Table1.png';
import BlackArrowBody from '../../assets/images/ArrowBody.png';
import BlackArrowHead from '../../assets/images/ArrowHead.png';
import Side1 from '../../assets/images/Slide1.png';
import WhiteAroBody from '../../assets/images/WhiteAroBody.png';
import WhiteAroHead from '../../assets/images/WhiteAroHead.png';
import BlackArrowHeadLeft from '../../assets/images/BlackArrowHeadLeft.png';
import InvertedCoomaLeft from '../../assets/images/InvertedCoomaLeft.png';
import InvertedCoomaRight from '../../assets/images/InvertedCoomaRight.png';
import Ellipse from '../../assets/images/Ellipse.png';
import EllipseImage from '../../assets/images/EllipseImage.png';
import Linkedln from '../../assets/images/Linkedln.png';
import FaceBook from '../../assets/images/FaceBook.png';
import Twitter from '../../assets/images/Twitter.png';

class LandingPage extends React.Component{
	render(){
		return(
			<div className="LandingPage">
				{/*Section 0*/}
				<nav class="navbar navbar-expand-lg NavBar">
					  <a class="navbar-brand NavBar_BrandName" href="#">ALGo</a>
					  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span class="navbar-toggler-icon"></span>
					  </button>

					  <div class="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul class="navbar-nav ml-auto">
						    <li class="nav-item active">
						       	<a class="nav-link NavBar_Link" href="#">About</a>
						    </li>
						    <li class="nav-item">
						        <a class="nav-link NavBar_Link" href="#">Teams</a>
						    </li>
						    <li class="nav-item">
						        <a class="nav-link NavBar_Link" href="#">Companies</a>
						    </li>
						    <li class="nav-item">
						        <a class="nav-link NavBar_Link" href="#">News</a>
						    </li>
						    <li class="nav-item">
						        <a class="nav-link NavBar_Link" href="#">Jobs</a>
						    </li>
						    <li class="nav-item">
						        <a class="nav-link NavBar_Link" href="#">
						        	<div className="NavBar_Icon_Box text-center">
						        		<img className="img" src={FaceBook} alt="FaceBook"/>
						        	</div>
						        </a>
						    </li>
						    <li class="nav-item">
						        <a class="nav-link NavBar_Link" href="#">
						        	<div className="NavBar_Icon_Box text-center">
						        		<img className="img" src={Linkedln} alt="FaceBook"/>
						        	</div>
						        </a>
						    </li>
						    <li class="nav-item">
						        <a class="nav-link" href="#">
						        	<div className="NavBar_Icon_Box text-center">
						        		<img className="img" src={Twitter} alt="FaceBook"/>
						        	</div>
						        </a>
						    </li>
					    </ul>
					  </div>
				</nav>
				{/*Section 0*/}
				
				{/*Section 1*/}
				<div className="row">
					<div className="col">
						<div className="LandingPage_text_box1">
							<p className="LandingPage_text1">40 Years of Investing Innovation</p>
							<p className="LandingPage_text2">First VC Firm Est. 1981</p>
						</div>
					</div>
					<div className="col" >
							<img className="LandingPage_image1" src={Image1} alt="LandingPage_image1"/>
					</div>
				</div>
				{/*Section 1*/}
				
				{/*Section 2*/}
				<div className="row">
					<div className="col text-center">
						<div className="LandingPage_text_box2">
							<p className="LandingPage_text3">One Firm. Multiple Strategies.</p>
							<p className="LandingPage_text4">Thematic Investing Across Dedicated Teams</p>
						</div>
					</div>
				</div>
				{/*Section 2*/}

				{/*Section 3*/}
				<div className="container">
					<div className="row justify-content-center mt-3 mb-3">
						<div className="col">
							<div className="card">
								<img className="card-img-top" src={Card1} alt="Card image cap"/>
								<div className="card-body text-center">
									<div className="LandingPage_card_title">
										Algo Ventures
									</div>
									<div className="LandingPage_card_description mt-3">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia.
									</div>
									<div className="mt-3">
										<a className="btn LandingPage_card_Buttun">VISIT</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card">
								<img className="card-img-top" src={Card1} alt="Card image cap"/>
								<div className="card-body text-center">
									<div className="LandingPage_card_title">
										Algo+
									</div>
									<div className="LandingPage_card_description mt-3">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia.
									</div>
									<div className="mt-3">
										<a className="btn LandingPage_card_Buttun">VISIT</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card">
								<img className="card-img-top" src={Card1} alt="Card image cap"/>
								<div className="card-body text-center">
									<div className="LandingPage_card_title">
										Algo Canada
									</div>
									<div className="LandingPage_card_description mt-3">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia.
									</div>
									<div className="mt-3">
										<a className="btn LandingPage_card_Buttun">VISIT</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*Section 3*/}

				{/*Section 4*/}
				<div className="LandingPage_text_box3 mt-5">
						<div className="row text-center">
							<div className="col-5 LandingPage_text5">
								Companies
							</div>
							<div className="col LandingPage_text6">
								Investing in People. Investing in Ideas. Investing in the Future.We invest in software, cleantech, healthtech, and more
							</div>
						</div>
				</div>
				{/*Section 4*/}

				{/*Section 5*/}
				<div className="container LandingPage_mt_5_grid">
					<div className="row LandingPage_ul_grid">
						<div className="col-3 LandingPage_ul_grid_col">
							<img className="img LandingPage_ul_img" src={Table1} alt="Card image cap"/>
						</div>
						<div className="col-3 LandingPage_ul_grid_col">
							<img className="img LandingPage_ul_img" src={Table1} alt="Card image cap"/>
						</div>
						<div className="col-3 LandingPage_ul_grid_col">
							<img className="img LandingPage_ul_img" src={Table1} alt="Card image cap"/>
						</div>
						<div className="col-3 LandingPage_ul_grid_col">
							<img className="img LandingPage_ul_img" src={Table1} alt="Card image cap"/>
						</div>
						<div className="col-3 LandingPage_ul_grid_col">
							<img className="img LandingPage_ul_img" src={Table1} alt="Card image cap"/>
						</div>
						<div className="col-3 LandingPage_ul_grid_col">
							<img className="img LandingPage_ul_img" src={Table1} alt="Card image cap"/>
						</div>
						<div className="col-3 LandingPage_ul_grid_col">
							<img className="img LandingPage_ul_img" src={Table1} alt="Card image cap"/>
						</div>
						<div className="col-3 LandingPage_ul_grid_col">
							<img className="img LandingPage_ul_img" src={Table1} alt="Card image cap"/>
						</div>
						<div className="col-12 mt-5">
							<a className="LandingPage_text7" href="#">
								View All Companies  <img src={BlackArrowBody} alt="Arrow Body"/><img className="LandingPage_ArrowHead" src={BlackArrowHead} alt="Arrow Head"/>
							</a>
						</div>
					</div>
				</div>
				{/*Section 5*/}

				{/*Section 6*/}
				<div className="row justify-content-center mb-5">
					<div className="col-6 text-center LandingPage_text8">
						Creating value through partnership,experience, and trust
					</div>
				</div>
				<div className="row mb-5">
					<div className="col">
						<img className="LandingPage_side_image" src={Side1}/>
					</div>
					<div className="col">
						<div className="row">
							<div className="col-12 LandingPage_text9 mt-5">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pulvinar in quam euismod 
								facilisi semper amet. Sed mi integer fringilla faucibus rhoncus imperdiet nisi. Faucibus arcu, 
								it laoreet gravida eget morbi venenatis. Id egestas fringilla augue ultricies scelerisque aliquam 
								t auctor amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pulvinar in quam 
								euismod facilisi semper amet. Sed mi integer fringilla faucibus rhoncus imperdiet nisi. Faucibus 
								arcu, elit laoreet gravida eget morbi venenatis. Id egestas fringilla augue ultricies scelerisque 
								aliquam et auctor amet
								
							</div>
							<div className="col-12 mt-5 text-center">
								<button className="btn LandingPage_button"> <span className="LandingPage_button_text">Meet the Team</span> <img src={WhiteAroBody}/><img className="LandingPage_ArrowHead" src={WhiteAroHead}/> </button>
							</div>
						</div>
					</div>
				</div>
				{/*Section 6*/}

				{/*Section 7*/}
				<div className="mb-5">
					
					<div className="row mt-5">
						<div className="col-12 text-center mt-5">
							<p className="LandingPage_text10">Testimonial</p>
						</div>
					</div>

					<div className="row mt-5">
						<div className="col text-center">
							<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
							  {/*Indicators*/}
								  <ol class="carousel-indicators">
								    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active LandingPage_Slide_Indicator"></li>
								    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="LandingPage_Slide_Indicator"></li>
								  </ol>
							  {/*Indicators*/}
							  	<div class="carousel-inner">
								{/*Slides*/}
								    <div class="carousel-item active">
								      		<div className="container">
												 <div className="row justify-content-center align-items-center">
											     	<div className="col-4">
											     		<img className="img LandingPage_slide_image1" src={Ellipse}/>
											     		<img className="img LandingPage_slide_image2" src={Ellipse}/>
											     		<img className="img LandingPage_slide_image3" src={EllipseImage}/>
											     		<div>
											     			<span className="LandingPage_text12">Name:Rahul</span><br/>
											     			<span className="LandingPage_text13">Designation</span>
											     		</div>
											     	</div>
											     	<div className="col">
											     		<div className="row justify-content-start mt-3 mb-3">
											     			<div className="col-2">
											     				<img src={InvertedCoomaLeft} className="slide_Coomas"/>
											     				<img src={InvertedCoomaLeft} className="slide_Coomas"/>
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
											     				<img src={InvertedCoomaRight} className="slide_Coomas"/>
											     				<img src={InvertedCoomaRight} className="slide_Coomas"/>
											     			</div>
											     		</div>
											     	</div>
										     	 </div>
											</div>
								    </div>
								    <div class="carousel-item">
								      		<div className="container">
												 <div className="row justify-content-center align-items-center">
											     	<div className="col-4">
											     		<img className="img LandingPage_slide_image1" src={Ellipse}/>
											     		<img className="img LandingPage_slide_image2" src={Ellipse}/>
											     		<img className="img LandingPage_slide_image3" src={EllipseImage}/>
											     		<div>
											     			<span className="LandingPage_text12">Name:Singh</span><br/>
											     			<span className="LandingPage_text13">Designation</span>
											     		</div>
											     	</div>
											     	<div className="col">
											     		<div className="row justify-content-start mt-3 mb-3">
											     			<div className="col-2">
											     				<img src={InvertedCoomaLeft} className="slide_Coomas"/>
											     				<img src={InvertedCoomaLeft} className="slide_Coomas"/>
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
											     				<img src={InvertedCoomaRight} className="slide_Coomas"/>
											     				<img src={InvertedCoomaRight} className="slide_Coomas"/>
											     			</div>
											     		</div>
											     	</div>
										     	 </div>
											</div>
								    </div>
							    {/*Slides*/}
							  	</div>
								{/*Pre-Button*/}
								<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
								    <span class="carousel-control-prev-icon" aria-hidden="true">
								    	<div className="slide_button_div">
									    	<img src={BlackArrowHeadLeft} className="slide_button"/>
									    </div>
								    </span>
								    <span class="sr-only">Previous</span>
								</a>
								{/*Pre-Button*/}
								{/*Next-Button*/}
								<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
								    <span class="carousel-control-next-icon" aria-hidden="true">
								    	<div className="slide_button_div">
									    	<img src={BlackArrowHead} className="slide_button"/>
									    </div>
								    </span>
								    <span class="sr-only">Next</span>
								</a>
								{/*Next-Button*/}
							</div>

						</div>
					</div>

				</div>
				{/*Section 7*/}


				{/*Section 8*/}
					<div className="LandingPage_footer">
						<div className="row justify-content-center align-items-center">
							<div className="col-12 LandingPage_text14 text-center mt-5 mb-4">
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
				{/*Section 8*/}

			</div>
		);
	}
}


export default LandingPage;

