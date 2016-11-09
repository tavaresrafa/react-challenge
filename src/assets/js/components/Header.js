'use strict'
import React from 'react'
import cx from 'classnames'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menu: [
        {
          'name': 'Politics',
          'link': '#'
        },
        {
          'name': 'Business',
          'link': '#'
        },
        {
          'name': 'Tech',
          'link': '#'
        },
        {
          'name': 'Science',
          'link': '#'
        },
        {
          'name': 'Sports',
          'link': '#'
        }
      ],
      menuOpened: false
    }
    this._openMenu = this._openMenu.bind(this)
  }

  _openMenu () {
    this.setState({
      menuOpened: !this.state.menuOpened
    })
  }

  render () {
    let {
      menuOpened
    } = this.state

    let menuClass = cx('nav-menu', {
      'active': menuOpened
    })

    return (
      <div>
        <header className='menu'>
          <div className='container-fluid'>
            <a className='menu-toggle' onClick={this._openMenu}>
              <span>
                <picture>
                  <source srcSet='./src/assets/img/menu.png 1x, ./src/assets/img/menu@2x.png 2x' />
                  <img src='./src/assets/img/menu.png' alt='USA News Logo' />
                </picture>
              </span>
            </a>

            <div className='header-logo'>
              <a href='#' title='Home USA News'>
                <picture>
                  <source srcSet='./src/assets/img/logo.png 1x, ./src/assets/img/logo@2x.png 2x' />
                  <img src='./src/assets/img/logo.png' alt='USA News Logo' />
                </picture>
              </a>
            </div>

            <nav className={menuClass}>
              <ul>
                {
                  this.state.menu.map((item, i) => {
                    return <li key={i}><a href={item.link}>{item.name}</a></li>
                  })
                }
              </ul>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}

export { Header as default }
