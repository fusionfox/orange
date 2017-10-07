import React from 'react'
import '../../css/components/Thumbnail.css';
import classNames from 'classnames';

const Thumbnail = (props) => {
  return (
    <div className={classNames(props.className, 'Thumbnail')}>
      <img className='Thumbnail__image' src={props.href} />
    </div>
  )
}

export default Thumbnail
