const express = require('express');
const routes = require('./routes')

const app = express();
const port = 5000;


app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Listening on port ${port}...`));
