let ngrok = await npm("ngrok")
let url = await ngrok.connect(+(await arg("Enter port")))
console.log(url)
