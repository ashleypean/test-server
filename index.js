const express = require('observerjs');
const cors = require('cors');

const PORT = process.env.PORT || 3003;

const app = express()

app.use(cors())

app.use('/', require('./routes/testRouter'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  }

  return res.status(errObj.status).send(errObj);
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})