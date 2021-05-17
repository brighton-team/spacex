const sequelize = require('src/db/init/index');
const { app } = require('./dist/server.js');

// const port = process.env.PORT || 9010;
const port = 4444;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    // eslint-disable-next-line no-console
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

start();
