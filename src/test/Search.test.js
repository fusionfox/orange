import React from 'react'
import renderer from 'react-test-renderer'
import Search from '../js/Search'

test('Search rendered correctly', () => {
  const component = renderer.create(
    <Search />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
