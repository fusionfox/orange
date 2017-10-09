import React from 'react'
import renderer from 'react-test-renderer'
import Title from '../js/components/Title'

test('Text is displayed in a h1 tag', () => {
  const component = renderer.create(
    <Title text="This is a title" />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
