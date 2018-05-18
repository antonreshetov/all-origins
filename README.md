# All origins

A simple server that allows cross-domain requests for later use.

## Usage

Use on you own server or local host for testing

### Install

```bash
# Clone the repo
git clone https://github.com/antonreshetov/all-origins.git

# Install dependencies
cd all-origins
npm i

# Start server (by default port is 3020)
npm start
```

### Use

On server start pass the url in query string `?url=` to your host to get the result of the request:

```
http://localhost:3020/?url=http://example.com
```

Use any tool for HTTP requests on client to get the results of the request for their own purposes.

**Example:**

Fetch pretty gorgis from instagram 🐶😊

```js
fetch(
  'http://localhost:3020/?url=https://www.instagram.com/corgis_of_instagram'
)
  .then(res => res.json())
  .then(res => {
    let result = JSON.parse(
      res.data
        .split('window._sharedData = ')[1]
        .split(';</script>')[0]
        .replace(/\\"/g, '"')
    )
    result = result.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.map(
      item => item.node.thumbnail_src
    )

    console.log(result)
  })
```

## License

MIT © 2018-present [Anton Reshetov](https://github.com/antonreshetov)
