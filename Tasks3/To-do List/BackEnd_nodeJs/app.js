const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();

const apiRoutes = require('./src/routes/routes');

app.use(cors());

const uri = "mongodb+srv://SHIRO:123453456@cluster0.qlg32.mongodb.net/testEducationDB?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json());
app.use('/', apiRoutes);

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});