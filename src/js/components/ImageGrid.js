import React from 'react'
import '../../css/components/ImageGrid.css';
import classNames from 'classnames';
import Thumbnail from './Thumbnail'

const ImageGrid = (props) => {
  return (
    <div className={classNames(props.className, 'ImageGrid')}>
      <Thumbnail className='ImageGrid__Thumbnail' />
      <Thumbnail className='ImageGrid__Thumbnail' />
      <Thumbnail className='ImageGrid__Thumbnail' />
      <Thumbnail className='ImageGrid__Thumbnail' />
      <Thumbnail className='ImageGrid__Thumbnail' />
      <Thumbnail className='ImageGrid__Thumbnail' />
      <Thumbnail className='ImageGrid__Thumbnail' />
      <Thumbnail className='ImageGrid__Thumbnail' />
      <Thumbnail className='ImageGrid__Thumbnail' />
    </div>
  )
}

export default ImageGrid
