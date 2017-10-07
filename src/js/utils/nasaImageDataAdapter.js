
export default (nasaImage) => {
  const id = nasaImage.data[0].nasa_id

  return ({
    id: id,
    title: nasaImage.data[0].title,
    description: nasaImage.data[0].description,
    thumbnail: `https://images-assets.nasa.gov/image/${id}/${id}~thumb.jpg`,
    large: `https://images-assets.nasa.gov/image/${id}/${id}~large.jpg`
  })
}
