const express = require('express')
const axios = require('axios')

const app = express()

app.get('/', async (req, res) => {
  if (req.query.url) {
    try {
      const { status, statusText, data } = await axios.get(req.query.url)
      res.json({
        status,
        statusText,
        data
      })
    } catch (err) {
      res.sendStatus(400)
    }
  } else {
    res.sendStatus(400)
  }
})

app.listen(3020, () => {
  console.log('Listening on port 3020')
})
