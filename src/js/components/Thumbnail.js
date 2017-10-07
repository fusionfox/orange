import React from 'react'
import '../../css/components/Thumbnail.css';
import classNames from 'classnames';

const Thumbnail = (props) => {
  return (
    <li className={classNames(props.className, 'Thumbnail')}>
      <img className='Thumbnail__image' src={props.href} alt={props.alt} />
    </li>
  )
}

export default Thumbnail
