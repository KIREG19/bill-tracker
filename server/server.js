const express = require('express');
const path = require('path');
// const cors = require('cors');

const app = express();
const PORT = 3000|| process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

app.use('/build', express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
})



app.use((req, res) => res.status(404).send('Page Not Found'));


app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})

module.exports = app;