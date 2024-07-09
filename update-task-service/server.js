const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5002;

app.use(bodyParser.json());

let tasks = [
  { id: 1, title: "Task 1", description: "Description 1", userId: 1, completed: false },
  { id: 2, title: "Task 2", description: "Description 2", userId: 2, completed: false },
  { id: 3, title: "Task 3", description: "Description 3", userId: 3, completed: false }
];


app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const task = tasks.find(task => task.id == id);

  if (task) {
    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed !== undefined ? completed : task.completed;
    res.json({ message: 'Task updated successfully', task });
  } else {
    res.json({ message: 'Task not found' });
  }
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(port, () => {
  console.log(`Update Task service running on port ${port}`);
});
