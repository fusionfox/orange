import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Thumbnail from '../js/components/Thumbnail'

test('Image Thumbnail rendered correctly', () => {
  const image = {
    id: 'PIA00231',
    title: 'Photo of the moon',
    description: 'This is a photo that we took of the moon',
    thumbnail: `https://images-assets.nasa.gov/image/PIA00231/PIA00231~thumb.jpg`,
    large: `https://images-assets.nasa.gov/image/PIA00231/PIA00231~large.jpg`
  }

  const component = renderer.create(
    <MemoryRouter>
      <Thumbnail image={image} />
    </MemoryRouter>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
