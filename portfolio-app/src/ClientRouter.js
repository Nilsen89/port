import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router';

import CV from './Views/CV';
import Blog from './Views/Blog';
import Contact from './Views/Contact';
import FullArticle from './Components/FullArticle';
import NotFound from './Views/NotFound.js';
import Layout from './Views/LayoutVertical.js';
import BlogContent from './Components/BlogContent.js';

class ClientRouter extends Component {
	render() {
		return(
			<Router history={hashHistory}>
				<Route path="/" component={Layout}>
					<IndexRedirect to="/Blog" />
					<Route path="Blog" component={Blog}>
						<IndexRoute component={BlogContent} />
						<Route path="/Blog/:article" component={FullArticle}/>
					</Route>
					<Route path="CV" component={CV} />
					<Route path="Contact" component={Contact} />
					<Route path="*" component={NotFound} />
				</Route>
			</Router>	
		);
	}

} export default ClientRouter;
