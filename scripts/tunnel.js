let port = +(await arg("Port:"))
let localtunnel = await npm("localtunnel")
let tunnel = await localtunnel({ port: 3000 })
console.log(tunnel.url)
