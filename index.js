const { app } = require('./dist/server.js');

const port = process.env.PORT || 9010;

app.listen(port, () => console.info(`Server started on port ${port}`));
