
import React from 'react'
import Child from './child'
import {Button,Input} from 'antd'
// import 'antd/dist/antd.css' //webpack 里已经配置按需加载

import './test.less'

export  default  class  Life extends React.Component{

    state={
        count:8
    }
    handleAdd(){
        console.log(this.state)
        this.setState({
            count:this.state.count+1
        })
    }
    handleClick = ()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handleChange=(event)=>{
        console.log()
        this.setState({
            count:event.target.value
        })
    }
    render(){
        return <div className="content">
            <p >react 生命周期介绍 打开开发者工具看console结果</p>
            <Input type='' id='' onChange={this.handleChange} value={this.state.count} defaultValue={this.state.count} className='search-input'/>
            <Button className='btn'  onClick={this.handleAdd.bind(this)}>点击一下</Button>
            <Button className='btn'  onClick={this.handleClick}>点击一下</Button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}/>
        </div>
    }
}