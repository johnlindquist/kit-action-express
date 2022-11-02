let port = +(await arg("Port:"))

let express = await npm("express")
let app = express()

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(+port, async () => {
  console.log("Server listening on port " + port)
})
