import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import '../../css/components/Title.css';

const Title = (props) => {
  return (
    <h1 className={classNames(props.className, 'Title')}>
      {props.text}
    </h1>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
