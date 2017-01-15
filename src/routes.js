import React from 'react'
import App from './App'
import Contribute from './Contribute'
import Cart from './Cart'
import { Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';

var routes = (

<Router history={browserHistory}>
	<Route path='/' component={App}>
	<IndexRoute component={Contribute}/>
	</Route>
	<Route path='/cart/:cartArr/:total' component={Cart}/>
</Router>
)

 module.exports = routes
	// <Route path='/Comments/*' component={Comments}/>
	// <Route path='/autocomplete/' component={MaterialUIAutocomplete}/>
