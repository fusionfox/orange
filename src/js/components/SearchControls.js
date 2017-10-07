import React from 'react'
import '../../css/components/SearchControls.css';
import classNames from 'classnames';

const SearchControls = (props) => {
  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      props.performSearch(e.target.value)
    }
  }

  return (
    <div className={classNames(props.className, 'SearchControls')}>
      <div className='SearchControls__query'>
        <input type='text' onKeyUp={handleKeyUp} />
      </div>
      <div className='SearchControls__filters'>
        <label>
          <input type='radio' name='media_type' value='image' defaultChecked />
          Images
        </label>
        <label>
          <input type='radio' name='media_type' value='audio' />
          Audio
        </label>
      </div>
    </div>
  )
}

export default SearchControls
