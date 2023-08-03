const express = require('express');
const app = express();
const todoRoutes = require('./routes/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', todoRoutes);

app.listen(3001, () => {
    console.log('Server started on port 3001');
  });
