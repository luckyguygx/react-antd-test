import React from 'react'
import { Row, Col ,Layout} from 'antd';
import HeadTop from '../components/header/index'
import Foot from '../components/foot/'
import Slider from '../components/slide/'
import './common.less'
const { Content} = Layout;

export  default  class  Adimin extends React.Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    render(){
        return(
            <Layout className="layout container">
                <Row style={{height:'100%',overFlow:'hidden'}}>
                    <Col className='slide' span={5}><Slider></Slider></Col>
                    <Col className='main' span={19}>
                        <Layout>
                          <HeadTop></HeadTop>
                          <Content style={{  overflowY: 'scroll' , flex:1}}>
                              {this.props.children}
                              </Content>
                          <Foot></Foot>
                        </Layout>
                    </Col>
                </Row>
            </Layout>
        )
    }
}