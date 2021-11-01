import React from 'react';
import {Link} from 'react-router-dom';

class LandingPage extends React.Component{
	render(){
		return(
			<div className="LandingPage">
				{/*Section 0*/}
				<nav className="navbar navbar-expand-lg NavBar">
					  <Link to="/" style={{ textDecoration: 'none'}}> <p className="navbar-brand NavBar_BrandName" >ALGo</p> </Link>
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					  </button>

					  <div className="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul className="navbar-nav ml-auto">
						    <li className="nav-item active">
						       	<Link to="/" style={{ textDecoration: 'none'}}> <p className="nav-link NavBar_Link" >About</p> </Link>
						    </li>
						    <li className="nav-item">
						        <Link to="/" style={{ textDecoration: 'none'}}> <p className="nav-link NavBar_Link" >Teams</p> </Link>
						    </li>
						    <li className="nav-item">
						        <Link to="/" style={{ textDecoration: 'none'}}> <p className="nav-link NavBar_Link" >Companies</p> </Link>
						    </li>
						    <li className="nav-item">
						        <Link to="/" style={{ textDecoration: 'none'}}> <p className="nav-link NavBar_Link" >News</p> </Link>
						    </li>
						    <li className="nav-item">
						        <Link to="/" style={{ textDecoration: 'none'}}> <p className="nav-link NavBar_Link" >Jobs</p> </Link>
						    </li>
						    <li className="nav-item">
						        <Link to="/" style={{ textDecoration: 'none'}}> 
						        <p className="nav-link NavBar_Link" >
						        	<div className="NavBar_Icon_Box text-center">
						        		<img className="img img-fluid" src={process.env.PUBLIC_URL + '/media/images/FaceBook.png'} alt="FaceBook"/>
						        	</div>
						        </p>
						        </Link>
						    </li>
						    <li className="nav-item">
						    	<Link to="/" style={{ textDecoration: 'none'}}> 
						        <p className="nav-link NavBar_Link" >
						        	<div className="NavBar_Icon_Box text-center">
						        		<img className="img img-fluid" src={process.env.PUBLIC_URL + '/media/images/Linkedln.png'} alt="FaceBook"/>
						        	</div>
						        </p>
						        </Link>
						    </li>
						    <li className="nav-item">
						    	<Link to="/" style={{ textDecoration: 'none'}}> 
						        <p className="nav-link" >
						        	<div className="NavBar_Icon_Box text-center">
						        		<img className="img img-fluid" src={process.env.PUBLIC_URL + '/media/images/Twitter.png'} alt="FaceBook"/>
						        	</div>
						        </p>
						        </Link>
						    </li>
					    </ul>
					  </div>
				</nav>
				{/*Section 0*/}
				
				{/*Section 1*/}
				<div className="row">
					<div className="col height_control">
						<div className="LandingPage_text_box1">
							<p className="LandingPage_text1">40 Years of Investing Innovation</p>
							<p className="LandingPage_text2">First VC Firm Est. 1981</p>
						</div>
					</div>
					<div className="col height_control" >
							<img className="img LandingPage_image1" src={process.env.PUBLIC_URL + '/media/images/Image1.jpg'} alt="LandingPage_image1"/>
							<div className="LandingPage_image1_overlay"></div>
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
								<img className="card-img-top" src={process.env.PUBLIC_URL + '/media/images/Card1.png'} alt="Card image cap"/>
								<div className="card-body text-center">
									<div className="LandingPage_card_title">
										Algo Ventures
									</div>
									<div className="LandingPage_card_description mt-3">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia.
									</div>
									<div className="mt-3">
										<Link to="/" style={{ textDecoration: 'none'}}> <p className="btn LandingPage_card_Buttun">VISIT</p> </Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card">
								<img className="card-img-top" src={process.env.PUBLIC_URL + '/media/images/Card1.png'} alt="Card image cap"/>
								<div className="card-body text-center">
									<div className="LandingPage_card_title">
										Algo+
									</div>
									<div className="LandingPage_card_description mt-3">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia.
									</div>
									<div className="mt-3">
										<Link to="/" style={{ textDecoration: 'none'}}> <p className="btn LandingPage_card_Buttun">VISIT</p> </Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card">
								<img className="card-img-top" src={process.env.PUBLIC_URL + '/media/images/Card1.png'} alt="Card image cap"/>
								<div className="card-body text-center">
									<div className="LandingPage_card_title">
										Algo Canada
									</div>
									<div className="LandingPage_card_description mt-3">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia.
									</div>
									<div className="mt-3">
										<Link to="/" style={{ textDecoration: 'none'}}> <p className="btn LandingPage_card_Buttun">VISIT</p> </Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*Section 3*/}

				{/*Section 4*/}
				<div className="LandingPage_text_box3 mt-5">
						<div className="row">
							<div className="col-lg-5 col-md-4 col-sx-3 col-12 LandingPage_text5 text-center">
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
							<div className="img LandingPage_ul_img_text">LOGO</div>
							<img className="img LandingPage_ul_img LandingPage_li_img_hover_broder" src={process.env.PUBLIC_URL + '/media/images/rec1.png'} alt="Card image cap"/>
						</div>
						<div className="col-3 LandingPage_ul_grid_col">
							<img className="img LandingPage_ul_img LandingPage_li_img_hover_broder" src={process.env.PUBLIC_URL + '/media/images/rec2.png'} alt="Card image cap"/>
						</div>
						<div className="col-3 LandingPage_ul_grid_col">
							<img className="img LandingPage_ul_img LandingPage_li_img_hover_broder" src={process.env.PUBLIC_URL + '/media/images/rec3.png'} alt="Card image cap"/>
						</div>
						<div className="col-3 LandingPage_ul_grid_col">
							<img className="img LandingPage_ul_img LandingPage_li_img_hover_broder" src={process.env.PUBLIC_URL + '/media/images/rec4.png'} alt="Card image cap"/>
						</div>
						<div className="col-3 LandingPage_ul_grid_col">
							<img className="img LandingPage_ul_img LandingPage_li_img_hover_broder" src={process.env.PUBLIC_URL + '/media/images/rec5.png'} alt="Card image cap"/>
						</div>
						<div className="col-3 LandingPage_ul_grid_col">
							<img className="img LandingPage_ul_img LandingPage_li_img_hover_broder" src={process.env.PUBLIC_URL + '/media/images/rec2.png'} alt="Card image cap"/>
						</div>
						<div className="col-3 LandingPage_ul_grid_col">
							<img className="img LandingPage_ul_img LandingPage_li_img_hover_broder" src={process.env.PUBLIC_URL + '/media/images/rec3.png'} alt="Card image cap"/>
						</div>
						<div className="col-3 LandingPage_ul_grid_col">
							<img className="img LandingPage_ul_img LandingPage_li_img_hover_broder" src={process.env.PUBLIC_URL + '/media/images/rec4.png'} alt="Card image cap"/>
						</div>
					</div>

					<div className="row">
						<div className="col-12 mt-5 text-center">
						<Link to="/" style={{textDecoration: 'none'}}>
							<p className="LandingPage_text7">
								View All Companies &nbsp;
								<img src={process.env.PUBLIC_URL + '/media/images/ArrowBody.png'} alt="Arrow Body"/>
								<img className="LandingPage_ArrowHead" src={process.env.PUBLIC_URL + '/media/images/ArrowHead.png'} alt="Arrow Head"/>
							</p>
						</Link>
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
					<div className="col-lg-6 col-md-6 col-sx-12 col-12 LandingPage_side_image">
						<img className="img img-fluid LandingPage_side_image" src={process.env.PUBLIC_URL + '/media/images/Slide1.png'}/>
					</div>
					<div className="col-lg-6 col-md-6 col-sx-12 col-12">
						<div className="row">
							<div className="col-11 LandingPage_text9 mt-5">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pulvinar in quam euismod 
								facilisi semper amet. Sed mi integer fringilla faucibus rhoncus imperdiet nisi. Faucibus arcu, 
								it laoreet gravida eget morbi venenatis. Id egestas fringilla augue ultricies scelerisque aliquam 
								t auctor amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pulvinar in quam 
								euismod facilisi semper amet. Sed mi integer fringilla faucibus rhoncus imperdiet nisi. Faucibus 
								arcu, elit laoreet gravida eget morbi venenatis. Id egestas fringilla augue ultricies scelerisque 
								aliquam et auctor amet
								
							</div>
							<div className="col-12 mt-5 text-center">
							<Link to="/" style={{ textDecoration: 'none'}}>
								<button className="btn LandingPage_button"> 
									<span className="LandingPage_button_text">Meet the Team</span> 
									<img src={process.env.PUBLIC_URL + '/media/images/WhiteAroBody.png'}/>
									<img className="LandingPage_ArrowHead" src={process.env.PUBLIC_URL + '/media/images/WhiteAroHead.png'}/> 
								</button>
							</Link>
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
							<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
							  {/*Indicators*/}
								  <ol className="carousel-indicators">
								    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active LandingPage_Slide_Indicator"></li>
								    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="LandingPage_Slide_Indicator"></li>
								  </ol>
							  {/*Indicators*/}
							  	<div className="carousel-inner">
								{/*Slides*/}
								    <div className="carousel-item active">
								      		<div className="container">
												 <div className="row justify-content-center align-items-center">
											     	<div className="col-lg-4 col-md-4 col-xs-12">
											     		<img className="img LandingPage_slide_image1" src={process.env.PUBLIC_URL + '/media/images/Ellipse.png'}/>
											     		<img className="img LandingPage_slide_image2" src={process.env.PUBLIC_URL + '/media/images/Ellipse.png'}/>
											     		<img className="img LandingPage_slide_image3" src={process.env.PUBLIC_URL + '/media/images/EllipseImage.png'}/>
											     		<div className="LandingPage_Text_Box4">
											     			<span className="LandingPage_text12">Name:Rahul</span><br/>
											     			<span className="LandingPage_text13">Designation</span>
											     		</div>
											     	</div>
											     	<div className="col">
											     		<div className="row justify-content-start mt-3 mb-3">
											     			<div className="col-2">
											     				<img src={process.env.PUBLIC_URL + '/media/images/InvertedCoomaLeft.png'} className="slide_Coomas"/>
											     				<img src={process.env.PUBLIC_URL + '/media/images/InvertedCoomaLeft.png'} className="slide_Coomas"/>
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
											     				<img src={process.env.PUBLIC_URL + '/media/images/InvertedCoomaRight.png'} className="slide_Coomas"/>
											     				<img src={process.env.PUBLIC_URL + '/media/images/InvertedCoomaRight.png'} className="slide_Coomas"/>
											     			</div>
											     		</div>
											     	</div>
										     	 </div>
											</div>
								    </div>
								    <div className="carousel-item">
								      		<div className="container">
												 <div className="row justify-content-center align-items-center">
											     	<div className="col-4">
											     		<img className="img LandingPage_slide_image1" src={process.env.PUBLIC_URL + '/media/images/Ellipse.png'}/>
											     		<img className="img LandingPage_slide_image2" src={process.env.PUBLIC_URL + '/media/images/Ellipse.png'}/>
											     		<img className="img LandingPage_slide_image3" src={process.env.PUBLIC_URL + '/media/images/EllipseImage.png'}/>
											     		<div className="LandingPage_Text_Box4">
											     			<span className="LandingPage_text12">Name:Singh</span><br/>
											     			<span className="LandingPage_text13">Designation</span>
											     		</div>
											     	</div>
											     	<div className="col">
											     		<div className="row justify-content-start mt-3 mb-3">
											     			<div className="col-2">
											     				<img src={process.env.PUBLIC_URL + '/media/images/InvertedCoomaLeft.png'} className="slide_Coomas"/>
											     				<img src={process.env.PUBLIC_URL + '/media/images/InvertedCoomaLeft.png'} className="slide_Coomas"/>
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
											     				<img src={process.env.PUBLIC_URL + '/media/images/InvertedCoomaRight.png'} className="slide_Coomas"/>
											     				<img src={process.env.PUBLIC_URL + '/media/images/InvertedCoomaRight.png'} className="slide_Coomas"/>
											     			</div>
											     		</div>
											     	</div>
										     	 </div>
											</div>
								    </div>
							    {/*Slides*/}
							  	</div>
								{/*Pre-Button*/}
								<p className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
								    <span className="carousel-control-prev-icon" aria-hidden="true">
								    	<div className="slide_button_div">
									    	<img src={process.env.PUBLIC_URL + '/media/images/BlackArrowHeadLeft.png'} className="slide_button"/>
									    </div>
								    </span>
								    <span className="sr-only">Previous</span>
								</p>
								{/*Pre-Button*/}
								{/*Next-Button*/}
								<p className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
								    <span className="carousel-control-next-icon" aria-hidden="true">
								    	<div className="slide_button_div">
									    	<img src={process.env.PUBLIC_URL + '/media/images/ArrowHead.png'} className="slide_button"/>
									    </div>
								    </span>
								    <span className="sr-only">Next</span>
								</p>
								{/*Next-Button*/}
							</div>

						</div>
					</div>

				</div>
				{/*Section 7*/}


				{/*Section 8*/}
					<div className="LandingPage_footer text-center">
						<div className="row ml-3 mr-3 justify-content-center align-items-center">
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
				{/*Section 8*/}

			</div>
		);
	}
}


export default LandingPage;

