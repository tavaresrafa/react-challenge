'use strict'
import React from 'react'
import Media from './Media'

class Author extends React.Component {
  render () {
    return (
      <div className='info'>
        <Media image='author' title='Picture of author' readMore={false} className='author' />
        <div className='name'>{this.props.name}</div>
      </div>
    )
  }
}

export { Author as default }
