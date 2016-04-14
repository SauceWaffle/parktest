
// use http and normal react thing
import http from 'http'
import React from 'react'

// call to create the local server
var server = http.createServer(function(req, res) {

  // for some reason this is needed
  if (req.url.match('favicon.ico')) {
    return res.end()
  }

  // create the actual html page with just a div to render stuff to
  res.write(
    `<!DOCTYPE html>
    <html>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <div id="home"></div>
        <script type="text/javascript" src="http://localhost:3001/static/bundle.js"></script>
      </body>
    </html>`
  )

  res.end()
})

export default server
