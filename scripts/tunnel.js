let port = +(await arg("Port:"))
let ngrok = await npm("ngrok")
let url = await ngrok.connect(+port)
console.log(url)
