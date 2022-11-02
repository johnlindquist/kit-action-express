let port = await arg("Enter port")

let express = await npm("express")
let app = express()

let { ip } = await $`dig -4 TXT +short o-o.myaddr.l.google.com @ns1.google.com`

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(+port, () => {
  console.log(`Example app listening at http://${ip}:${port}`)
})
