import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LandingPage from '../components/LandingPage/LandingPage.js';
import TeamsPage from '../components/TeamsPage/TeamsPage.js';
import TeamsDetailPage from '../components/TeamsDetailPage/TeamsDetailPage.js';
import CompaniesPage from '../components/CompaniesPage/CompaniesPage.js';
import CompaniesDetailPage from '../components/CompaniesDetailPage/CompaniesDetailPage.js';

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
			<Route path="/teams/" component={TeamsPage} exact={true}/>
			<Route path="/teams-detail/:id" component={TeamsDetailPage} exact={true}/>
			<Route path="/companies/" component={CompaniesPage} exact={true}/>
			<Route path="/companies/details/:id" component={CompaniesDetailPage} exact={true} />
			<Route component={PageNotFound} />
		</Switch>
	</BrowserRouter>
);


export default AppRouter;