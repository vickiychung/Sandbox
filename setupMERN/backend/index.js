const express = require('express');
const mongoose = require('mongoose');
const app = express();

const db = require('./config/keys').mongoURI;

const questions = require('./routes/api/questions');

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongos a go go'))
  .catch(err => console.log(err));

// test route
app.get('/', (req, res) => res.send("this works"));

app.use('/api/questions', questions);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));