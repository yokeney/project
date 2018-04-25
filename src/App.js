import React,{Component} from "react";
import Home from './Home/index'
import Lesson from './Lesson/index'
import Profile from './Profile/index'
import Tab from './Tab/index'
import {Route,Switch} from 'react-router-dom'
 export default class App extends Component{
 	render(){
 		return (
 				<div>
				<Switch>
					 <Route path='/' exact component={Home}/>
					 <Route path='/Lesson' component={Lesson}/>
					 <Route path='/Profile' component={Profile}/>
				</Switch>
				<Tab></Tab>
				</div>

 		)
 	}
 }
