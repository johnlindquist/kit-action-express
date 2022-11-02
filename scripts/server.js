let express = await npm("express")

let app = express()
let port = await detectPort(3000)

let { ip } = await $`dig -4 TXT +short o-o.myaddr.l.google.com @ns1.google.com`

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening at http://${ip}:${port}`)
})
