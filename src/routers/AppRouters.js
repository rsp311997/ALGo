import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LandingPage from '../components/LandingPage/LandingPage.js';
import TeamsPage from '../components/TeamsPage/TeamsPage.js';
import TeamsDetailPage from '../components/TeamsDetailPage/TeamsDetailPage.js';

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
			<Route path="/teams/" component={TeamsPage}/>
			<Route path="/teams-detail/:id" component={TeamsDetailPage}/>
			<Route component={PageNotFound} />
		</Switch>
	</BrowserRouter>
);


export default AppRouter;