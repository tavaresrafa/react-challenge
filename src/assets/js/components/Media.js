'use strict'
import React from 'react'
import cx from 'classnames'

class Media extends React.Component {
  render () {
    let {
      image,
      title,
      readMore,
      className
    } = this.props

    let path = './src/assets/img/'
    let imageTypes = {
      normal: path + image + '.jpg',
      retina: path + image + '@2x.jpg'
    }

    let mediaClass = cx('thumbnail', className)

    return (
      <picture className={mediaClass}>
        <source srcSet={imageTypes.normal + ' 1x, ' + imageTypes.retina + ' 2x'} />
        <img className='image' src={imageTypes.normal} alt={title} />
        {
          readMore ? <a href='#' className='more'>Read More</a> : null
        }
      </picture>
    )
  }
}

Media.defaultProps = {
  readMore: false
}

export { Media as default }
