import React,{Component} from "react";
import {NavLink} from 'react-router-dom'
import '../common/footer.css'
 export default class Tab extends Component{
 	render(){
 		return (
 				<nav className="footer">
					<NavLink to={'/'} activeClassName="selected" exact>
						<i className="iconfont icon-sousuokuang"></i>
						<span>首页</span>
					</NavLink>
					<NavLink to={'/Lesson'} activeClassName="selected">
						<i className="iconfont icon-pen"></i>
						<span>课程</span>
					</NavLink>
					<NavLink to={'/Profile'} activeClassName="selected">
						<i className="iconfont icon-Santa"></i>
						<span>个人信息 </span>
					</NavLink>
				</nav>
 		)
 	}
 }
