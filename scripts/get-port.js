let detectPort = await npm("detect-port")
let port = await detectPort(80)

console.log(port)
