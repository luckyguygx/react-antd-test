import React from 'react'
import { Layout} from 'antd';
const { Footer} = Layout;

export  default  class  Head extends React.Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
                <Footer style={{height:'50px',background:'#fff',lineHeight:'50px',padding:'0'}}>
                    <p style={{color:'#999',fontSize:'12px', textAlign:'center'}}>React+ React-router + Redux + Antd 后台测试工程</p>
                </Footer>
        )
    }
}