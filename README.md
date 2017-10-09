# NASA Search
## Improvements for the future
- **Implement proper support of Audio assets**
  - If searching for audio media types, replace the ImageGrid with an audio asset list
  - On Asset page, provide an audio player
- **Improve resilience fetching images; not all images have every size available**
  - Attempted to get [image collection array](https://images-assets.nasa.gov/image/PIA04994/collection.json) but it seems like CORS is not enabled for that subdomain
  - Because the images are also hosted on that subdomain, I can't even check the URLs from the client to see if they exist
  - Currently using this library as a workaround: https://www.npmjs.com/package/react-image-fallback
- Screenshot testing with BackstopJS (Docker works well https://hub.docker.com/r/backstopjs/backstopjs/)
- Switch to stubbed out baseURL for API calls during testing
- More reliable parsing of data; less direct array access
- Use PropTypes to better define data contracts between components
- Lint with StandardJS
- Allow switching to search another API for data, to prove usefulness of data abstraction
- Preserve state across the app; allow going back to search results after viewing an asset
- Display loading spinner while waiting for API to return data
- Display useful message if no results are returned for a search, or if no image is available
