let core = await npm("@actions/core")

let detectPort = await npm("detect-port")
let port = await detectPort(3000)

core.setOutput("port", port)
