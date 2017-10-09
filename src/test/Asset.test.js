import React from 'react'
import renderer from 'react-test-renderer'
import Asset from '../js/Asset'

test('Asset rendered correctly', () => {
  const match = {
    params: {
      id: 'PIA00231'
    }
  }

  const component = renderer.create(
    <Asset match={match} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
