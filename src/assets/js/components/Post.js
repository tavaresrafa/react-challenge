'use strict'
import React from 'react'
import Author from './Author'
import Media from './Media'
import cx from 'classnames'

class Post extends React.Component {
  componentWillReceiveProps (nextProps) {
    this.setState({
      data: nextProps.data
    })
  }

  _renderImage (type, image, title, readMore) {
    if (type === 'featured') {
      return <Media image={image} title={title} readMore={readMore} className='-first' />
    } else if (type === 'primary') {
      return <Media image={image} title={title} readMore={readMore} />
    } else {
      return null
    }
  }

  render () {
    let {
      type,
      data
    } = this.props

    let featuredClass = cx({
      '-first': type === 'featured'
    })

    if (data) {
      let categoryClass = cx({
        'politics': data.tags[0].id === 1,
        'tech': data.tags[0].id === 2,
        'science': data.tags[0].id === 3,
        'sports': data.tags[0].id === 4
      })

      return (
        <article className={'entry-post ' + featuredClass}>
          <ul className={'category ' + featuredClass}>
            <li className={categoryClass}>{data.tags[0].label}</li>
          </ul>
          { this._renderImage(type, data.image, data.title, true) }
          <header className={'header ' + featuredClass}>
            <h2 className='title'>
              {data.title}
            </h2>
            <Author size='normal' name={data.authors} />
          </header>
          <div className={'content ' + featuredClass}>
            <p className='text'>
              {data.content}
            </p>
          </div>
        </article>
      )
    } else {
      return null
    }
  }
}

export { Post as default }
