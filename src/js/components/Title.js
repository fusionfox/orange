import React from 'react'
import PropTypes from 'prop-types'
import '../../css/components/Title.css';

const Title = ({text}) => {
  return (
    <h1 className='Title'>{text}</h1>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
