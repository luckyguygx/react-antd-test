import React from 'react'
import { Layout } from 'antd';
import { connect } from 'react-redux'
import './header.less'

const { Header } = Layout;

class Head extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Header>
        <h3>{this.props.menuName}</h3>
      </Header>
    )
  }
}

const mapStateToProps = state => {
  return {
    menuName: state.menuName
  }
}
export default connect(mapStateToProps)(Head);