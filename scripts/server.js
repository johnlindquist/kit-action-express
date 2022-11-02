let port = await arg("Enter port")

let core = await npm("@actions/core")

core.debug(`This is a debug message`)
core.info(`This is an info message`)
core.warning(`This is a warning message`)
core.notice(`This is a notice message`)

let ngrok = await npm("ngrok")
let express = await npm("express")
let app = express()

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(+port, async () => {
  core.debug(`Example app listening at ${port}`)

  let url = await ngrok.connect(+port)
  core.debug(url)
})
