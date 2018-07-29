/**
 * Action 类型
 */
export const type = {
    SWITCH_MENU:'SWITCH_MENU',
    QUANXIAN:'QUANXIAN'
}

export function switchMenu(menuName) {
    return {
        type:type.SWITCH_MENU,
        menuName
    }
}
export function changeQX(name) {
    return{
        type: type.QUANXIAN,
        name
    }

}
