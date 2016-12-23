import React, { Component } from 'react';
import './App.css';
import { Router, Route } from 'react-router';

import Top from "./Components/Top";

import Portfolio from './Views/Portfolio';
import CV from './Views/CV';
import Blogg from './Views/Blogg';
import Contact from './Views/Contact';

class App extends Component {
  render() {
    return (
		<div className="App">

			<Top />	

			<Router>
				<Route path="/" component={Portfolio} />
				<Route path="/CV" component={CV} />
				<Route path="/Blogg" component={Blogg} />
				<Route path="/Contact" component={Contact} />
			</Router>
		</div>
    );
  }
}

export default App;
