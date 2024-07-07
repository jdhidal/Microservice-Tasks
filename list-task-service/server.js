const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5001;

app.use(bodyParser.json());

const tasks = [
  { id: 1, title: "Task 1", description: "Description 1", userId: 1, completed: false },
  { id: 2, title: "Task 2", description: "Description 2", userId: 2, completed: false }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`List Task service running on port ${port}`);
});
