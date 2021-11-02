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
		<Switch>
			<Route path="/" component={LandingPage} exact={true}/>
			<Route component={PageNotFound} />
		</Switch>
	</BrowserRouter>
);


export default AppRouter;