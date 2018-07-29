
import React from 'react'

export  default  class  Child extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count:80
        }
    }

    // 常用 dom渲染之前
    componentWillMount(){
        console.log('will mount')
    }

    // 常用 dom插入完成
    componentDidMount(){
        console.log('did mount')
    }

    // props发生变化时调用
    componentWillReceiveProps(newProps){
        console.log('new props' + JSON.stringify(newProps))
    }

    shouldComponentUpdate(){
        console.log('should update')
        return true;
    }
    componentWillUpdate(){
        console.log('will update')
    }
    componentDidUpdate(){
        console.log('did update')
    }

    render(){
        let style={
            padding: 20
        }
        return <div>
            <p>测试组件的生命周期</p>
            <p>{this.state.count}</p>
            <p style={style}>{this.props.name}</p>
        </div>
    }
}