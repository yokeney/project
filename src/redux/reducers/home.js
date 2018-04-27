//home里放首页所有信息
import  * as Types from '../action-types'
let initState={
	currentLesson:0,
	silders:[]
}
export default function(state=initState ,action){
	if (action===undefined) return state;
	switch (action.type) {
		case Types.SET_CURRENT_LESSON:
		return{...state,currentLesson:action.val}
	}
	return state;
}
