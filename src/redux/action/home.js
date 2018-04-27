//actionCreators
import * as Types from '../action-types'
export const setCurrentLesson=(val)=>{
	return {
		type:Types.SET_CURRENT_LESSON,
		val
	}
}
//如果使用reduxTunk action Createator可以返回一个函数，函数中有dispatch参数
// export const getsilder=()=>=(dispatch)=>{
// 	getsilder().then(slider=>{
// 		type:Types.GET_SLIDERS,
// 		slider
// 	})
// }
