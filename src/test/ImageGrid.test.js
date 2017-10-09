import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import ImageGrid from '../js/components/ImageGrid'

test('ImageGrid rendered correctly', () => {
  const images = [{
    id: 'PIA00231',
    title: 'Photo of the moon',
    description: 'This is a photo that we took of the moon',
    thumbnail: `https://images-assets.nasa.gov/image/PIA00231/PIA00231~thumb.jpg`,
    large: `https://images-assets.nasa.gov/image/PIA00231/PIA00231~large.jpg`
  },
  {
    id: 'PIA03149',
    title: 'Photo of the sun',
    description: 'This is a photo that we took of the sun',
    thumbnail: `https://images-assets.nasa.gov/image/PIA03149/PIA03149~thumb.jpg`,
    large: `https://images-assets.nasa.gov/image/PIA03149/PIA03149~large.jpg`
  }]

  const component = renderer.create(
    <MemoryRouter>
      <ImageGrid images={images} />
    </MemoryRouter>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
