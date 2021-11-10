import React from 'react';
import Footer from '../Basic/Footer.js';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Section4 from './Section4.js';
import Section5 from './Section5.js';
import Section6 from './Section6.js';
import Section7 from './Section7.js';
import NavBar from '../Basic/NavBar.js';

class LandingPage extends React.Component{

	constructor(props){
		super(props)
		this.state={
			NAV_BG_TOGGLE:false,
			SECTION2:false,
			SECTION3:false,
			SECTION4:false,
			SECTION5:false,
			SECTION6:false,
			SECTION7:false,
		}
	}
	
	componentDidMount(){
		window.addEventListener('scroll',(e)=>{
			if(e.target.scrollingElement.scrollTop > 0){
				this.setState({
					...this.state,
					NAV_BG_TOGGLE:true
				});
			}else{
				this.setState({
					...this.state,
					NAV_BG_TOGGLE:false
				});
			}

			if(e.target.scrollingElement.scrollTop > 50){
				this.setState({
					...this.state,
					SECTION2:true
				});
			}else{
				this.setState({
					...this.state,
					SECTION2:false
				});
			}

			if(e.target.scrollingElement.scrollTop > 235){
				this.setState({
					...this.state,
					SECTION3:true
				});
			}else{
				this.setState({
					...this.state,
					SECTION3:false
				});
			}

			if(e.target.scrollingElement.scrollTop > 663){
				this.setState({
					...this.state,
					SECTION4:true
				});
			}else{
				this.setState({
					...this.state,
					SECTION4:false
				});
			}

			if(e.target.scrollingElement.scrollTop > 750){
				this.setState({
					...this.state,
					SECTION5:true
				});
			}else{
				this.setState({
					...this.state,
					SECTION5:false
				});
			}

			if(e.target.scrollingElement.scrollTop > 1600){
				this.setState({
					...this.state,
					SECTION6:true
				});
			}else{
				this.setState({
					...this.state,
					SECTION6:false
				});
			}

			if(e.target.scrollingElement.scrollTop > 1800){
				this.setState({
					...this.state,
					SECTION7:true
				});
			}else{
				this.setState({
					...this.state,
					SECTION7:false
				});
			}

		})
	}


	render(){
		return(
			<div className="LandingPage">
				{/*Section 0*/}
				<NavBar  NAV_BG_TOGGLE={this.state.NAV_BG_TOGGLE}/>
				{/*Section 0*/}
				
				{/*Section 1*/}
				<Section1/>
				{/*Section 1*/}
				
				{/*Section 2*/}
				{this.state.SECTION2 ? <Section2/> : <div></div>}
				{/*Section 2*/}

				{/*Section 3*/}
				{this.state.SECTION3 ? <Section3/> : <div></div>}
				{/*Section 3*/}

				{/*Section 4*/}
				{this.state.SECTION4 ? <Section4/> : <div></div>}
				{/*Section 4*/}

				{/*Section 5*/}
				{this.state.SECTION5 ? <Section5/> : <div></div>}
				{/*Section 5*/}

				{/*Section 6*/}
				{this.state.SECTION6 ? <Section6/> : <div></div>}
				{/*Section 6*/}

				{/*Section 7*/}
				{this.state.SECTION7 ? <Section7/> : <div></div>}
				{/*Section 7*/}

				{/*Section 8*/}
				<Footer/>
				{/*Section 8*/}

			</div>
		);
	}
}


export default LandingPage;

