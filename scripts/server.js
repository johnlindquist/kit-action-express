let port = await arg("Enter port")

let express = await npm("express")
let app = express()

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(+port, () => {
  console.log(`Example app listening at ${port}`)
})
