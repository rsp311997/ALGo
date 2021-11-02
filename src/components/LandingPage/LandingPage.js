import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../Basic/NabBar.js';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Section4 from './Section4.js';
import Section5 from './Section5.js';
import Section6 from './Section6.js';
import Section7 from './Section7.js';
import Section8 from './Section8.js';

class LandingPage extends React.Component{
	render(){
		return(
			<div className="LandingPage">
				{/*Section 0*/}
				<NavBar/>
				{/*Section 0*/}
				
				{/*Section 1*/}
				<Section1/>
				{/*Section 1*/}
				
				{/*Section 2*/}
				<Section2/>
				{/*Section 2*/}

				{/*Section 3*/}
				<Section3/>
				{/*Section 3*/}

				{/*Section 4*/}
				<Section4/>
				{/*Section 4*/}

				{/*Section 5*/}
				<Section5/>
				{/*Section 5*/}

				{/*Section 6*/}
				<Section6/>
				{/*Section 6*/}

				{/*Section 7*/}
				<Section7/>
				{/*Section 7*/}

				{/*Section 8*/}
					<Section8/>
				{/*Section 8*/}

			</div>
		);
	}
}


export default LandingPage;

