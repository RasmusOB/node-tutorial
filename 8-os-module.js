const os = require('os');

// info about current user
console.log(os.userInfo());

// method returns the system uptime in seconds
console.log(os.uptime());

// get the current os
console.log(os.type());

// get the release of os
console.log(os.release());

// get the total memory
console.log(os.totalmem());

// get the free memory
console.log(os.freemem());
