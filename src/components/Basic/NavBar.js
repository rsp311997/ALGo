import React from 'react';
import {Link,useLocation} from 'react-router-dom';

class NavBar extends React.Component{
	render(){
		return(
			<nav className={this.props.NAV_BG_TOGGLE ? "navbar navbar-expand-lg NavBar_Modified navbar-light bg-light" : "navbar navbar-expand-lg NavBar_Normal"} >
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
						        <Link to="/" style={{ textDecoration: 'none'}}> <p className="nav-link NavBar_Link" >Teams</p> </Link>
						    </li>
						    <li className="nav-item">
						        <Link to="/companies/" style={{ textDecoration: 'none'}}> <p className="nav-link NavBar_Link" >Companies</p> </Link>
						    </li>
						    <li className="nav-item">
						        <Link to="/" style={{ textDecoration: 'none'}}> <p className="nav-link NavBar_Link" >News</p> </Link>
						    </li>
						    <li className="nav-item">
						        <Link to="/" style={{ textDecoration: 'none'}}> <p className="nav-link NavBar_Link" >Jobs</p> </Link>
						    </li>
						    <li className="nav-item">
						        <Link to="/" style={{ textDecoration: 'none'}}> 
						        <div className="nav-link NavBar_Link" >
						        	<div className="NavBar_Icon_Box text-center">
						        		<img className="img img-fluid" src={process.env.PUBLIC_URL + '/media/images/svg/FaceBook.svg'} alt="FaceBook"/>
						        	</div>
						        </div>
						        </Link>
						    </li>
						    <li className="nav-item">
						    	<Link to="/" style={{ textDecoration: 'none'}}> 
						        <div className="nav-link NavBar_Link" >
						        	<div className="NavBar_Icon_Box text-center">
						        		<img className="img img-fluid" src={process.env.PUBLIC_URL + '/media/images/svg/Linkedln.svg'} alt="FaceBook"/>
						        	</div>
						        </div>
						        </Link>
						    </li>
						    <li className="nav-item">
						    	<Link to="/" style={{ textDecoration: 'none'}}> 
						        <div className="nav-link" >
						        	<div className="NavBar_Icon_Box text-center">
						        		<img className="img img-fluid" src={process.env.PUBLIC_URL + '/media/images/svg/Twitter.svg'} alt="FaceBook"/>
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