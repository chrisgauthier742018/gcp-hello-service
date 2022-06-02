const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('hello: received request.');

  const {NAME} = process.env;
  if (!NAME) {
    // Plain error logs do not appear in Stackdriver Error Reporting.
    console.error('Environment validation failed.');
    console.error(new Error('Missing required server parameter'));
    return res.status(500).send('Bad Server Error');
  }
  res.send(`Hello ${NAME}!`);
});
const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`hello: listening on port ${port}`);
});