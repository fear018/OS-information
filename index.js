const fs = require("fs");
const os = require("os");

const information = `
os - ${os.type()}
user - ${os.userInfo().username}
cores - ${os.cpus().length}
free system memory (MB) - ${os.freemem() / 1000000}
CPU speed - ${os.cpus()[0].speed}
os version - ${os.version()}
`;

fs.writeFile("info.txt", `${information}`, (error) => {
  if (error) {
    console.log(`error-fs.writeFile-${error}`);

    throw error;
  }

  console.log("info.txt was created with information about OS");
});
