import React from 'react'
import '../../css/components/ImageGrid.css';
import classNames from 'classnames';
import Thumbnail from './Thumbnail'

const ImageGrid = (props) => {
  let thumbnails = []
  for (let i=0; i < props.images; i++) {
    thumbnails.push(<Thumbnail className='ImageGrid__Thumbnail' />)
  }

  return (
    <div className={classNames(props.className, 'ImageGrid')}>
      {thumbnails}
    </div>
  )
}

export default ImageGrid
