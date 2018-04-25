import React,{Component} from "react";
import './index.css'
import{TransitionGroup,CSSTransition} from 'react-transition-group'
import logo from '../images/logo.png'
 export default class HomeHeader extends Component{
	 constructor(){
		 super();
		 this.state={isshow:false}
	 }
	 toggle=()=>{
		 this.setState({
			 isshow:!this.state.isshow
		 })
	 }
 	render(){
 		return (
			<div className="home-header">
				<div className="header-menu">
					<img src={logo} alt=""/>
					<div onClick={this.toggle}>
					{
						this.state.isshow?<i className="iconfont icon-Cruse"></i>:<i className="iconfont icon-Snowman"></i>
					}
					</div>
				</div>
				<TransitionGroup>
				{
					this.state.isshow?
					<CSSTransition timeout={1000} classNames="fadeIn">
						<ul className="menu-list">
							<li type="1">Nodejs</li>
							<li type="2">HTML</li>
							<li type="3">PHP</li>
							<li type="4">PYTHON</li>
						</ul>
					</CSSTransition>
					:null
				}
				</TransitionGroup>
			</div>
 		)
 	}
 }
