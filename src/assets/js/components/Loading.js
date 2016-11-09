'use strict'
import React from 'react'

class Loading extends React.Component {
  render () {
    return (
      <div className='sk-three-bounce'>
        <div className='sk-child sk-bounce1' />
        <div className='sk-child sk-bounce2' />
        <div className='sk-child sk-bounce3' />
      </div>
    )
  }
}

export { Loading as default }
