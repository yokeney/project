import React,{Component} from "react";
import HomeHeader from '../HomeHeader/index'
import {connect} from 'react-redux'
import * as action from '../redux/action/home'
 class Home extends Component{
     chooseLesson=(type)=>{
         console.log(type);
         this.props.setCurrentLesson(type);
     };
 	render(){
 		return (
 			<HomeHeader chooseLesson={this.chooseLesson}/>
 		)
 	}
 }
 //mapStateToProps将redux变成属性
 //mapDispatchToProps可以直接传一个actionCreator的对象
 //this.props.setCurrentLesson
 export default connect(state=>({...state}),action)(Home)
