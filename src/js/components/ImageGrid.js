import React from 'react'
import '../../css/components/ImageGrid.css';
import classNames from 'classnames';
import Thumbnail from './Thumbnail'

const ImageGrid = (props) => {
  let thumbnails = props.images.map((image) => {
    return <Thumbnail key={image.id} className='ImageGrid__Thumbnail' image={image} />
  })

  return (
    <ul className={classNames(props.className, 'ImageGrid')}>
      {thumbnails}
    </ul>
  )
}

export default ImageGrid
