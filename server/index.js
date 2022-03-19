const app = require('./app');
const db = require('./db');

const PORT = 8080;

const init = async () => {
  await db.sync();
  app.listen(PORT, console.log(`app running on port ${PORT}`));
};

init();
