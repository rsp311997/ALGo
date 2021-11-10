import React from 'react';
import {Link} from 'react-router-dom';

import "../../style/NavBar.css";

class NavBar extends React.Component{
	render(){
		return(
			<nav className={
				window.location.pathname !== '/' ? 
					"navbar navbar-expand-lg NavBar_Modified navbar-light bg-light" :
					this.props.NAV_BG_TOGGLE ? "navbar navbar-expand-lg NavBar_Modified navbar-light bg-light" : "navbar navbar-expand-lg NavBar_Normal"} >
					  <Link to="/" style={{ textDecoration: 'none',height:72}}> <p className="navbar-brand NavBar_BrandName">ALGo</p> </Link>
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					  </button>

					  <div className="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul className="navbar-nav ml-auto">
						    <li className="nav-item active">
						       	<Link to="/" style={{ textDecoration: 'none'}}> <p className="nav-link NavBar_Link" >About</p> </Link>
						    </li>
						    <li className="nav-item">
						        <Link to="/teams/" style={{ textDecoration: 'none'}}> <p className="nav-link NavBar_Link" >Teams</p> </Link>
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
						        <div className="nav-link" >
						        	<div className={window.location.pathname !== '/' ? 'NavBar_Icon_Box2 text-center' :this.props.NAV_BG_TOGGLE ?'NavBar_Icon_Box2 text-center':'NavBar_Icon_Box1 text-center'}>
						        		<img 
											className="img img-fluid" 
											src={
													window.location.pathname !== '/'? 
														process.env.PUBLIC_URL + '/media/images/svg/FaceBookWhite.svg':
													this.props.NAV_BG_TOGGLE ? 
													 	process.env.PUBLIC_URL + '/media/images/svg/FaceBookWhite.svg':
														process.env.PUBLIC_URL + '/media/images/svg/FaceBook.svg'
											} 
											alt="FaceBook"/>
						        	</div>
						        </div>
						        </Link>
						    </li>
						    <li className="nav-item">
						    	<Link to="/" style={{ textDecoration: 'none'}}> 
						        <div className="nav-link" >
									<div className={window.location.pathname !== '/' ? 'NavBar_Icon_Box2 text-center' :this.props.NAV_BG_TOGGLE ?'NavBar_Icon_Box2 text-center':'NavBar_Icon_Box1 text-center'}>
						        		<img 
											className="img img-fluid" 
											src={
												window.location.pathname !== '/'? 
													process.env.PUBLIC_URL + '/media/images/svg/LinkedlnWhite.svg':
												this.props.NAV_BG_TOGGLE ? 
													process.env.PUBLIC_URL + '/media/images/svg/LinkedlnWhite.svg':
													process.env.PUBLIC_URL + '/media/images/svg/Linkedln.svg'
											} 
											alt="Linkedln"/>
						        	</div>
						        </div>
						        </Link>
						    </li>
						    <li className="nav-item">
						    	<Link to="/" style={{ textDecoration: 'none'}}> 
						        <div className="nav-link" >
									<div className={window.location.pathname !== '/' ? 'NavBar_Icon_Box2 text-center' :this.props.NAV_BG_TOGGLE ?'NavBar_Icon_Box2 text-center':'NavBar_Icon_Box1 text-center'}>
						        		<img 
											className="img img-fluid" 
											src={	
													window.location.pathname !== '/'? 
														process.env.PUBLIC_URL + '/media/images/svg/TwitterWhite.svg':
													this.props.NAV_BG_TOGGLE ? 
													 	process.env.PUBLIC_URL + '/media/images/svg/TwitterWhite.svg':
														process.env.PUBLIC_URL + '/media/images/svg/Twitter.svg'
											} 
											alt="Twitter"/>
						        	</div>
						        </div>
						        </Link>
						    </li>
					    </ul>
					  </div>
			</nav>
		);
	}
}

export default NavBar;