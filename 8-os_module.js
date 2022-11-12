const os = require("os")

//info about current user
console.log(os.userInfo())

//return system uptime in seconds
console.log(os.uptime())
// os type
console.log(os.type())
// os total memory
console.log(os.totalmem())
// os free memory
console.log(os.freemem())