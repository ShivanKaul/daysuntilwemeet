import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

moment().format()

var targetDate = moment([2016, 9, 29]) // 0 -> Jan
var heartLink = "https://giphy.com/gifs/excited-corgi-xT77XKxcPqxIZqUrwk"

// Top level
var Page = React.createClass({
  getDefaultProps: function () {
    // Pass down CSS
    const parentcss = {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vr',
      alignItems: 'center'
    }
    const cmp = {
      height: '40vh',
      width: '100vh'
    }

    return {
      parentcss: parentcss,
      cmp: cmp
    }
  },

  render: function () {
    // Styles
    return (
      <div style={this.props.parentcss}>
        <Days style={this.props.cmp} />
        <Heart style={this.props.cmp} />
      </div>
    )
  }
})

// Days left
var Days = React.createClass({
  render: function () {
    const paragraph = {
      fontSize: '10vmin',
      textAlign: 'center',
      fontFamily: 'Lato',
    }
    // Target date defined above
    var dateToday = moment()
    var daysLeft = targetDate.diff(dateToday, 'days')

    // set title of page
    document.title = daysLeft + ' days left!'
    return (
      <div style={this.props.style}>
        <p style={paragraph}>
          Only {daysLeft} days left!
        </p>
      </div>
    )
  }
})

// <3
var Heart = React.createClass({
  render: function () {
    const paragraph = {
      textAlign: 'center',
    }
    const heart = {
      width : '30vmin'
    }
    return (
      <div style={this.props.style}>
        <p style={paragraph}>
          <a target="_blank" href={heartLink}> <img style={heart} title='yay' alt='this was supposed to be a heart' src={'./heart.png'} /> </a>
        </p>
      </div>
    )
  }
})

ReactDOM.render(
  <Page />,
  document.getElementById('container')
)
