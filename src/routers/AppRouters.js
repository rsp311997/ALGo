import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LandingPage from '../components/LandingPage/LandingPage.js';


const PageNotFound = () => {
	return(
		<div>
			404!
		</div>
	);
}

const AppRouter = () => (
	<BrowserRouter>
		<div>
		<Switch>
			<Route path="/" component={LandingPage} exact={true}/>
			<Route component={PageNotFound} />
		</Switch>
		</div>
	</BrowserRouter>
);


export default AppRouter;