import nasaImageDataAdapter from '../js/utils/nasaImageDataAdapter'
const imageData = require('./stub-data/nasa-image-data.json')

test('Data is correctly adapted', () => {
  expect(nasaImageDataAdapter(imageData)).toEqual({
    id: "PIA00231",
    title: "Moon As Seen By NIMS",
    description: "These four images of the Moon are from data acquired by NASA Galileo spacecraft Near-Earth Mapping Spectrometer during Galileo December 1992 Earth/Moon flyby.  http://photojournal.jpl.nasa.gov/catalog/PIA00231",
    thumbnail: `https://images-assets.nasa.gov/image/PIA00231/PIA00231~thumb.jpg`,
    large: `https://images-assets.nasa.gov/image/PIA00231/PIA00231~large.jpg`
  })
})
