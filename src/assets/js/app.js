'use strict'
import React from 'react'
import axios from 'axios'
import Header from './components/Header'
import Post from './components/Post'
import Loading from './components/Loading'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      loading: true
    }
  }

  componentWillMount () {
    axios.get('/data.json')
    .then((response) => {
      // HTTP request with a simulated delay
      setTimeout(() => {
        this.setState({
          data: response.data.data,
          loading: false
        })
      }, 2500)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  render () {
    let {
      data,
      loading
    } = this.state

    return (
      <div>
        <Header />
        { loading ? <Loading /> : null }
        { !loading ? <div className='main-content container-fluid'>
          <section className='row'>
            <div className='col-lg-6'>
              <Post type='featured' data={data[0]} />
            </div>
            {
              data.map((item, i) => {
                if (i > 0 && i < 3) {
                  return (
                    <div className='col-lg-3 col-sm-6' key={i}>
                      <Post type='primary' data={item} />
                    </div>
                  )
                }
              })
            }
          </section>

          <hr className='hr' />

          <section className='row'>
            {
              data.map((item, i) => {
                if (i > 2) {
                  return (
                    <div className='col-lg-4 col-sm-6' key={i}>
                      <div className='secondary'>
                        <Post type='secondary' data={item} />
                      </div>
                    </div>
                  )
                }
              })
            }
          </section>
        </div> : null }
      </div>
    )
  }
}

export { App as default }
