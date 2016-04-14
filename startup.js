
// set up the webpack server
import webpackDevServer from './webpack-dev-server'

// for some reason this is needed too
import server from './server'

// set up my test port
const port = 3000

// Start our webpack dev server...
webpackDevServer.listen(port)
// ... and our main app server.
server.listen(port)

console.log(`Server is listening on http://127.0.0.1:${port}`)
