const express = require('express');
const { authenticateJwt, SECRET } = require("../middleware/index");
const { Todo } = require("../db");
const router = express.Router();

router.post('/todos', authenticateJwt, (req, res) => {
  const { title, description } = req.body;
  const done = false;
  const userId = req.userId;

  const newTodo = new Todo({ title, description, done, userId });

  newTodo.save()
    .then((savedTodo) => {
      res.status(201).json(savedTodo);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to create a new todo' });
    });
});


router.get('/todos', authenticateJwt, (req, res) => {
  const userId = req.userId;

  Todo.find({ userId })
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to retrieve todos' });
    });
});

// chnange the value of done to true.

router.post('/todos/:todoId/done', authenticateJwt, async (req, res) => {
  const { todoId } = req.params;
  const userId = req.userId;

  const updatedTodo = await Todo.findOneAndUpdate({ _id: todoId, userId }, { done: true });
  
  if (!updatedTodo) {
    return res.status(404).json({ error: 'Todo not found' });
  }else {
    res.json(updatedTodo);
  }
});

module.exports = router;