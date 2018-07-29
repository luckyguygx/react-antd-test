/**
 * Reducer 数据处理
 */
import { type } from './../action'
const initialState = {
    menuName:'首页'
}

export default (state = initialState,action)=>{
    switch (action.type) {
        case type.SWITCH_MENU:
            return {
                ...state,
                menuName:action.menuName
            }
        case type.QUANXIAN:
            return{
                ...state,
                name:action.name
            }
        default:
            return {
                ...state
            };
    }
}