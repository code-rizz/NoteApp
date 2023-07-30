const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Todo-list');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
  });