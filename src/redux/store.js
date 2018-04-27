import reducers from './reducers/index'
import {createStore,applyMiddleware} from 'redux'
import reduxTunk from 'redux-thunk'//运行action自定义s
export default createStore(reducers)
