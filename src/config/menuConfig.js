
const menuList = [
    {
        title: '首页',
        icon:'home',
        key: '/home'
    },
    {
        title: '生命周期',
        icon:'home',
        key: '/life'
    },

    {
        title: '表单',
        icon:'form',
        key: '/form',
        children: [
            {
                title: '登录',
                key: '/form/login',
            },
            {
                title: '注册',
                key: '/form/reg',
            }
        ]
    },
    {
        title: '表格',
        icon:'table',
        key: '/table',
        children: [
            {
                title: '基础表格',
                key: '/table/basic',
            },
            {
                title: '高级表格',
                key: '/table/high',
            }
        ]
    },
    {
        title: '员工管理',
        icon:'contacts',
        key: '/user'
    },
    {
        title: '权限设置',
        icon:'mail',
        key: '/permission'
    },
];
export default menuList;