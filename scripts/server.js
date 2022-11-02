let port = await arg("Enter port")

let core = await npm("@actions/core")
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
