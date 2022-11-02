let detectPort = await npm("detect-port")
let port = await detectPort(3000)

console.log(port)
