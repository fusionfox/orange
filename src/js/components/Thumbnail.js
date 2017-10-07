import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/components/Thumbnail.css';
import classNames from 'classnames';

const Thumbnail = (props) => {
  return (
    <li className={classNames(props.className, 'Thumbnail')}>
      <Link to={`/asset/${props.image.id}`}>
        <img className='Thumbnail__image' src={props.image.href} alt={props.image.alt} />
      </Link>
    </li>
  )
}

export default Thumbnail
