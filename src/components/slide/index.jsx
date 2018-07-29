import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {switchMenu} from "../../redux/action";
import MenuList from '../../config/menuConfig'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
class Slider extends React.Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    state = {
        openKeys: ['/form'],
        currentKey:['/'],
        menuTreeNode:''
    };
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuList);
        let currentKey = [window.location.hash.replace(/#|\?.*$/g, '')];
        this.setState({
            currentKey,
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu key={item.key} title={<span><Icon type={item.icon}/><span>{item.title}</span></span>}>
                     {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    handleClick= (item)=>{
        console.log(item)
        const {dispatch} = this.props;
        dispatch(switchMenu(item.item.props.title))
        this.setState({
            currentKey: [item.key]
        })
    }

    render() {
        let style={
            line50:{
                lineHeight:'50px'
        }
        }
        return (
            <section>
                <h2 className='align-center' style={style.line50}>后台管理测试</h2>
                <Menu
                    mode="inline"
                    selectedKeys={this.state.currentKey}
                    openKeys={this.state.openKeys}
                    onClick={this.handleClick}
                    onOpenChange={this.onOpenChange}>
                    { this.state.menuTreeNode }
                </Menu>
            </section>

        );
    }
}
export  default connect()(Slider)
// export default connect(undefined,undefined,undefined,{pure:false})(Slider)
// export default withRouter(connect()(Slider));