const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5003;

app.use(bodyParser.json());

let tasks = [
  { id: 1, title: "Task 1", description: "Description 1", userId: 1, completed: false },
  { id: 2, title: "Task 2", description: "Description 2", userId: 2, completed: false },
  { id: 3, title: "Task 3", description: "Description 3", userId: 3, completed: false }
];

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(task => task.id == id);

  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1);
    res.json({ message: 'Task deleted successfully', task: deletedTask });
  } else {
    res.json({ message: 'Task not found' });
  }
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
})

app.listen(port, () => {
  console.log(`Delete Task service running on port ${port}`);
});
