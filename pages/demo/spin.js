import React, { Component } from 'react'
import { Spin } from 'antd'

class SpinDemo extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', padding: '30px', background: 'rgba(0,0,0,0.05)' }}>
        <Spin />
      </div>
    )
  }
}

export default SpinDemo
