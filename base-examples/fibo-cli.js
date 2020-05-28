const fibo = require("./fibo");
const chalk = require("chalk");

try {
  console.log(chalk.green(fibo.fibo(process.argv[2])));
} catch (err) {
  console.error(chalk.bold.red(err.message));
}
