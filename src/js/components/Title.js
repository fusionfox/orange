import React from 'react'
import classNames from 'classnames';
import '../../css/components/Title.css';

const Title = (props) => {
  return (
    <h1 className={classNames(props.className, 'Title')}>
      {props.text}
    </h1>
  )
}

export default Title
